var $$ = Dom7;

var orderItems = localStorage.getItem("txtClients");
var customers = localStorage.getItem("customers");
window.base_url = "http://178.128.63.151/slimapp";
//var base_url = "http://localhost/slim";
var currency_icon = '₱';
$$(".button").addClass("button-big");
/*
var products = localStorage.getItem("products");*/
var app = new Framework7({
    root: '#app',
    id: 'io.super8.super8app',
    name: 'Super8',
    theme: 'auto',
    pushState: true,
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                userName:'admin',
                passWord:'admin'
            },
            productcs: JSON.parse(orderItems),
            products: JSON.parse(localStorage.getItem("jsonproducts")),
            // products:[{"id":"1","sku":"A0000001","name":"Denim Shirt2","cat":"Out Wear","state":"New","statecolor":"green","size":"","img":"12.jpg","oldprice":"","price":"350.00","descr":"Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time","stock":"10","cname":"","check":"","select":"","notes":"","email":"","smname":"","timestamp":"","ponumber":"","total":""},{"id":"2","sku":"A0000002","name":"Denim Shirt40","cat":"Out Wear","state":"New","statecolor":"green","size":"","img":"12.jpg","oldprice":"","price":"360.00","descr":"Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time","stock":"10","cname":"","check":"","select":"","notes":"","email":"","smname":"","timestamp":"","ponumber":"","total":""},{"id":"3","sku":"A0000003","name":"Denim Shirt","cat":"Sports Wear","state":"New","statecolor":"green","size":"","img":"12.jpg","oldprice":"","price":"299.00","descr":"Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time","stock":"4","cname":"","check":"","select":"","notes":"","email":"","smname":"","timestamp":"","ponumber":"","total":""}]

        };
    },
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
});



var mainView = app.views.create('.view-main', {
    url: '/'
});

var settingsView = app.views.create('#view-settings', {
    url: '/settings/'
});
var customersView = app.views.create('#view-catalog', {
    url: '/catalog/'
});
$$('#my-login-screen .login-button')
    .on('click', function () {
        var username = $$('#my-login-screen [name="username"]')
            .val();
        var password = $$('#my-login-screen [name="password"]')
            .val();
        app.loginScreen.close('#my-login-screen');
        var theuser = 'admin';
        var thepassword = 'admin';
        if (theuser == username && thepassword== password){
            app.dialog.alert('Hi ' + username);
        }else{
            app.dialog.alert('Invalid credentials');
            return false;
        }
       // app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
    });
$$('a.getsku')
    .on('click', function () {
        sessionStorage.setItem("skuItem", ThisSKU);
        app.dialog.alert(selectedCat);
    });



$$(document).on('page:init', '.page[data-name="catalog"]', function (e) {

    console.log("Catalog");
    app.addToMyCart = function (id) {
        if (!localStorage.getItem("idMember")) {
            app.dialog.alert("Please select a customer.");
            app.router.navigate('/catalogb/');
            return false;
        } else {
            console.log("continue shopping");
            var l = $$('.prod-' + id);
            var products = JSON.parse(localStorage.getItem('products')),
                producto = _.find(products, {
                    'id': id
                }),
                cant = 1;
            $$('body')
                .css('opacity', '0.5');
            if (cant <= producto.stock) {
                if (undefined != producto) {
                    if (cant > 0) {
                        setTimeout(function () {
                            var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                                items: []
                            };
                            app.searchProd(cart,
                                producto.id,
                                producto.sku,
                                parseInt(cant),
                                producto.name,
                                producto.price,
                                producto.img,
                                producto.stock,
                                producto.oldprice,
                                producto.notes,
                                producto.cname,
                                producto.check = "notsync",
                                producto.select,
                                producto.email,
                                producto.smname,
                                producto.timestamp,
                                producto.ponumber,
                                producto.total = localStorage.getItem("grndTotal")
                            )
                            console.log(parseInt(cant))
                            $$('body')
                                .css('opacity', '1');
                        }, 100)
                    } else {
                        app.dialog.alert('Only larger quantities are allowed to zero');
                    }
                } else {
                    app.dialog.alert('Oops! Something we wrong, try again later')
                }
            } else {
                app.dialog.alert('You can not add more of this product');
            }
        }
    }
    app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
        var curProd = _.find(cart.items, {
            'id': id
        })
        console.log("search products");
        if (undefined != curProd && curProd != null) {
            if (curProd.cant < available) {
                curProd.cant = parseInt(curProd.cant + cant);
            } else {
                app.dialog.alert('This product is currently out of stock');
            }
            $$('#prod_' + curProd.id)
                .val(curProd.cant);
        } else {
            var timeandponumber = new Date()
                .getTime();
            localStorage.setItem("timeandponumber", timeandponumber);
            var timeandpo = localStorage.getItem("timeandponumber");
            var prod = {
                cant: cant,
                check: check,
                cname: cname = localStorage.getItem("idMember"),
                email: email,
                id: id,
                img: img,
                name: name,
                notes: notes,
                oldprice: oldprice,
                ponumber: timeandpo,
                price: price,
                select: select,
                sku: sku,
                smname: smname = localStorage.getItem("idSalesMngr"),
                timestamp: timeandpo,
                total: localStorage.getItem("grndTotal")
            }
            cart.items.push(prod)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        //  app.updatePayForm();
    }
});
$$(document)
    .on('page:init', '.page[data-name="catalogc"]', function (e) {
        app.purchaseOrders();
        $$('.item-link').on('click', function () {
            var codeID = $$(this).attr("data-code");
            app.thisItem(codeID);

        })
    });

app.thisItem = function (codeID) {
    var purchase_orders = JSON.parse(localStorage.getItem("txtClients"));

    var evens = _.filter(purchase_orders, function (obj) {
        return ~obj.code.toLowerCase().indexOf(codeID);
    });
    localStorage.setItem("POselected", JSON.stringify(evens));
    var newdata = evens;

    $.each(newdata, function (i, v) {
        var shortdate = v.date.substr(0, v.date.lastIndexOf(" GMT") + 1);
        $('#thisPOdata').html('<div class="block"><ul>' +
            '<li><label>PO #:</label>' + v.code + '</li>' +
            '<li><label>Customer:</label>' + v.name + '</li>' +
            '<li><label>Date:</label>' + shortdate + '</li></ul>' +
            '<div><table class="table">' + v.items + '</table></div></div>'
        );
    })

    $$(".table tbody").addClass("cart");
}


$$(document).on('page:init', '.page[data-name="activepo"]', function (e) {
    alert('activepo');
});
app.purchaseOrders = function () {
    var operation = "A";
    var index_selected = -1;
    var txtClients = localStorage.getItem("txtClients");
    txtClients = JSON.parse(txtClients);
    if (txtClients == null) {
        txtClients = [];
    }


    $$("#frmCadastro").on("click", ".btn-submit-po", function () {
        if (operation == "A") {
            return Adicionar(txtClients);

        } else {

            return EditItem(txtClients, index_selected);
        }
    });

    List(txtClients);
    console.log('list orders');
    $$("#tblList")
        .on("click", ".btnEdit", function () {
            operation = "E";
            index_selected = parseInt($$(this)
                .attr("alt"));
            var cli = JSON.parse(txtClients[index_selected]);
            $$("#txtCode")
                .val(cli.code);
            $$("#txtName")
                .val(cli.name);
            $$("#txtCid")
                .val(cli.cid);
            $$("#txtDate")
                .val(cli.date);
            $$("#txtItems")
                .val(cli.items);
            $$("#txtNotes")
                .val(cli.notes);
            $$("#txtCode")
                .attr("readonly", "readonly");
            $$("#txtName")
                .focus();

        });

    $$("#tblList")
        .on("click", ".btnDeleteItem", function () {
            index_selected = parseInt($$(this)
                .attr("alt"));
            DeleteItem(txtClients, index_selected);
            (txtClients);
        });



    function CustomerCartInfo() {
        var activeCustomer = localStorage.getItem("fnMember");
        console.log(activeCustomer);
        $$("#nowserving")
            .html(activeCustomer);
        var timepo = localStorage.getItem("timeandponumber");
        $$("#servingpo")
            .html(timepo);


    }



    function Adicionar(txtClients) {
        var client = {
            code: $$("#txtCode")
                .val(),
            name: $$("#txtName")
                .val(),
            cid: $$("#txtCid")
                .val(),
            date: $$("#txtDate")
                .val(),
            items: $$("#txtItems")
                .val(),
            notes: $$("#txtNotes").val()
        };
        txtClients.push(client);
        console.log("txtClients - " + txtClients);
        localStorage.setItem("txtClients", JSON.stringify(txtClients));
        var listPO = localStorage.getItem("txtClients");
        console.log(listPO);
        app.dialog.alert("Item Added Successfully.");
        $$('#frmCadastro')
            .hide();
        $$('.popup-backdrop').removeClass('backdrop-in');

        app.router.navigate('/catalogc/');
        app.resetPOCart();
        return true;
    }


    function EditItem(txtClients, index_selected) {
        txtClients[index_selected] = JSON.stringify({
            code: $$("#txtCode")
                .val(),
            name: $$("#txtName")
                .val(),
            cid: $$("#txtCid")
                .val(),
            date: $$("#txtDate")
                .val(),
            items: $$("#txtItems")
                .val(),
            notes: $$("#txtNotes")
                .val()
        });
        localStorage.setItem("txtClients", JSON.stringify(txtClients));
        app.dialog.alert("Updated Successfully.")
        operation = "A";
        return true;
    }

    function DeleteItem(txtClients, index_selected) {
        txtClients.splice(index_selected, 1);
        localStorage.setItem("txtClients", JSON.stringify(txtClients));
        app.dialog.alert("Item Deleted.");

    }

    function List(txtClients) {
        $$("#tblList")
            .html("");
        for (var i in txtClients) {
            var cli = txtClients[i];
            var olddate = cli.date;
            var shortdate = olddate.substr(0, olddate.lastIndexOf(" GMT") + 1);
            $$("#tblList")
                .append('<li id="' + i + '">' +
                    '<a href="#" class="item-link item-content popup-open"  data-popup="#activepo" data-code="' + cli.code + '" alt="">' +
                    '<div class="item-inner">' +
                    '<div class="item-title">' + cli.name + '<p><small>' + shortdate + '</small></p></div>' +
                    '<div class="item-after"><span class="badge">' + cli.notes + '</span></div>' +
                    '</div>' +
                    '</a>' +
                    '</li>'
                );
        }
    }
}



$$(document)
    .on('page:init', '.page[data-name="homes"]', function (e) {

    });
$$(document)
    .on('page:init', '.page[data-name="catalog"]', function (e) {

        //  app.loadStore();
        app.preloader.show();
        setTimeout(function () {
            app.preloader.hide();
            app.loadStore();
        }, 800);
        console.log("Catalog");
        app.addToMyCart = function (id) {
            app.createProducts();
            if (!localStorage.getItem("idMember")) {
                app.dialog.alert("Please select a customer.");
                app.router.navigate('/catalogb/');
                return false;
            } else {
                console.log("continue shopping");
                //  console.log("add to cart");
                var l = $$('#prod_' + id);
                var products = JSON.parse(localStorage.getItem('products')),
                    producto = _.find(products, {
                        'id': id
                    }),
                    cant = 1;
                $$('body')
                    .css('opacity', '0.5');
                if (cant <= producto.stock) {
                    if (undefined != producto) {
                        if (cant > 0) {
                            setTimeout(function () {
                                var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                                    items: []
                                };
                                app.searchProd(cart,
                                    producto.id,
                                    producto.sku,
                                    parseInt(cant),
                                    producto.name,
                                    producto.price,
                                    producto.img,
                                    producto.stock,
                                    producto.oldprice,
                                    producto.notes,
                                    producto.cname,
                                    producto.check = "notsync",
                                    producto.select,
                                    producto.email,
                                    producto.smname,
                                    producto.timestamp,
                                    producto.ponumber,
                                    producto.total = localStorage.getItem("grndTotal")
                                )
                                console.log(parseInt(cant))
                                $$('body')
                                    .css('opacity', '1');
                            }, 100)
                        } else {
                            app.dialog.alert('Only larger quantities are allowed to zero');
                        }
                    } else {
                        app.dialog.alert('Oops! Something we wrong, try again later')
                    }
                } else {
                    app.dialog.alert('You can not add more of this product');
                }
            }
        }


        app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
            var curProd = _.find(cart.items, {
                'id': id
            })
            console.log("search products");
            if (undefined != curProd && curProd != null) {
                if (curProd.cant < available) {
                    curProd.cant = parseInt(curProd.cant + cant)
                } else {
                    app.dialog.alert('This product is currently out of stock')
                }
                $$('#prod_' + curProd.id)
                    .val(curProd.cant);
            } else {
                var timeandponumber = new Date()
                    .getTime();
                localStorage.setItem("timeandponumber", timeandponumber);
                var timeandpo = localStorage.getItem("timeandponumber");
                var prod = {
                    cant: cant,
                    check: check,
                    cname: cname = localStorage.getItem("idMember"),
                    email: email,
                    id: id,
                    img: img,
                    name: name,
                    notes: notes,
                    oldprice: oldprice,
                    ponumber: timeandpo,
                    price: price,
                    select: select,
                    sku: sku,
                    smname: smname = localStorage.getItem("idSalesMngr"),
                    timestamp: timeandpo,
                    total: localStorage.getItem("grndTotal")
                }
                cart.items.push(prod)
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            app.init();
            app.getProducts();
            app.updatePayForm();
        }
    });



$$(document).on('page:init', '.page[data-name="customercart"]', function (e) {
    alert('cart');

    /* var cart_i = JSON.parse(localStorage.getItem("cart"));
     alert('cart', cart_i);
     app.theseItems = function (x) {

         for (i = 0; i < cart_i.length; i++) {
             x += cart_i[i];

         }
     }*/
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };

    if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
        wrapper.html('<div>Your cart is empty</div>');
        $$('.submitBtn').hide();
        $$('.cart').css('left', '-400%')
    } else {
        var activeCustomer = localStorage.getItem("fnMember");
        var timepo = localStorage.getItem("timeandponumber");
        _.forEach(cart.items, function (n) {
            var itembought = '';
            itembought = n.sku;
            console.log(activeCustomer);
            console.log(timepo);
            console.log(itembought);
            /* items += '<tr>'
             items += '<td><span class="qant">' + n.cant + '</span></td>'
             items += '<td><h3 class="title" data-sku="' + n.sku + '">' + n.name + '</h3></td>'
             items += '<td colspan="2"><p class="right"><del>' + oldpricing + '</del></p>'
             items += '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>'
             items += '</tr>';*/

        });

    }
})
$$(document).on('page:init', '.page[data-name="my-cart-screen"]', function (e) {
    app.showOrders();
})

$$(document).on('page:init', '.page[data-name="category"]', function (e) {
    // console.log('Category');
    // Pull to refresh content
    var $ptrContent = $$('.ptr-content');
    // Add 'refresh' listener on it
    $ptrContent.on('ptr:refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            app.pullProductData();
            // When loading done, we need to reset it
            app.ptr.done(); // or e.detail();
        }, 2000);
    });

    $$('#categories .category').on('click', function () {
        selectedCat = $$(this).attr("alt");
        $$("#MyCategory").val(selectedCat);
        Categorize(selectedCat);
        app.router.navigate('/catalog/' + selectedCat + '/');


    });

});


var selectedCat;

function Categorize(selectedCat) {
    console.log(selectedCat);

}


app.loadStore = function () {
    var business_paypal = '';

    mockIdSalesMngr = '1111111111111';
    //localStorage.setItem("myCurrency", currency_icon);
    localStorage.setItem("idSalesMngr", mockIdSalesMngr);
    app.init();
}
'use strict';
app.init = function () {
    console.log("initializing...");
    var total = 0,
        items = 0
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };
    if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
        _.forEach(cart.items, function (n, key) {
            items = (items + n.cant)
            total = total + (n.cant * n.price)
        });
    }
    var total_Items = $$('#totalItems');
    total_Items.text(items);
    if (items == 0) {
        $$(total_Items)
            .hide();
    } else {
        $$(total_Items)
            .show();
    }
    $$('.totalAmount')
        .text(currency_icon + ' ' + total + ' USD');
}



app.pullProductJSONData = function () {
    console.log("Pulling raw json data...");
    app.preloader.show();
    // Perform Ajax request
    app.request.get(window.base_url + '/public/api/jsonproducts', function (data) {
        //app.request.get('http://128.199.165.197/joroni/super8webapp/public/api/jsonproducts', function (data) {
        // Hide preloader when Ajax request completed
        localStorage.setItem("jsonproducts", data);

        app.preloader.hide();
        console.log(data);
        console.log("Pulling json data complete.");

    });
}


app.pullProductData = function () {
    app.pullProductJSONData();
    console.log("Pulling data...");
    app.preloader.show();
    // Perform Ajax request
    //   app.request.get('https://raw.githubusercontent.com/joroni/mysuper8-dev2-copy/master/www/js/data/products.json', function(data){
    app.request.get(window.base_url + '/public/api/products', function (data) {
        // app.request.get('http://128.199.165.197/joroni/super8webapp/public/api/products', function (data) {
        // Hide preloader when Ajax request completed
        localStorage.setItem("products", data);


        app.preloader.hide();
        console.log(data);
        console.log("Pulling data complete.");

    });
}
var productsList = "";
var products = "";
app.createProducts = function (products) {
    console.log("create products");
    app.pullProductData();
    products = JSON.parse(localStorage.getItem("products"));
    //  products=productsList;
}


function callFunction(func) {
    var newValue = func();
    console.log(newValue);
}


app.getProducts = function () {
    console.log("get products");
    $$('.submitBtn')
        .hide();
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    },
        msg = '',
        wrapper = $$('.cart'),
        wrapper2 = $$('.cartmemberinfo'),
        total = 0
    wrapper.html('');
    wrapper2.html('');
    if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
        wrapper.html('<div>Your cart is empty</div>');
        $$('.submitBtn').hide();
        $$('.cart').css('left', '-400%')
    } else {
        var items = '';
        $$('.submitBtn').show();
        var cartmemberinfo = '';
        $$('.cname-container').html('')
        var activeCustomer = localStorage.getItem("fnMember");
        console.log(activeCustomer);
        var timepo = localStorage.getItem("timeandponumber");
        cartmemberinfo = '<tr><td class="left" colspan="2">Now Serving:</td><td colspan="3" class="right"><span class="title">' + activeCustomer + '</span></td></tr>' +
            '<tr><td class="left" colspan="2">PO #:</td><td colspan="3" class="right"><span class="title">' + timepo + '</span></td></tr>'
        _.forEach(cart.items, function (n, key) {
            var oldpricing = '';
            if (n.oldprice != 0 || n.oldprice != '') {
                var oldpricing = currency_icon + '' + n.oldprice.toFixed(2)
            } else {
                var oldpricing = '';
            }
            total = total + (n.cant * n.price);
            items += '<tr>'
            items += '<td><span class="qant">' + n.cant + '</span></td>'
            items += '<td><h3 class="title" data-sku="' + n.sku + '">' + n.name + '</h3></td>'
            items += '<td colspan="2"><p class="right"><del>' + oldpricing + '</del><input id="oldPriceValue" type="hidden" val=""/></p>'
            items += '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>'
            items += '</tr>';
            $$('#prod_' + n.id)
                .val(n.cant);
        });
        items += '<tr class="total-row"><td colspan="2" > </td><td id="total" class="total right" colspan="3"><input id="totalAmount" type="hidden" val="' + total.toFixed(2) + '"/>' + currency_icon + '' + total.toFixed(2) + ' </td></tr>'
        wrapper.html(items);
        wrapper2.html(cartmemberinfo);
        localStorage.setItem("grndTotal", total.toFixed(2));
        $$('.cart')
            .css('left', '0')
    }
}
app.updateItem = function (id, available) {
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    },
        curProd = _.find(cart.items, {
            'id': id
        })
    curProd.cant = curProd.cant - 1;
    if (curProd.cant > 0) {
        localStorage.setItem('cart', JSON.stringify(cart))
        app.init()
        app.getProducts()
        // app.updatePayForm()
    } else {
        app.deleteProd(id, true)
    }
}
app.delete = function (id) {
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };
    var curProd = _.find(cart.items, {
        'id': id
    })
    $$('#prod_' + id + '')
        .val('0');
    _.remove(cart.items, curProd);
    localStorage.setItem('cart', JSON.stringify(cart));
    app.init();
    app.getProducts();
    //app.updatePayForm();
}
app.deleteProd = function (id, remove) {
    if (undefined != id && id > 0) {
        if (remove == true) {
            app.delete(id)
        } else {
            var conf = confirm('Remove this product?')
            if (conf) {
                app.delete(id)
            }
        }
    }
}


/*******************Add Order*************************/
app.addOrder = function () {
    console.log('addOrder');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        //url: 'http://localhost/slim/public/api/orders/add',
        url: window.base_url+'/public/api/orders/add',
        dataType: "json",
        data: formOrderToJSON(),
        success: function (data, textStatus, jqXHR) {
            app.dialog.alert('Order created successfully');
            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
           // alert('addWine error: ' + textStatus);
           app.dialog.alert('Order created successfully...');
            location.reload();
        }
       
    });

    //console.log(data);

    
    function formOrderToJSON() {
   
    var ponumber = $$("#txtCode").val(),
    cname = $$("#txtName").val(),
    notes = $$("#txtNotes").val(),
    dateordered = $$("#txtDate").val(),
    items = $$("#thisCart").html(),
    total = localStorage.getItem("grndTotal")
        return JSON.stringify({
            "ponumber": ponumber,
            "cname": cname,
            "notes": notes,
            "dateordered": dateordered,
            "items": items,
            "total": total
        });
    }

}




app.updatePayForm = function () {

    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };
    localStorage.setItem("purchaseorder", JSON.stringify(cart));
    var grandtotal = localStorage.getItem("grndTotal");
    var activeCustomer = localStorage.getItem("fnMember");





    var timepo = localStorage.getItem("timeandponumber");
    var statics = '<form id="orderForm" method="post"><input type="hidden" name="customer" value="' + activeCustomer + '"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="PHP" /><input type="hidden" name="pocode" value="' + timepo + '"><input type="hidden" name="grandtotal" class="grandtotal" value="' + grandtotal + '">',
        dinamic = '',
        wrapper = $$('.submitForm')
    wrapper.html('')
    if (undefined != cart && null != cart && cart != '') {
        var i = 1;
        _.forEach(cart.items, function (prod, key) {

            dinamic += '<input type="hidden" name="ponumber_' + i + '" value="' + timepo + '">'
            dinamic += '<input type="hidden" name="customer_' + i + '" value="' + activeCustomer + '">'
            dinamic += '<input type="hidden" name="item_name_' + i + '" value="' + prod.name + '">'
            dinamic += '<input type="hidden" name="amount_' + i + '" value="' + prod.price + '">'
            dinamic += '<input type="hidden" name="item_sku_' + i + '" value="' + prod.sku + '">'
            dinamic += '<input type="hidden" name="item_number_' + i + '" value="' + prod.id + '" />'
            dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.cant + '" />'
            dinamic += '<input type="hidden" class="grndTotal" name="total_' + i + '" value="' + grandtotal + '" />'
            i++;

        })
        statics += dinamic + '</form>'
        wrapper.html(statics);
        var sku = $('input[name="item_sku_' + i + '"]').val(),
            name = $('input[name="item_name_' + i + '"]').val(),
            state = $('input[name="item_state_' + i + '"]').val(),
            statecolor = $('input[name="item_statecolor_' + i + '"]').val(),
            cname = $('input[name="customer_' + i + '"]').val(),
            cant = $('input[name="quantity_' + i + '"]').val(),
            oldprice = $('input[name="item_oldprice_' + i + '"]').val(),
            price = $('input[name="amount_' + i + '"]').val(),
            ponumber = $('input[name="ponumber_' + i + '"]').val(),
            descr = $('input[name="item_decr_' + i + '"]').val(),
            total = $('input[name="total_' + i + '"]').val();



    }
}

$$(".btn-checkout")
    .on('click', function () {

        app.dialog.alert('Please confirm details on the next screens.');
        console.log()
        var myCname = localStorage.getItem("fnMember");
        var myPoNumber = localStorage.getItem("timeandponumber");
        var myItems = $$("#thisCart").html();


        $$("#itemRecap").html(myItems);
        $$("#itemRecap tbody").addClass("cart");


        function Unix_timestamp(t) {
            var dt = new Date(t * 1000);
            var d = new Date();
            var hr = dt.getHours();
            var m = "0" + dt.getMinutes();
            var s = "0" + dt.getSeconds();
            return d + '-' + hr + ':' + m.substr(-2);

        }
        var theTime = Unix_timestamp(myPoNumber);
        $$("#txtItems")
            .val(myItems);
        $$("#txtName")
            .val(myCname);
        $$("#txtCode")
            .val(myPoNumber);
        $$("#txtDate")
            .val(theTime);

        $$("#my-cart-screen")
            .hide()
            .removeClass("modal-in");
        $$(".popup-backdrop")
            .removeClass("backdrop-in");
        app.router.navigate('/');
    });




app.resetCart = function () {
    var retVal = confirm("This will clear cart data? Do you want to continue ?");
    if (retVal == true) {
        localStorage.removeItem("cart");
        localStorage.removeItem("idMember");
        localStorage.removeItem("grndTotal");
        localStorage.removeItem("listHTML");
        localStorage.removeItem("timeandponumber");
        localStorage.removeItem("fnMember");
        $$(".cart, .mycart, #totalItems")
            .html("");

        mainView.router.refreshPage();
        app.dialog.alert("Cache is now cleared.");
        mainView.router.navigate(mainView.router.currentRoute.url, {
            ignoreCache: true,
            reloadCurrent: true
        });
        app.router.navigate('/');
        return true;

    } else {
        return false;
    }
}



app.resetPOCart = function () {

    localStorage.removeItem("cart");
    localStorage.removeItem("idMember");
    localStorage.removeItem("grndTotal");
    localStorage.removeItem("listHTML");
    localStorage.removeItem("timeandponumber");
    localStorage.removeItem("fnMember");

    $$(".cart, .mycart,.cartmemberinfo, #totalItems")
        .html("");


    console.log("Cache is now cleared.");

    app.router.navigate('/catalogc/');
    //location.reload();

}
app.getSKU = function (ThisSKU) {
    sessionStorage.setItem("skuItem", ThisSKU);
}
var btnContainer = $$(".toolbar-inner");

var btns = $$(".tab-link");

btns.on("click", function () {
    btns.removeClass("tab-link-active");
    $$(this)
        .addClass("tab-link-active");
})
for (var i = 0; i < btns.length; i++) {
    btns.on("click", function () { });
}
app.productsPage = function () {
    var activeSKU = sessionStorage.getItem("skuItem");
    console.log(activeSKU);
    var skusList = localStorage.getItem("products");
    skus = JSON.parse(skusList);
    console.log(skus);
    var SearchTag = function (sku) {
        var i = null;
        for (i = 0; skus.length > i; i += 1) {
            if (skus[i].sku === sku) {
                return skus[i];
            }
        }
        return null;
    };
    var product = SearchTag(activeSKU);
    oldpricing = '';
    if (product) {
        var oldprice = product.oldprice;
        if (oldprice != 0 || oldprice != '') {
            oldpricing = currency + '' + oldprice;
        } else {
            oldpricing = '';
        }
        var cat = product.cat;
        var descr = product.descr;
        var id = product.id;
        var img = product.img;
        var name = product.name;
        var price = product.price;
        var size = product.size;
        var sku = product.sku;
        var state = product.state;
        var statecolor = product.statecolor;
        var stock = product.stock;
        $$("#thisName").html(name);
        $$("#prodImg").html('<img src="' + img + '" class="img-fluid prod-page-image" alt="' + name + '">');
        $$("#thisBadges").html('<a href="">' +
            '<span class="badge ' + statecolor + ' mr-1">' + state + '</span>' +
            '</a>');
        $$("#thisStock").html("In Stock: " + stock);
        $$("#thisLead").html('<span class="mr-1">' +
            '<del>' + oldpricing + '</del>' +
            '</span>' +
            '<span>' + currency + '' + price + '</span>')
        $$("#thisDesc").html(descr);
        $$("#thisAddCart").html('<input type="number" value="1" id="prod_' + id + '" readonly name="quant[' + id + ']"  aria-label="Search" class="form-control" style="width: 100px">' +
            '<button class="btn btn-primary btn-md my-0 btn-number waves-effect  submit ladda-button waves-light" type="button"  onclick="app.addtoCart(' + id + ');">Add to cart' +
            '<i class="fa fa-shopping-cart ml-1"></i>' +
            '</button>');
        $$("#footerBtns").html('<div class="row"><div class="btn-group" role="group" aria-label="Basic">' +
            '<button type="button" class="btn btn-success manage-qtty btn-number h-40 waves-effect waves-light" onclick="app.updateItem(' + id + ',' + stock + ')" data-type="minus"><i class="material-icons">remove</i></button>' +
            '<input type="number" id="prod_' + id + '" readonly="" name="quant[' + id + ']" class="form-control input-number quantity manage-qtty h-40" value="0" min="0" max="100" style="height:40px; width:80px;">' +
            '<button type="button" class="btn btn-success btn-number waves-effect h-40 submit ladda-button waves-light prod-' + id + '" data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + id + ');"><i class="material-icons">add</i></button>' +
            '<a class="btn btn-info waves-effect waves-light h-40 pl-4 pr-4" href="#" role="button" data-toggle="modal" data-target="#modalCart">View Cart</a></div></div>');
    }

}
$$(document).on('DOMContentLoaded', function () {
    app.init();
    app.purchaseOrders();
    app.updatePayForm();
    //app.getProducts();
    app.pullProductData();
    // app.pullProductJSONData();
    currency_icon = '₱';
    localStorage.setItem("myCurrency", currency_icon);
    $$('#frmCadastro .btn-submit-po').on('click', function () {
        //app.sendOrdersData();
        app.addOrder();
    })

    //var hasCustomer = (JSON.parse(localStorage.getItem('fnMember')) != null) ? JSON.parse(localStorage.getItem('fnMember')) : {
    $$(function () {
        if (localStorage.getItem('fnMember') != null || localStorage.getItem('fnMember') != '') {
            var wrapper = $$('.cart'),
                wrapper2 = $$('.cartmemberinfo');

            var activeCustomer = localStorage.getItem("fnMember");
            var timepo = localStorage.getItem("timeandponumber");
            $$('.badge').show();
            // $$('.cname-container').html(activeCustomer);  
            cartmemberinfo = '<tr><td class="left" colspan="2">Now Serving:</td><td colspan="3" class="right"><span class="title">' + activeCustomer + '</span></td></tr>' +
                '<tr><td class="left" colspan="2">PO #:</td><td colspan="3" class="right"><span class="title">' + timepo + '</span></td></tr>';
            wrapper2.html(cartmemberinfo);
        }

    })

});





app.showOrders = function () {
    console.log("show orders");
    $$('.submitBtn').hide();
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    },
        wrapper = $$('.cart'),
        wrapper2 = $$('.cartmemberinfo'),
        total = 0
    // wrapper.html('');
    // wrapper2.html('');
    if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
        wrapper.html('<div>Your cart is empty</div>');
        $$('.submitBtn').hide();
        // $$('.cart').css('left', '-400%')
    } else {
        var items = '';
        var cartmemberinfo = '';
        var activeCustomer = localStorage.getItem("fnMember");
        var timepo = localStorage.getItem("timeandponumber");
        $$('.submitBtn').show();
        $$('.cname-container').html(activeCustomer);
        cartmemberinfo = '<tr><td class="left" colspan="2">Now Serving:</td><td colspan="3" class="right"><span class="title">' + activeCustomer + '</span></td></tr>' +
            '<tr><td class="left" colspan="2">PO #:</td><td colspan="3" class="right"><span class="title">' + timepo + '</span></td></tr>'
        _.forEach(cart.items, function (n, key) {
            var oldpricing = '';
            if (n.oldprice != 0 || n.oldprice != '') {
                var oldpricing = currency_icon + '' + n.oldprice.toFixed(2)
            } else {
                var oldpricing = '';
            }
            total = total + (n.cant * n.price);
            items += '<tr>' +
                '<td><span class="qant">' + n.cant + '</span></td>' +
                '<td><h3 class="title" data-sku="' + n.sku + '">' + n.name + '</h3></td>' +
                '<td colspan="2"><p class="right"><del>' + oldpricing + '</del></p>' +
                '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>' +
                '</tr>';
            $$('#prod_' + n.id).val(n.cant);
        });
        items += '<tr class="total-row"><td colspan="2" > </td><td id="total" class="total right" colspan="3">' + currency_icon + '' + total.toFixed(2) + ' </td></tr>'
        // wrapper.html(items);
        //wrapper2.html(cartmemberinfo);
        localStorage.setItem("grndTotal", total.toFixed(2));
        //  $$('.cart').css('left', '0')
    }
}