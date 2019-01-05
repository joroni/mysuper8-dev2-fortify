$(function () {
    var operation = "A"; //"A"=Adição; "E"=Edição
    var index_selected = -1; //Índice do item selecionado na lista
    var txtClients = localStorage.getItem("txtClients");// Recupera os dados armazenados
    txtClients = JSON.parse(txtClients); // Converte string para objeto


    

    if (txtClients == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
        txtClients = [];
    }

    $("#frmCadastro").on("submit", function () {
        if (operation == "A") {
            return Adicionar(txtClients);
        } else {
            return EditItem(txtClients, index_selected);
        }
    });

    List(txtClients);

    $("#tblList").on("click", ".btnEdit", function () {
        operation = "E";
        index_selected = parseInt($(this).attr("alt"));
        var cli = JSON.parse(txtClients[index_selected]);
        $("#txtCode").val(cli.Code);
        $("#txtName").val(cli.Name);
        $("#txtCid").val(cli.Cid);
        $("#txtDate").val(cli.Date);
        $("#txtItems").val(cli.Items);
        $("#txtCode").attr("readonly", "readonly");
        $("#txtName").focus();
    });

    $("#tblList").on("click", ".btnDeleteItem", function () {
        index_selected = parseInt($(this).attr("alt"));
        DeleteItem(txtClients, index_selected);
        (txtClients);
    });
});

function Adicionar(txtClients) {

    var client = JSON.stringify({
        Code: $("#txtCode").val(),
        Name: $("#txtName").val(),
        Cid: $("#txtCid").val(),
        Date: $("#txtDate").val(),
        Items: $("#txtItems").val()
    });
    txtClients.push(client);
    console.log("txtClients - " + txtClients);
    localStorage.setItem("txtClients", JSON.stringify(txtClients));
    alert("Item Added Successfully.");
    return true;
}

function EditItem(txtClients, index_selected) {
    txtClients[index_selected] = JSON.stringify({
        Code: $("#txtCode").val(),
        Name: $("#txtName").val(),
        Cid: $("#txtCid").val(),
        Date: $("#txtDate").val(),
        Date: $("#txtItems").val()
    });//Altera o item selecionado na tabela
    localStorage.setItem("txtClients", JSON.stringify(txtClients));
    alert("Updated Successfully.")
    operation = "A"; //Volta ao padrão
    return true;
}

function DeleteItem(txtClients, index_selected) {
    txtClients.splice(index_selected, 1);
    localStorage.setItem("txtClients", JSON.stringify(txtClients));
    alert("Registro excluído.");

}

function List(txtClients) {
    $("#tblList").html("");
    $("#tblList").html(
        "<thead>" +
        "   <tr>" +
        "   <th></th>" +
        "   <th>Code</th>" +
        "   <th>Name</th>" +
        "   <th>Cid</th>" +
        "   <th>Date</th>" +
        "   <th>Items</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in txtClients) {
        var cli = JSON.parse(txtClients[i]);
        $("#tblList tbody").append("<tr>");
        $("#tblList tbody").append("<td><img src='img/edit.png' alt='" + i + "'class='btnEdit' width='32'/><img src='img/delete.png' width='32' alt='" + i + "' class='btnDeleteItem'/></td>");
        $("#tblList tbody").append("<td>" + cli.Code + "</td>");
        $("#tblList tbody").append("<td>" + cli.Name + "</td>");
        $("#tblList tbody").append("<td>" + cli.Cid + "</td>");
        $("#tblList tbody").append("<td>" + cli.Date + "</td>");
        $("#tblList tbody").append("<td>" + cli.Items + "</td>");
        $("#tblList tbody").append("</tr>");
    }
}