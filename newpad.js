//Check edits onload
window.addEventListener('load', checkEdits);
function checkEdits() {
	//find out if the user has previously saved edits
	if(localStorage.userEdits!=null) {
		document.getElementById("edit").innerHTML = localStorage.userEdits;
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