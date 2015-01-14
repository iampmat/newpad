//Check edits onload
window.addEventListener('load', onLoad);
function onLoad() {
	var dateElem = document.getElementById("date");
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) {
    	dd='0'+dd
	} 
	if(mm<10) {
    	mm='0'+mm
	} 
	today = mm+'/'+dd+'/'+yyyy;
	dateElem.innerHTML += today;
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
/*
function buildTopSitesList(mostVisitedURLs) {
  var listDiv = document.getElementById('list');
  var ol = listDiv.appendChild(document.createElement('ol'));

  for (var i = 0; i < 5; i++) {
    var li = ol.appendChild(document.createElement('li'));
    var a = li.appendChild(document.createElement('a'));
    a.href = mostVisitedURLs[i].url;
    a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
}
chrome.topSites.get(buildTopSitesList);*/