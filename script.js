var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//read the data
function readFormData() {
    var formData = {};
    formData["employeeName"] = document.getElementById("employeeName").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["sal"] = document.getElementById("sal").value;
    formData["place"] = document.getElementById("place").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.employeeName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.designation;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.sal;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Update the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeeName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sal").value = selectedRow.cells[2].innerHTML;
    document.getElementById("place").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeeName;
    selectedRow.cells[1].innerHTML = formData.designation;
    selectedRow.cells[2].innerHTML = formData.sal;
    selectedRow.cells[3].innerHTML = formData.place;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('empList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("employeeName").value = '';
    document.getElementById("designation").value = '';
    document.getElementById("sal").value = '';
    document.getElementById("place").value = '';
    selectedRow = null;
}
