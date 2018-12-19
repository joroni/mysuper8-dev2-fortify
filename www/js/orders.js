/*************************************** WEBSQL */

var db = openDatabase('super8', '1.0', 'Customers and Order processing', 100 * 1024);

console.info("Initialize...");

init();

memberList();
//selectMemberList();
mockData();
selectCustomertoShop();
console.info("Carga Complete...");

////////////////////////////////////////////////////////////////////
////////////////////////////Funciones jquery///////////////////////
////////////////////////////////////////////////////////////////////


$$('.submitOrder').click(function () {
    var i = 1;
    var txtName = $$("#itemName'" + i );
    var txtPrice = $$("#itemPrice'" + i);
    var txtSKU = $$("#itemSKU'" + i);
    var txtID = $$("#itemID'" + i);
    var txtCant = $$("#itemCant'" + i);
    var txtTotal = $$("#itemTotal'" + i);

    var input = $$('input');

   /* if (txtName.val() === '' || txtPrice.val() === '' || txtSKU.val() === '' || txtCant.val() ===
        '' /*|| input === ""* ) {
        alert("All fields are Required...");
        return;
    }
*/
    var order = Object();

    order.name = txtName.val();
    order.price = txtPrice.val();
    order.sku = txtSKU.val();
    order.cant = txtCant.val();
    order.total = txtTotal.val();



    if (txtID.val() === '') { //Lo guarda
        order.id = new Date().getTime();
        saveMember(order);
    } else { //Lo actualiza
        order.id = parseInt(txtID.val());
        updateMember(order);
    }

   // memberList();
    //selectMemberList();
   // mockData();
    txtName.val(null);
    txtPrice.val(null);
    txtSKU.val(null);
    txtCant.val(null);
    txtID.val(null);
    txtTotal.val(null);
});


/*
$$('#customerList').on("click", ".btn-user-info", function () {

    var idMember = $$('input.customerid').value();
 
    selectMember(idMember);
    $$("label").addClass("active");
    //$$("#modal-Title").html("View Customer");

});


$$('#customerList').on("click", ".btn-editar", function () {
   // var idMember = $$(this).data("id");
    var idMember = $$('input.customerid').value();
    selectMember(idMember);
    $$("label").addClass("active");
    $$("#modal-Title").html("Edit Customer");

});

$$('#customerList').on("click", ".btn-eliminar", function () {
  //  var idMember = $$(this).data("id");
    var idMember = $$('input.customerid').value();
    removeMember(idMember);
    memberList();
    //selectMemberList();
});


$$(document).on('page:init', '.page[data-name="customerinfo"]', function (e) {
    console.log('Customer Info');
    $$('.page-content').on('click', function () {
        memberList();
    })


    $$(".btn-eliminar").on("click", function () {
        var idMember = $$(this).data("id");
        removeMember(idMember);
        memberList();
        //selectMemberList();
    });

    $$(".btnMemberID").on("click", function () {
        var mid = $$("input#memberID").val();
        console.log(mid);
        localStorage.setItem("idMember", mid);

        if (!localStorage.getItem("idMember")) {

            alert("Please select a customer.");

            app.router.navigate('/catalogb/');

            return false;
        } else {
            app.router.navigate('/store/');
            console.log("continue shopping");
        }
    })

})


$$('#btnCustomers').on('click', function () {
    memberList();
    //selectMemberList();
});


$$('#btnStore').on('click', function () {
    loadStore();
});
*/
//});

////////////////////////////////////////////////////////////////////
///////////////////////funciones para el CRUd///////////////////////
////////////////////////////////////////////////////////////////////
function init() {
    db.transaction(function (tx) {
        //tx.executeSql('create table if not exists PURCHASEORDER(id,name,price,sku,cant,img,available,oldprice,smname,notes,cant,timestamp,total)');
        tx.executeSql('create table if not exists PURCHASEORDER(id,name,price,sku,cant,total)');
    }, error, exito);
}

function memberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM PURCHASEORDER', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var order = rs.rows.item(i);
                    var id = order.ID;
                    var fullname = order.FNAMES + ' ' + order.LNAMES;

                    lisHtml += '<li><a href="/customerinfo/" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
                    // $$('#ccompleteName').html(fullname);

                }

                //localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#customerList').html(lisHtml);


                /* $$(function () {
                     $$('.icon-btn').on('click', function () {
                         $$('.showData').toggle();
                     });
                 });*/


                $$('[data-toggle="class"]').click(function () {
                    var $target = $$($$(this).data('target'));
                    var classes = $$(this).data('classes');

                    $target.toggleClass(classes);
                    return false;
                });




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



            }

        }, error);
    });
}



function selectMemberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM PURCHASEORDER', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var order = rs.rows.item(i);
                    var id = order.ID;
                    var fullname = order.FNAMES + ' ' + order.LNAMES;

                    lisHtml += '<li><a href="/catalog/" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
                    // $$('#ccompleteName').html(fullname);

                }

                //localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#customerListSelect').html(lisHtml);


                /* $$(function () {
                     $$('.icon-btn').on('click', function () {
                         $$('.showData').toggle();
                     });
                 });*/


                $$('[data-toggle="class"]').click(function () {
                    var $target = $$($$(this).data('target'));
                    var classes = $$(this).data('classes');

                    $target.toggleClass(classes);
                    return false;
                });




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



            }

        }, error);
    });
}




function selectCustomertoShop() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES, PHONE, EMAIL FROM PURCHASEORDER', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = '';

                for (var i = 0; i < rs.rows.length; i++) {
                    var order = rs.rows.item(i);
                    var id = order.ID;



                    /*    lisHtml += '<div class="list-group-item customer-list list-group-item-action">'+
                                '<div class="media"><i class="material-icons"></i>' +
                                    '<a href="#" onclick="viewidMember('+ id +')"><img src="img/user.svg" class="mr-3 btn-user-info img-circle" width="48" alt=' + order.FNAMES + ' ' + order.LNAMES +" /></a>" +
                                    '<div class="media-body"><h5 class="mt-0 customer-name">' + order.FNAMES + ' ' + order.LNAMES + '</h5><p> ' + order.PHONE + '</p></div>'+
                                '</div>'+
                            '</div>';
*/

                    lisHtml += '<li><a href="#" onclick="viewidMember(' + id + ')">' + order.FNAMES + ' ' + order.LNAMES + '</li>'

                }


                $$('#customerList').html(lisHtml);



                $$('[data-toggle="class"]').click(function () {
                    var $target = $$($$(this).data('target'));
                    var classes = $$(this).data('classes');

                    $target.toggleClass(classes);
                    return false;
                });




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



            }

        }, error);
    });
}



function saveMember(order) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER(id,name,price,sku,cant,total) VALUES(?, ?, ?,?,?,?)', [
            order.id, order.name, order.price, order.sku, order.cant, order.total
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}



function selectMember(idMember) {
    // localStorage.setItem("customer-name",idMember);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM PURCHASEORDER WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var lisHtml = '';
                    var order = new Object();
                    order.id = rs.rows.item(0).ID;
                    order.name = rs.rows.item(0).FNAMES;
                    order.price = rs.rows.item(0).LNAMES;
                    order.sku = rs.rows.item(0).PHONE;
                    order.cant = rs.rows.item(0).EMAIL;
                    /* $$('#txt-id').val(rs.rows.item(0).ID);
                     $$('#name').val(rs.rows.item(0).FNAMES);
                     $$('#price').val(rs.rows.item(0).LNAMES);
                     $$('#sku').val(rs.rows.item(0).PHONE);
                     $$('#cant').val(rs.rows.item(0).EMAIL);*/
                    $$('#customerInfo').html('<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>' +
                        '<div class="item-inner">' +
                        '<input type="hidden" class="customerid" value="'+ rs.rows.item(0).ID + '" />'+
                        '<div class="item-title">' + rs.rows.item(0).FNAMES + ' ' + rs.rows.item(0).LNAMES + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">sku</i></div>' +
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



function memberProfile(idMember) {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM PURCHASEORDER WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {

                    var lisHtml = '';

                    for (var i = 0; i < rs.rows.length; i++) {
                        var order = rs.rows.item(i);
                        var id = order.ID;
                        var name = order.FNAMES;
                        var price = order.LNAMES;
                        var sku = order.PHONE;
                        var cant = order.EMAIL;


                        lisHtml += '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>'
                        '<div class="item-inner">'
                        '<input type="hidden" class="customerid" value="'+ id + '" />'+
                        '<div class="item-title">' + name + ' ' + price + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">sku</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + sku + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + cant + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'


                    }


                    $$('#customerInfo').html(lisHtml);





                }

            }, error);
    });
}



function viewidMember(idMember) {
    localStorage.setItem("idMember", idMember);
    console.log(idMember);
    // viewidMember(idMembre);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM PURCHASEORDER WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var order = new Object();
                    order.name = rs.rows.item(0).FNAMES;
                    order.price = rs.rows.item(0).LNAMES;
                    order.sku = rs.rows.item(0).PHONE;
                    order.cant = rs.rows.item(0).EMAIL;
                    $$('#txt-id').val(rs.rows.item(0).ID);
                    $$('#name').html(rs.rows.item(0).FNAMES);
                    $$('#price').html(rs.rows.item(0).PRICE);
                    $$('#sku').html(rs.rows.item(0).PHONE);
                    $$('#cant').html(rs.rows.item(0).EMAIL);
                    //console.log($$(this).attr([id]));
                }
            }, error);
    });
}

function updateMember(order) {
    db.transaction(function (tx) {
        tx.executeSql('UPDATE PURCHASEORDER SET name = ?, price = ?, sku = ?, cant = ?,  total = ?, WHERE id = ?', [
             order.name, order.price, order.sku,  order.cant, order.total
        ]);
    }, error, function () {
        alert("The order has been updated successfully");
    });
}

function removeMember(idMember) {


    var retVal = confirm("This will delete the selected record? Do you want to continue ?");
    if (retVal == true) {
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM PURCHASEORDER WHERE ID = ?', [idMember]);
        }, error, function () {
            alert("The order has been removed successfully");
        })
        return true;
    } else {

        return false;
    }



    /*  db.transaction(function (tx) {
          tx.executeSql('DELETE FROM PURCHASEORDER WHERE ID = ?', [idMember]);
      }, error, function () {
          alert("The order has been rem successfully");
      });*/
}

function savePO(order) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            order.id, order.name, order.price, order.sku, order.cant
        ]);
    }, error, function () {
        alert("Item Saved.");
        $$(".close").trigger();
    });
}


function saveMember(order) {
    db.transaction(function (tx) {
        tx.executeSql('id,sku,cant,name,price,img,available,oldprice,smname,notes,cant,timestamp,total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            order.id, order.sku, order.price, order.sku, order.cant
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}




function saveOrderLocal(order){
    var str  = localStorage.getItem("purchaseorder");
    var order = new Object();
    order.id = rs.rows.item(0).ID;
    order.name = rs.rows.item(0).FNAMES;
    order.price = rs.rows.item(0).LNAMES;
    order.sku = rs.rows.item(0).PHONE;
    order.cant = rs.rows.item(0).EMAIL;
    db.transaction(function (tx) {
    tx.executeSql('INSERT INTO PURCHASEORDER (id,sku,cant,name,price,img,available,oldprice,smname,notes,cant,timestamp,total) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',[94,JSON.parse(str)]);
}, error, function () {
    alert("Item Saved.");
    $$(".close").trigger();
});
}

////////////////////////////////////////////////////////////////////
////////////////////////Funciones de logueo////////////////////
////////////////////////////////////////////////////////////////////
var error = function (err) {
    console.error(err);
};

var exito = function () {
    console.info("Table created...");
};
/*************************************** WEBSQL */
