// Dom7
var $$ = Dom7;
// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
            // productbs: [customers],
            productbs: [{
                    id: '1',
                    title: 'John',
                    fname: 'Dough',
                    phone: '0995475142',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
                    birth_month: '11',
                    birth_day: '12',
                    birth_yr: '1982',
                    add_street: 'Taylo Street',
                    add_unit: 'Unit 1 Dough Apartments',
                    add_city: 'Quezon City',
                    add_area: 'Brgy. Gumamela',
                    add_zip: '1068',
                    add_landmark: 'Near EastWest',
                    timestamp: '150495687901'
                },
                {
                    id: '2',
                    title: 'Anne',
                    fname: 'Hattaway',
                    phone: '0995475142',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
                    birth_month: '12',
                    birth_day: '20',
                    birth_yr: '1978',
                    add_street: 'Melon Street',
                    add_unit: 'The Heights Subd',
                    add_city: 'Quezon City',
                    add_area: 'Brgy. 6',
                    add_zip: '1223',
                    add_landmark: 'Near EastWest',
                    timestamp: '150495687978'
                },
                {
                    id: '3',
                    title: 'Rafael',
                    fname: 'Domingo',
                    phone: '0995475143',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
                    birth_month: '12',
                    birth_day: '20',
                    birth_yr: '1978',
                    add_street: 'Melon Street',
                    add_unit: 'The Heights Subd',
                    add_city: 'Quezon City',
                    add_area: 'Brgy. 6',
                    add_zip: '1223',
                    add_landmark: 'Near EastWest',
                    timestamp: '150495687975'
                }
            ],
            products: [{
                    id: '1',
                    sku: 'A0000001',
                    title: 'Denim Shirt',
                    cat: 'Sports Wear',
                    state: 'New',
                    statecolor: 'red',
                    size: '',
                    img: 'img/products/12.jpg',
                    oldprice: '',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '2',
                    sku: 'A0000002',
                    title: 'Drypers Mega Pack',
                    cat: 'Baby',
                    state: 'Sale',
                    statecolor: 'green',
                    size: 'Large x 62 pcs',
                    img: 'img/products/baby.jpg',
                    oldprice: 630.00,
                    price: 503.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '3',
                    sku: 'A0000003',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '',
                    img: 'img/products/14.jpg',
                    oldprice: '',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '4',
                    sku: 'A0000004',
                    title: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                    cat: 'Coffee',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/coffee.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Perfect iced coffee latte with almond milk',
                    stock: 50,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '5',
                    sku: 'A0000005',
                    title: 'Gingen Strong Ginger Formula Tea',
                    cat: 'Tea',
                    state: 'Best Seller',
                    size: '',
                    statecolor: 'blue',
                    img: 'img/products/tea.jpg',
                    oldprice: '',
                    price: 440.00,
                    desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                    stock: 20,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '6',
                    sku: 'A0000006',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/15.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 8,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                }
            ]
        };
    },
    // App root methods
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    // App routes
    routes: routes,
});
// Init/Create main view
var mainView = app.views.create('.view-main', {
    url: '/'
});

/*
// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});

*/



var settingsView = app.views.create('#view-settings', {
    url: '/settings/'
});
var storeView = app.views.create('#view-store', {
    url: '/store/'
});
var customersView = app.views.create('#view-catalog', {
    url: '/catalog/'
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
    // Close login screen
    app.loginScreen.close('#my-login-screen');
    // Alert username and password
    app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
$$(document).on('page:init', '.page[data-name="product"]', function (e) {
    $$(".test").on('click', function (id) {
        alert("minus");
    });
    $$(".stepper-button-plus").on('click', function (id) {
        id = $$(this).attr("data['id']");
        //function checkHasUer(){
        console.log("clicked");
        if (!localStorage.getItem("idMember")) {
            alert("Please select a customer.");
            app.router.navigate('/store/');
            return false;
        } else {
            console.log("continue shopping");
            //console.log("add to cart");
            // var l = Ladda.create(document.querySelector('.prod-' + id));
            Ladda.bind('.prod-' + id, {
                timeout: 2000
            });
            l.start();
            var products = JSON.parse(localStorage.getItem('products')),
                producto = _.find(products, {
                    'id': id
                }),
                cant = 1;
            $$('body').css('opacity', '0.5');
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
                                // producto.cname = localStorage.getItem("idMember"),
                                // producto.smname = localStorage.getItem("idSalesMngr"),
                                //producto.check = "notsync",
                                producto.cname,
                                producto.smname,
                                producto.check,
                                producto.select,
                                producto.notes,
                                producto.email,
                                producto.timestamp,
                                producto.total = localStorage.getItem("grndTotal"),
                                producto.ponumber,
                                producto.birthdate
                            )
                            l.stop();
                            console.log(parseInt(cant))
                            $$('body').css('opacity', '1');
                        }, 100)
                    } else {
                        alert('Only larger quantities are allowed to zero');
                    }
                } else {
                    alert('Oops! Something we wrong, try again later')
                }
            } else {
                alert('You can not add more of this product');
            }
        }
    })
    //alert("about");
})
/*app.getSKU = function(ThisSKU){
    sessionStorage.setItem("skuItem", ThisSKU);
}
*/
//var ThisSKU = $$(this).attr("data-sku");
$$('a.getsku').on('click', function () {
    sessionStorage.setItem("skuItem", ThisSKU);
    app.dialog.alert(selectedCat);
});
$$('a.category').on('click', function () {
    var selectedCat = $$(this).html();
    // Alert username and password
    app.dialog.alert(selectedCat);
});
$$(document).on('page:init', '.page[data-name="store"]', function (e) {
    console.log('Store');
    loadStore();
    // Do something here when page with data-name="about" attribute loaded and initialized
})
$$(document).on('page:init', '.page[data-name="catalogb"]', function (e) {
    console.log('Catalogb');
    // loadStore();
    memberList();
    // Do something here when page with data-name="about" attribute loaded and initialized
})
$$('.task1').on('click', function () {
    app.alert('Task 1 Clicked !!');
});
/**************************************** CART */
function loadStore() {
    var business_paypal = '', // aquí va tu correo electrónico de paypal
        currency_icon = '₱';
    mockIdSalesMngr = '1111111111111';
    localStorage.setItem("myCurrency", currency_icon);
    localStorage.setItem("idSalesMngr", mockIdSalesMngr);
    'use strict';
    //no coflict con underscores
    app.init = function () {
        console.log("initializing...");
        //totalItems totalAmount
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
        //alert(items);
        if (items == 0) {
            $$(total_Items).hide();
        } else {
            $$(total_Items).show();
        }
        $$('.totalAmount').text(currency_icon + ' ' + total + ' USD');
    }
    app.createProducts = function () {
        console.log("create products");
        var products = [{
                    id: 1,
                    sku: 'A0000001',
                    name: 'Denim Shirt',
                    cat: 'Sports Wear',
                    state: 'New',
                    statecolor: 'red',
                    size: '',
                    img: 'img/products/12.jpg',
                    oldprice: '',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 2,
                    sku: 'A0000002',
                    name: 'Drypers Mega Pack',
                    cat: 'Baby',
                    state: 'Sale',
                    statecolor: 'green',
                    size: 'Large x 62 pcs',
                    img: 'img/products/baby.jpg',
                    oldprice: 630.00,
                    price: 503.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 3,
                    sku: 'A0000003',
                    name: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '',
                    img: 'img/products/14.jpg',
                    oldprice: '',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 4,
                    sku: 'A0000004',
                    name: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                    cat: 'Coffee',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/coffee.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Perfect iced coffee latte with almond milk',
                    stock: 50,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 5,
                    sku: 'A0000005',
                    name: 'Gingen Strong Ginger Formula Tea',
                    cat: 'Tea',
                    state: 'Best Seller',
                    size: '',
                    statecolor: 'blue',
                    img: 'img/products/tea.jpg',
                    oldprice: '',
                    price: 440.00,
                    desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                    stock: 20,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 6,
                    sku: 'A0000006',
                    name: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/15.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 8,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                }
            ],
            wrapper = $$('.productosWrapper'),
            content = '',
            oldpricing = ''
        for (var i = 0; i < products.length; i++) {
            if (products[i].stock > 0) {
                if (products[i].oldprice != 0 || products[i].oldprice != '') {
                    oldpricing = currency_icon + '' + products[i].oldprice.toFixed(2)
                } else {
                    oldpricing = '';
                }
                content += '<div class="col-4 col-sm-4 no-gutter">'
                content += '<div class="cards productsonsale" id="prod_click' + products[i].id + '">'
                content += '<div class="view">'
                content += '<a href="/productdetails/' + products[i].id + '" data-sku="' + products[i].sku + '" class="item-link item-content">'
              // content += '<a href="/product/' + products[i].id + '" onclick=getSKU("' + products[i].sku + '") data-sku="' + products[i].sku + '">'
                content += '<img src="' + products[i].img + '"class="card-img-top"  alt="' + products[i].name + '">'
                // content += '<a href="#" class="getsku" data-sku="' + products[i].sku + '">'
                // content += '<div class="mask rgba-white-slight"></div>'
                content += '</a>'
                content += '</div>'
                content += '<div class="card-body text-center parent">'
                content += '<a href="#" class="grey-text truncate">'
                content += '<h5 class="category">' + products[i].cat + '</h5>'
                content += '</a>'
                content += '<div class="truncate">'
                content += '<h5>'
                content += '<a href="" class="dark-grey-text"> ' + products[i].name + '</a>'
                content += '</h5>'
                content += '<p class="badge statebadge badge-pill ' + products[i].statecolor + '">' + products[i].state + '</p>'
                content += '</div>'
                content += '<h4 class=" blue-text">'
                content += '<del>' + oldpricing + ' </del>'
                content += '<span>' + currency_icon + '' + products[i].price.toFixed(2) + ' </span>'
                content += '</h4>'
                content += '<h3 class="hidden">We have: <span class="stock">' + products[i].stock + '</span></h3>'
                content += '<div class="input-group qtty-center">'
                content += '<span class="input-group-btn">'
                content += '<button type="button" class="btn manage-qtty  btn-number waves-effect waves-light  grey-border" onclick="app.updateItem(' + products[i].id + ',' + products[i].stock + ')"  data-type="minus">'
                content += '<img src="icons/noun_Remove_1807498-rounded-green.svg">'
                content += '</button>'
                content += '</span>'
                content += '<input type="number" id="prod_' + products[i].id + '" readonly name="quant[' + products[i].id + ']" class="form-control input-number quantity manage-qtty"  value="0" min="0" max="100">'
                content += '<span class="input-group-btn">'
                content += '<button type="button" class="btn btn-number waves-effect  submit ladda-button waves-light grey-border prod-' + products[i].id + '"  data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + products[i].id + ');">'
                content += '<img src="icons/noun_Plus_1807498-rounded-green.svg">'
                content += '</button>'
                content += '</span>'
                content += '</div>'
                content += '</div></div>'
                content += '</div>'
                content += '</div>'
                content += '</div>'
            }
        }
        wrapper.html(content);
        //wrapper2.html(content2);
        localStorage.setItem('products', JSON.stringify(products))
    }
    $$(document).on('page:init', '.page[data-name="catalogb"]', function (e) {
        //alert("Catalogb");
    })
    app.addtoCart = function (id) {
        //function checkHasUer(){
        if (!localStorage.getItem("idMember")) {
            alert("Please select a customer.");
            app.router.navigate('/customerinfo/');
            return false;
        } else {
            console.log("continue shopping");
            //console.log("add to cart");
            // var l = Ladda.create(document.querySelector('.prod-' + id));
            // var l = Ladda.create($$('.prod-' + id));
            Ladda.bind('.prod-' + id, {
                timeout: 2000
            });
            l.start();
            var products = JSON.parse(localStorage.getItem('products')),
                producto = _.find(products, {
                    'id': id
                }),
                cant = 1;
            $$('body').css('opacity', '0.5');
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
                                producto.cname = localStorage.getItem("idMember"),
                                producto.smname = localStorage.getItem("idSalesMngr"),
                                producto.check = "notsync",
                                producto.select,
                                producto.notes,
                                producto.email,
                                producto.timestamp,
                                producto.total = localStorage.getItem("grndTotal"),
                                producto.ponumber,
                                producto.birthdate
                            )
                            l.stop();
                            console.log(parseInt(cant))
                            $$('body').css('opacity', '1');
                        }, 100)
                    } else {
                        alert('Only larger quantities are allowed to zero');
                    }
                } else {
                    alert('Oops! Something we wrong, try again later')
                }
            } else {
                alert('You can not add more of this product');
            }
        }
    }
    app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
        //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
        var curProd = _.find(cart.items, {
            'id': id
        })
        console.log("search products");
        if (undefined != curProd && curProd != null) {
            //ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
            if (curProd.cant < available) {
                curProd.cant = parseInt(curProd.cant + cant)
            } else {
                alert('This product is currently out of stock')
            }
            $$('#prod_' + curProd.id).val(curProd.cant);
        } else {
            //sino existe lo agregamos al carrito
            var prod = {
                id: id,
                sku: sku,
                cant: cant,
                name: name,
                price: price,
                img: img,
                available: available,
                oldprice: oldprice,
                cname: cname,
                smname: smname,
                check: check,
                select: select,
                notes: notes,
                email: email,
                timestamp: timestamp,
                total: total,
                ponumber: ponumber,
                birthdate: birthdate
            }
            cart.items.push(prod)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        // app.updatePayForm();
    }
    app.getProducts = function () {
        console.log("get products");
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                items: []
            },
            msg = '',
            wrapper = $$('.cart'),
            total = 0
        wrapper.html('')
        if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
            wrapper.html('<div>Your cart is empty</div>');
            $$(".submitBtn").hide();
            $$('.cart').css('left', '-400%')
        } else {
            $$(".submitBtn").removeClass("hidden");
            $$(".submitBtn").show();
            var items = '';
            _.forEach(cart.items, function (n, key) {
                var oldpricing = '';
                if (n.oldprice != 0 || n.oldprice != '') {
                    var oldpricing = currency_icon + '' + n.oldprice.toFixed(2)
                } else {
                    var oldpricing = '';
                }
                total = total + (n.cant * n.price);
                items += '<tr>'
                //items += '<td><img src="'+n.img+'" /></td>'
                items += '<td><span class="qant">' + n.cant + '</span></td>'
                items += '<td><h3 class="title">' + n.name + '</h3></td>'
                items += '<td colspan="2"><p class="right"><del>' + oldpricing + '</del></p>'
                items += '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>'
                items += '</tr>';
                $$('#prod_' + n.id).val(n.cant);
            });
            //agregar el total al carrito
            items += '<tr class="total-row"><td colspan="2" > </td><td id="total" class="total right" colspan="3">' + currency_icon + '' + total.toFixed(2) + ' </td></tr>'
            items += '<tr><td colspan="5" class="total"></td></tr>'
            items += '<tr><td colspan="5"> <div id="submitForm"></div></td></tr>'
            wrapper.html(items);
            localStorage.setItem("grndTotal", total.toFixed(2));
            $$('.cart').css('left', '0')
        }
    }
    /*************************************** Minus Button */
    $$(".stepper-button-minus").on("click", function (id, available) {
        var id = $(this).data("id");
        var available = $(this).data("stock");
        //resta uno a la cantidad del carrito de compras
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                items: []
            },
            curProd = _.find(cart.items, {
                'id': id
            })
        //actualizar el carrito
        curProd.cant = curProd.cant - 1;
        //validar que la cantidad no sea menor a 0
        if (curProd.cant > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
            app.init()
            app.getProducts()
            // app.updatePayForm()
        } else {
            app.deleteProd(id, true)
        }
    });
    app.updateItem = function (id, available) {
        //resta uno a la cantidad del carrito de compras
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                items: []
            },
            curProd = _.find(cart.items, {
                'id': id
            })
        //actualizar el carrito
        curProd.cant = curProd.cant - 1;
        //validar que la cantidad no sea menor a 0
        if (curProd.cant > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
            app.init()
            app.getProducts()
            // app.updatePayForm()
        } else {
            app.deleteProd(id, true)
        }
    }
    /*************************************** Minus Button */
    app.delete = function (id) {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        };
        var curProd = _.find(cart.items, {
            'id': id
        })
        $$('#prod_' + id + '').val('0');
        _.remove(cart.items, curProd);
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        //   app.updatePayForm();
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
    app.updatePayForm = function () {
        //eso va a generar un formulario dinamico para paypal
        //con los products y sus precios
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        };
        ccname = localStorage.getItem('cnameMember');
        ccnumber = localStorage.getItem('idMember');
        csmname = localStorage.getItem('idSalesMngr');
        localStorage.setItem("purchaseorder", JSON.stringify(cart));
        var grandtotal = localStorage.getItem("grndTotal");
        var ponumber = '';
        var cnameMember = "John Doe";
        var poNum = $$(".ponumbr");
        alert(poNum.val());
        if (poNum.val() === undefined || poNum.val() === '') {
            setTimeout(function () {
                ponumber = new Date().getTime();
                poNum.val(ponumber);
            }, 3000);
        } else { //Lo actualiza
            ponumber = parseInt(poNum.val());
            poNum.val(ponumber);
        }
        //var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
        var statics = '<form>' +
            '<input type="text" name="cmd" value="_cart">' +
            '<input type="text" name="ponumbr" class="ponumbr" value="' + ponumber + '">' +
            '<input type="text" name="customer_name" value="' + cnameMember + '">' +
            '<input type="text" name="customer_number" value="' + ccnumber + '">' +
            '<input type="text" name="upload" value="1"><input type="text" name="currency_code" value="PHP" /><input type="text" name="business" value="SUPER 8"><input type="text" name="grandtotal" id="grandtotal" value="' + grandtotal + '">',
            dinamic = '',
            wrapper = $$('#submitForm');
        wrapper.html('')
        if (undefined != cart && null != cart && cart != '') {
            var i = 1;
            _.forEach(cart.items, function (prod, key) {
                dinamic += '<input type="text" id="itemName' + i + '" name="item_name_' + i + '" value="' + prod.name + '">'
                dinamic += '<input type="text" id="itemPrice' + i + '" name="amount_' + i + '" value="' + prod.price + '">'
                dinamic += '<input type="text" id="itemSKU' + i + '" name="item_sku_' + i + '" value="' + prod.sku + '">'
                dinamic += '<input type="text" id="itemID' + i + '" name="item_number_' + i + '" value="' + prod.id + '" />'
                dinamic += '<input type="text" id="itemCant' + i + '" name="quantity_' + i + '" value="' + prod.cant + '" />'
                dinamic += '<input type="text" id="itemTotal' + i + '" class="grndTotal" name="total_' + i + '" value="' + grandtotal + '" />' // added by jrn
                i++;
            })
            statics += dinamic + '<a href="#" type="submit" class="button form-to-data button t button-raised button-fill submitBtn btn-success">SUBMIT ORDER<i class="ion-chevron-right"></i></a></form>'
            wrapper.html(statics);
        }
    }

   /***************************** */
   

function selectProduct(idProduct) {
    // localStorage.setItem("customer-name",idMember);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idProduct],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var lisHtml = '';
                    var member = new Object();
                    member.id = rs.rows.item(0).ID;
                    member.fname = rs.rows.item(0).FNAMES;
                    member.lname = rs.rows.item(0).LNAMES;
                    member.phone = rs.rows.item(0).PHONE;
                    member.email = rs.rows.item(0).EMAIL;
                    /* $$('#txt-id').val(rs.rows.item(0).ID);
                     $$('#fname').val(rs.rows.item(0).FNAMES);
                     $$('#lname').val(rs.rows.item(0).LNAMES);
                     $$('#phone').val(rs.rows.item(0).PHONE);
                     $$('#email').val(rs.rows.item(0).EMAIL);*/
                    $$('#customerInfo').html('<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>' +
                        '<div class="item-inner">' +
                        '<input type="hidden" class="customerid" value="' + rs.rows.item(0).ID + '" />' +
                        '<div class="item-title">' + rs.rows.item(0).FNAMES + ' ' + rs.rows.item(0).LNAMES + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title"> ' + rs.rows.item(0).PHONE + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).EMAIL + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).ID + '<input id="memberID" type="hidden" value="' + rs.rows.item(0).ID + '"/></div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>')


                }
            }, error);
    });
}
/*************************************8 */

   $$(".reset").on('click',function(){
       
    var retVal = confirm("This will clear cart data? Do you want to continue ?");
    if (retVal == true) {
        localStorage.removeItem("cart");
        localStorage.removeItem("idMember");
         localStorage.removeItem("purchaseorder");
    
         mainView.router.refreshPage();
        
         alert("Cache is now cleared.");
    
        return true;
    } else {

        return false;
    }
    /************************************* */
    $$(document).on('page:init', '.page[data-name="store"]', function (e) {
        //  alert("sku");
        /*app.getSKU = function(ThisSKU){
           // ThisSKU = $$(this).attr("data-sku");
          //  sessionStorage.setItem("skuItem", ThisSKU);
          //  var activeSKU = sessionStorage.getItem("ThisSKU");
        }*/
    })
    app.productsPage = function () {
        var activeSKU = sessionStorage.getItem("skuItem");
        console.log(activeSKU);
        //var ThisSKU = $$(this).attr("data-sku");
        //var activeSKU = sessionStorage.getItem("ThisSKU");
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
            var desc = product.desc;
            var id = product.id;
            var img = product.img;
            var name = product.name;
            var price = product.price;
            var size = product.size;
            var sku = product.sku;
            var state = product.state;
            var statecolor = product.statecolor;
            var stock = product.stock;
            // var currency = localStorage.getItem("myCurrency");
            // console.log(cat+"|"+desc+"|"+id+"|"+img+"|"+name+"|"+price+"|"+size);
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
            $$("#thisDesc").html(desc);
            /* $$("#thisAddCart").html('<input type="number" value="1" id="prod_'+id +'" readonly name="quant['+id+']"  aria-label="Search" class="form-control" style="width: 100px">'+
             '<button class="btn btn-primary btn-md my-0 btn-number waves-effect  submit ladda-button waves-light" type="button"  onclick="app.addtoCart(' +id + ');">Add to cart'+
               '<i class="fa fa-shopping-cart ml-1"></i>'+
            '</button>');*/
            $$("#footerBtns").html('<div class="row"><div class="btn-group" role="group" aria-label="Basic">' +
                '<button type="button" class="btn btn-success manage-qtty btn-number h-40 waves-effect waves-light" onclick="app.updateItem(' + id + ',' + stock + ')" data-type="minus"><i class="material-icons">remove</i></button>' +
                '<input type="number"id="prod_' + id + '" readonly="" name="quant[' + id + ']" class="form-control input-number quantity manage-qtty h-40" value="0" min="0" max="100" style="height:40px; width:80px;">' +
                '<button type="button" class="btn btn-success btn-number waves-effect h-40 submit ladda-button waves-light prod-' + id + '" data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + id + ');"><i class="material-icons">add</i></button>' +
                //'<button type="button" class="btn btn-number waves-effect  submit ladda-button waves-light grey-borders btn-success prod-'+id+'" data-type="plus" data-style="slide-right" onclick="app.addtoCart('+id+');">Add to Cart</button>');
                '<a class="btn btn-info waves-effect waves-light h-40 pl-4 pr-4" href="#" role="button" data-toggle="modal" data-target="#modalCart">View Cart</a></div></div>');
        }
    }
    /***************************** */
    //  $$(document).ready(function () {
    app.init();
    // app.updatePayForm();
    app.createProducts();
    app.getProducts();
    $$(".btn-checkout").click(function () {
        app.updatePayForm();
    })
    /******************* */
    // showQuantity();
    // app.showMenu();
    //addCustomer();
    app.showOrders();
    currency_icon = '₱';
    localStorage.setItem("myCurrency", currency_icon);
    /******************* */
    //   })
})
}
/**************************************** CART */