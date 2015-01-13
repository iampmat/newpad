//Check edits onload
window.addEventListener('load', onLoad);
function onLoad() {
	var editElem = document.getElementById("edit");
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
    	dd='0'+dd
	} 

	if(mm<10) {
    	mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;

	editElem.innerHTML += today;
	checkEdits();
}
function checkEdits() {
	//find out if the user has previously saved edits
	if(localStorage.userEdits!=null) {
		document.getElementById("edit").innerHTML += localStorage.userEdits;
	}
};
document.onkeyup = function (e) {
	e = e || window.event;
	console.log(e.keyCode);
	saveEdits();
};
function saveEdits() {
	//get the editable element
	var editElem = document.getElementById("edit");
	//get the edited element content
	var userVersion = editElem.innerHTML;
	//save the content to local storage
	localStorage.userEdits = userVersion;
};