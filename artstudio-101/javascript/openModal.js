
//alert("test");

$(document).ready(function() {

	$("div.painterWrapper").click(function() {
		//alert(this.id);
		parent.document.getElementById("modelBG").style.display = "block";
		parent.document.getElementById("modelWindow").style.display = "block";
		parent.$("#previousNextWrapperModel").css("width","140px");
		parent.$("#imageNumber").html("painting " + this.id);
		parent.$("#imageWrapper").html("<center><img id=\"painters\" src=\"images/painters/painting_" + this.id + "A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		parent.$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");
	});
	
	$("div.photographerWrapper").click(function() {
		//alert(this.id);
		parent.document.getElementById("modelBG").style.display = "block";
		parent.document.getElementById("modelWindow").style.display = "block";
		parent.$("#previousNextWrapperModel").css("width","165px");
		parent.$("#imageNumber").html("photograph " + this.id);
		parent.$("#imageWrapper").html("<center><img id=\"photographers\" src=\"images/photographers/photograph_" + this.id + "A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		parent.$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");
	});

	$("div.mixedMediaWrapper").click(function() {
		//alert(this.id);
		parent.document.getElementById("modelBG").style.display = "block";
		parent.document.getElementById("modelWindow").style.display = "block";
		parent.$("#previousNextWrapperModel").css("width","175px");
		parent.$("#imageNumber").html("mixed media " + this.id);
		parent.$("#imageWrapper").html("<center><img id=\"mixedMedia\" src=\"images/mixedMedia/mixedMedia_" + this.id + "A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		parent.$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");
	});
	
	$("div.sculptorWrapper").click(function() {
		//alert(this.id);
		parent.document.getElementById("modelBG").style.display = "block";
		parent.document.getElementById("modelWindow").style.display = "block";
		parent.$("#previousNextWrapperModel").css("width","150px");
		parent.$("#imageNumber").html("sculpture " + this.id);
		parent.$("#imageWrapper").html("<center><img id=\"sculptors\" src=\"images/sculptors/sculpture_" + this.id + "A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		parent.$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");
	});
	
});



