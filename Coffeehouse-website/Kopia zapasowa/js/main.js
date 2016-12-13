var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    document.querySelector(".pageHeader").classList.toggle("navOpened");
}, false);

/* *************************** Album.html *************************** */

var picSource1 = "img/images/img";
var picSource2 = ".jpg";
var maxCounter = 8;

/* View images - scroll */
var counter1 = 1;
var viewCounterTemp = 0;
var path1 = picSource1.concat(counter1);
path1 = path1.concat(picSource2);
var path2 = picSource1.concat(counter1+1);
path2 = path2.concat(picSource2);
var path3 = picSource1.concat(counter1+2);
path3 = path3.concat(picSource2);
document.getElementById("view1").src = path1;
document.getElementById("view2").src = path2;
document.getElementById("view3").src = path3;

viewNext.addEventListener("click", function() {
	if(counter1 == maxCounter-2) {
		maxCounter-2;
	} else {
		counter1++;
	}
	var path1 = picSource1.concat(counter1);
	path1 = path1.concat(picSource2);
	var path2 = picSource1.concat(counter1+1);
	path2 = path2.concat(picSource2);
	var path3 = picSource1.concat(counter1+2);
	path3 = path3.concat(picSource2);
	
	if(viewCounterTemp % 2 == 0) {
		document.getElementById("view1").src = path1;
		document.getElementById("view1").setAttribute("id","viewTemp1");
		document.getElementById("view2").src = path2;
		document.getElementById("view2").setAttribute("id","viewTemp2");
		document.getElementById("view3").src = path3;
		document.getElementById("view3").setAttribute("id","viewTemp3");
	} else {
		document.getElementById("viewTemp1").src = path1;
		document.getElementById("viewTemp1").setAttribute("id","view1");
		document.getElementById("viewTemp2").src = path2;
		document.getElementById("viewTemp2").setAttribute("id","view2");
		document.getElementById("viewTemp3").src = path3;
		document.getElementById("viewTemp3").setAttribute("id","view3");
	}
	viewCounterTemp++;
	
}, false);

viewPrev.addEventListener("click", function() {
	if(counter1 == 1) {
		counter1 = 1;
	} else {
		counter1--;
	}
	var path1 = picSource1.concat(counter1);
	path1 = path1.concat(picSource2);
	var path2 = picSource1.concat(counter1+1);
	path2 = path2.concat(picSource2);
	var path3 = picSource1.concat(counter1+2);
	path3 = path3.concat(picSource2);
	if(viewCounterTemp % 2 == 0) {
		document.getElementById("view1").src = path1;
		document.getElementById("view1").setAttribute("id","viewTemp1");
		document.getElementById("view2").src = path2;
		document.getElementById("view2").setAttribute("id","viewTemp2");
		document.getElementById("view3").src = path3;
		document.getElementById("view3").setAttribute("id","viewTemp3");
	} else {
		document.getElementById("viewTemp1").src = path1;
		document.getElementById("viewTemp1").setAttribute("id","view1");
		document.getElementById("viewTemp2").src = path2;
		document.getElementById("viewTemp2").setAttribute("id","view2");
		document.getElementById("viewTemp3").src = path3;
		document.getElementById("viewTemp3").setAttribute("id","view3");
	}
	viewCounterTemp--;
}, false);

/* Preview image */
var previewNext = document.querySelector("#previewNext");
var previewPrev = document.querySelector("#previewPrev");
var previewCounterTemp = 0;
var counter2 = 1;
var path = picSource1.concat(counter2);
path = path.concat(picSource2);
document.getElementById("preview").src = path;

previewNext.addEventListener("click", function() {
	if(counter2 == maxCounter) {
		counter2 = 1;
	} else {
		counter2++;
	}
	path = picSource1.concat(counter2);
	path = path.concat(picSource2);
	if(previewCounterTemp % 2 == 0) {
		document.getElementById("preview").src = path;
		document.getElementById("preview").setAttribute("id","previewTemp");
	} else {
		document.getElementById("previewTemp").src = path;
		document.getElementById("previewTemp").setAttribute("id","preview");
	}
	previewCounterTemp++;
}, false);

previewPrev.addEventListener("click", function() {
	if(counter2 == 1) {
		counter2 = maxCounter;
	} else {
		counter2--;
	}
	path = picSource1.concat(counter2);
	path = path.concat(picSource2);
	if(previewCounterTemp % 2 == 0) {
		document.getElementById("preview").src = path;
		document.getElementById("preview").setAttribute("id","previewTemp");
	} else {
		document.getElementById("previewTemp").src = path;
		document.getElementById("previewTemp").setAttribute("id","preview");
	}
	previewCounterTemp++;
}, false);
/* *************************** Album.html *************************** */