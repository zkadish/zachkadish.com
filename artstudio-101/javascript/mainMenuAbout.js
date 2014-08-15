					 
/*var tabMenu = new Array("about", "artMenu", "clients", "team", "services");
var hitBtn = "";
//pageContent("pageContent", "about");
var object = "about";
//alert(object);

//Tab Roll Over
function tabOver(object) {
	if (object != hitBtn)
	{
		document.getElementById(object).style.backgroundImage = "url(images/"+object+"BtnOver.png)";
	}
}
//Tab Roll Out
function tabOut(object) {
	if (object != hitBtn)
	{
		document.getElementById(object).style.backgroundImage = "url(images/"+object+"Btn.png)";
	}
}

//Swap out the iframe content
function pageContent(id, object) {
	//alert("test");
	alert(object);
	//newURL = object + ".html";
	//document.getElementById(id).src = newURL;
	for (x in tabMenu)
	{
		if (tabMenu[x] == object)
		{
			hitBtn = object;
			document.getElementById(object).style.backgroundImage = "url(images/"+object+"BtnHit.png)";
		}
		else
		{
			document.getElementById(tabMenu[x]).style.backgroundImage = "url(images/"+tabMenu[x]+"Btn.png)";
		}
	}
}*/

$(document).ready(function() {

	$("#about").css("background", "url(images/aboutBtnHit.png)");

	/*$("#contact").click(function() {
		//alert(this.id);
		document.getElementById("modelBG").style.display = "block";
		document.getElementById("modelContactWindow").style.display = "block";
	});*/

});






















