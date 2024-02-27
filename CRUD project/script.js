var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrive data

function readFormData(){
    var formData = {};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["product"]=document.getElementById("product").value;
    formData["qty"]=document.getElementById("qty").value;
    formData["perPrice"]=document.getElementById("perPrice").value;
    return formData;
}
// insert data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0]; //select the first row in the table
    var newRow = table.insertRow(0); //add the new row
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`; 

    selectedRow = null;
}

//edit the data
function onEdit(td){
    selectedRow = td.parentNode.parentNode;  // it will access the parent cells data
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}
//update the record
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}
// delete the record
function onDelete(td){
    if(confirm("Do you want to delete this record")){
        var row = td.parentNode.parentNode;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm()
}

// Reset the data
function resetForm(){
    document.getElementById("productCode").value = "";
    document.getElementById("product").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("perPrice").value = "";
}