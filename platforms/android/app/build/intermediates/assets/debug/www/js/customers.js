/*************************************** WEBSQL */

var db = openDatabase('super8', '1.0', 'Customers and Order processing', 100 * 1024);

//$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
$$(document).on('DOMContentLoaded', function () {
    //  app.dialog.alert('Customers page');

    //$$(document).ready(function () {

    console.info("Initialize...");

    init();

    memberList();
    //selectMemberList();
    //mockData();
    //selectCustomertoShop();
    console.info("Carga Complete...");

    ////////////////////////////////////////////////////////////////////
    ////////////////////////////Funciones jquery///////////////////////
    ////////////////////////////////////////////////////////////////////
   

    $$(document).on('page:init', '.page[data-name="catalogb"]', function (e) {
     // app.dialog.alert("catalogb");
        memberList();
       // app.preloader.show();
        setTimeout(function () {
           // app.preloader.hide();
            memberList();

        }, 3000);
        console.log("Catalogb");


        btns.removeClass("tab-link-active");
        $$("#btnCustomers").addClass("tab-link-active");



        $$('.submitCustomer').on('click', function() {
            // app.dialog.alert("test");
            var txtId = $$('#txt-id');
            var txtFname = $$('#fname');
            var txtLname = $$('#lname');
            var txtPhone = $$('#phone');
            var txtEmail = $$('#email');
            var txtBirthdate = $$('#date');
    
           // var input = $$('input');
    
            if (txtFname.val() === '' || txtLname.val() === '' || txtPhone.val() === '' || txtEmail.val() ===
                '' /*|| input === ""*/ ) {
                app.dialog.alert("All fields are Required...");
                return;
            }
    
            var member = Object();
    
            member.fname = txtFname.val();
            member.lname = txtLname.val();
            member.phone = txtPhone.val();
            member.email = txtEmail.val();
            member.date = txtBirthdate.val();
    
    
    
            if (txtId.val() === '') { //Lo guarda
                member.id = new Date().getTime();
                saveMember(member);
            } else { //Lo actualiza
                member.id = parseInt(txtId.val());
                updateMember(member);
            }
    
            memberList();
          //  selectMemberList();
          //  mockData();
            txtFname.val(null);
            txtLname.val(null);
            txtPhone.val(null);
            txtEmail.val(null);
            txtBirthdate.val(null);
            txtId.val(null);
        });
    
    
    
        $$('#customerList').on("click", ".btn-user-info", function() {
            //   var idMember = $$(this).data("id");
            var idMember = $$('input.customerid').value();
    
            selectMember(idMember);
            $$("label").addClass("active");
            //$$("#modal-Title").html("View Customer");
    
        });
    
    
        $$('#customerList').on("click", ".btn-editar", function() {
            // var idMember = $$(this).data("id");
           // var idMember = $$('input.customerid').value();
            var idMember = $$("input#memberID").val();
            selectMember(idMember);
            $$("label").addClass("active");
            $$("#modal-Title").html("Edit Customer");
    
        });
    
        $$('#customerList').on("click", ".btn-eliminar", function() {
            //  var idMember = $$(this).data("id");
         //   var idMember = $$('input.customerid').value();
            var idMember = $$("input#memberID").val();
            removeMember(idMember);
            memberList();
            //selectMemberList();
        });

    });


    $$(document).on('page:init', '.page[data-name="customerinfo"]', function (e) {
        console.log('Customer Info');
        $$('.page-content').on('click', function () {
            memberList();
        })


        $$(".btn-eliminar").on("click", function () {
           // var idMember = $$(this).attr("data-id");
           var idMember = $$("input#memberID").val();
            removeMember(idMember);
            memberList();
            //selectMemberList();
        });

        $$(".btnMemberID").on("click", function () {
            var mid = $$("input#memberID").val();
            var mfn = $$("input.customername").val();
            
            console.log(mid);
            console.log(mfn);
            localStorage.setItem("idMember", mid);
            localStorage.setItem("fnMember", mfn);
            var timeandponumber = new Date().getTime();
            localStorage.setItem("timeandponumber", timeandponumber);
            var timeandpo = localStorage.getItem("timeandponumber");

            if (!localStorage.getItem("idMember")) {

                app.dialog.alert("Please select a customer.");

                app.router.navigate('/catalogb/');

                return false;
            } else {
             app.router.navigate('/catalog/');
                console.log("continue shopping");
            }
        })

    })


    $$('#btnCustomers').on('click', function () {
        memberList();
        //selectMemberList();
    });


    $$('#btnStore').on('click', function () {
       // app.loadStore();
    });

});

////////////////////////////////////////////////////////////////////
///////////////////////funciones para el CRUd///////////////////////
////////////////////////////////////////////////////////////////////
function init() {
    db.transaction(function (tx) {
            tx.executeSql('create table if not exists CUSTOMERS(ID,FNAMES,LNAMES,PHONE,EMAIL,DATE)');
            //  tx.executeSql('create table if not exists PURCHASEORDER(id,sku,cant,name,price,img,available,oldprice,smname,notes,email,timestamp,total)');
        //  tx.executeSql('create table if not exists PURCHASEORDER(ID, CNAME, SMNAME,TOTAL, TIMESTAMP)');
        },
        error, exito);
}



/*
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT,sku,name,cant,price)');
});


var userArray = [{ "sku": "0012", "name": "bob", "cant": "2", "price": "105" }, {  "sku": "2000", "name": "bob", "cant": "2", "price": "105" }];
function saveOrderLocal() {
    db.transaction(function (tx) {
        for (var i = 0; i < userArray.length; i++) {
            tx.executeSql("insert into user(sku,name,cant,price) values(?,?,?,?)", [userArray[i].sku, userArray[i].name,], successCallBack, errorCallBack);

        }
    });


    function successCallBack() {
        console.log("inserted corrrectly !!");
    }
    function errorCallBack(tx, error) {
        if (query.indexOf('insert into') === -1)
            app.dialog.alert("Error : " + error.message + " in " + query);
        console.log(error.message + "in" + tx);
    }

}*/


function memberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL , DATE FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";
                myJson = [];
               for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;
                    var fname = member.FNAMES;
                    var lname = member.LNAMES;
                    var date = member.DATE;
                    var fullname = member.FNAMES + ' ' + member.LNAMES;

                   // lisHtml += '<li><a href="/customerinfo/" data-fname="'+fname+'" data-lname="'+lname+'" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
                    lisHtml +=' <li class="swipeout">'+
                    '<div class="swipeout-content">'+
                    '<a href="/customerinfo/" datalink-id="'+id+'" data-fname="'+fname+'" data-lname="'+lname+'" onclick="selectMember(' + id + ')">'+
                    '<div class="item-content">'+
                    '<div class="item-media"><i class="customers-icons f7-icons">person</i></div>'+
                      '<div class="item-inner">'+
                        '<div class="item-title">' + fullname + '</div>'+
                      '</div>'+
                     
                    '</div>'+
                    '</a>'+
                 
                  '<div  class="swipeout-actions-right" style="padding-top:0px; padding-left:20px;">'+
                  '<p class="row">'+
                  '<a href="#" class="btn-editar">Edit</a>'+
                  '<a href="#" data-id="'+id+'" class="swipeout-delete btn-eliminar" style="color:#fff;">Delete</a>'+
                '</p>'+
                  '</div>'+
                  '</li>';
                    // myJson.push({ member: member,  fullname: fullname, FNAMES: member.FNAMES, LNAMES:member.LNAMES, ID: member.ID,});
                 //  myJson.push({member});
               //  myJson.push({ member: member,  fullname: fullname, FNAMES: member.FNAMES, LNAMES:member.LNAMES, ID: member.ID,});
                }



               /* function showAll(item, id, cid, title, fname, phone, description) {
                    $$('#customerList').append('<li>' + title + ' ' + fname + ' ' + id + '</li>');
                }*/
                //mybase.init.getAll();

                localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);
              //  console.log(JSON.stringify(myJson));
                //localStorage.setItem("customers", JSON.stringify(myJson));
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

/*

function selectMemberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;
                    var fullname = member.FNAMES + ' ' + member.LNAMES;

                    lisHtml += '<li><a href="/catalog/" class="customerInfo" onclick="selectMember(' + id + ')">' + fullname + '</a><input type="hidden" id="ccname" value="'+member.FNAMES+'" /></li>';
                   
                }
               $$(".customerInfo").on('click',function(){

                var thisCustomer = $$('.customername').val();
                localStorage.setItem("customername", thisCustomer);

               })
                localStorage.setItem("timeandponumber", timeandponumber);
                //localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#customerListSelect').html(lisHtml);


                /* $$(function () {
                     $$('.icon-btn').on('click', function () {
                         $$('.showData').toggle();
                     });
                 });*/


               /* $$('[data-toggle="class"]').click(function () {
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
*/


/*
function selectCustomertoShop() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = '';

                for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;



                    /*    lisHtml += '<div class="list-group-item customer-list list-group-item-action">'+
                                '<div class="media"><i class="material-icons"></i>' +
                                    '<a href="#" onclick="viewidMember('+ id +')"><img src="img/user.svg" class="mr-3 btn-user-info img-circle" width="48" alt=' + member.FNAMES + ' ' + member.LNAMES +" /></a>" +
                                    '<div class="media-body"><h5 class="mt-0 customer-name">' + member.FNAMES + ' ' + member.LNAMES + '</h5><p> ' + member.PHONE + '</p></div>'+
                                '</div>'+
                            '</div>';
*

                    lisHtml += '<li><a href="#" onclick="viewidMember(' + id + ')">' + member.FNAMES + ' ' + member.LNAMES + '</li>'

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

function mockData() {
    var str = '{ID: 4,FNAMES: "John", LNAMES: "Dough",PHONE: "0995475142",EMAIL: "johnd@mail.com"}';
    console.log(str);
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS (ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [str]);
    });
}*/

function saveMember(member) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL, DATE) VALUES(?, ?, ?,?,?,?)', [
            member.id, member.fname, member.lname, member.phone, member.email, member.date
        ]);
    }, error, function () {
        app.dialog.alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}


/*
function saveOrderLocal(order) {
    var order = Object();
    var i = 1;
    order.smname = $$("#ssmname").val();
    order.cname = $$("#ccname").val();
    order.total = $$("#grandtotal").val();
    order.timestamp = i++;


    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER(ID, CNAME, SMNAME,TOTAL, TIMESTAMP) VALUES(?, ?, ?,?,?)', [
            order.id, order.cname, order.smname, order.total, order.timestamp
        ]);
    }, error, function () {
        app.dialog.alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}
*/


function selectMember(idMember) {
    app.preloader.show();
                     setTimeout(function () {
    // localStorage.setItem("customer-name",idMember);
    db.readTransaction(function (t) {
        var memberHtml = $$('#customerInfo');
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL, DATE FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                memberHtml.html("");
                if (rs.rows.length > 0) {
                   
                      
                    var member = new Object();
                    member.id = rs.rows.item(0).ID;
                    member.fname = rs.rows.item(0).FNAMES;
                    member.lname = rs.rows.item(0).LNAMES;
                    member.phone = rs.rows.item(0).PHONE;
                    member.email = rs.rows.item(0).EMAIL;
                    member.date = rs.rows.item(0).DATE;
                    /* $$('#txt-id').val(rs.rows.item(0).ID);
                     $$('#fname').val(rs.rows.item(0).FNAMES);
                     $$('#lname').val(rs.rows.item(0).LNAMES);
                     $$('#phone').val(rs.rows.item(0).PHONE);
                     $$('#email').val(rs.rows.item(0).EMAIL);*/
                   
                        
                     
                           
                      
                     memberHtml.html('<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons">person</i></div>' +
                        '<div class="item-inner">' +
                        '<input type="hidden" class="customerid" value="' + rs.rows.item(0).ID + '" />' +
                        '<div class="item-title">' + rs.rows.item(0).FNAMES + ' ' + rs.rows.item(0).LNAMES + '</div>' +
                        '<div class="item-after"><input type="hidden" class="customername" value="' + rs.rows.item(0).FNAMES + ' '+ rs.rows.item(0).LNAMES +'" /></div>' +
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
                        '<div class="item-media"><i class="f7-icons">email</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).EMAIL + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="f7-icons">email</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).DATE + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="f7-icons">card</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).ID + '<input id="memberID" type="hidden" value="' + rs.rows.item(0).ID + '"/></div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>');
                       

                }
            }, error);
            
    });
    app.preloader.hide();
}, 1000)
}

/*

function memberProfile(idMember) {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {

                    var lisHtml = '';

                    for (var i = 0; i < rs.rows.length; i++) {
                        var member = rs.rows.item(i);
                        var id = member.ID;
                        var fname = member.FNAMES;
                        var lname = member.LNAMES;
                        var phone = member.PHONE;
                        var email = member.EMAIL;


                        lisHtml += '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>'
                        '<div class="item-inner">'
                        '<input type="hidden" class="customerid" value="' + id + '" />' +
                            '<div class="item-title">' + fname + ' ' + lname + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + phone + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + email + '</div>'
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

*/
/*

function viewidMember(idMember) {
    localStorage.setItem("idMember", idMember);
    console.log(idMember);
    // viewidMember(idMembre);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var member = new Object();
                    member.fname = rs.rows.item(0).FNAMES;
                    member.lname = rs.rows.item(0).LNAMES;
                    member.phone = rs.rows.item(0).PHONE;
                    member.email = rs.rows.item(0).EMAIL;
                    $$('#txt-id').val(rs.rows.item(0).ID);
                    $$('#fname').html(rs.rows.item(0).FNAMES);
                    $$('#lname').html(rs.rows.item(0).LNAMES);
                    $$('#phone').html(rs.rows.item(0).PHONE);
                    $$('#email').html(rs.rows.item(0).EMAIL);
                    //console.log($$(this).attr([id]));
                }
            }, error);
    });
}
*/
function updateMember(member) {
    db.transaction(function (tx) {
        tx.executeSql('UPDATE CUSTOMERS SET FNAMES = ?, LNAMES = ?, PHONE = ?, EMAIL = ?,  DATE = ?, WHERE ID = ?', [
             member.fname, member.lname,member.phone, member.email, member.date, member.id
        ]);
    }, error, function () {
        app.dialog.app.dialog.alert("The member has been updated successfully");
    });
}

function removeMember(idMember) {

    var retVal = app.dialog.confirm("This will delete the selected record? Do you want to continue ?");
    if (retVal == true) {
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
        }, error, function () {
            app.dialog.app.dialog.alert("The member has been removed successfully");
        })
        return true;
    } else {

        return false;
    }



    /*  db.transaction(function (tx) {
          tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
      }, error, function () {
          app.dialog.alert("The member has been rem successfully");
      });*/
}

function savePO(member) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL, DATE) VALUES(?,?,?,?,?,?)', [
            member.id, member.fname, member.lname, member.phone, member.email,  member.date
        ]);
    }, error, function () {
        app.dialog.alert("Item Saved.");
        $$(".close").trigger();
    });
}


/*
function saveOrderLocals(order) {
    var str = localStorage.getItem("purchaseorder");
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER (id,sku,cant,name,price,img,available,oldprice,smname,notes,email,timestamp,total) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [94, JSON.parse(str)]);
    }, error, function () {
        app.dialog.alert("Item Saved.");
        $$(".close").trigger();
    });
}*/

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
