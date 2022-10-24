var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Will Retrieve the Data
function readFormData(){
    var formData = {};
    formData["gamingCode"] = document.getElementById("gamingCode").value;
    formData["nintendoProduct"] = document.getElementById("nintendoProduct").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["gamePrice"] = document.getElementById("gamePrice").value;
    return formData;
}

//Allows User To Insert Their Data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.gamingCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nintendoProduct;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.genre;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gamePrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`    
}

//Allows User to Edit Data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('gamingCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nintendoProduct').value = selectedRow.cells[1].innerHTML;
    document.getElementById('genre').value = selectedRow.cells[2].innerHTML;
    document.getElementById('gamePrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.gamingCode;
    selectedRow.cells[1].innerHTML = formData.nintendoProduct;
    selectedRow.cells[2].innerHTML = formData.genre;
    selectedRow.cells[3].innerHTML = formData.gamePrice;
}

//Allows The User To Delete Thier Data
function onDelete(td){
    if(confirm('Would you like to delete game information?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//The Data Will Reset
function resetForm(){
    document.getElementById('gamingCode').value = '';
    document.getElementById('nintendoProduct').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('gamePrice').value = '';
}