
//alert("test");

$(document).ready(function() {
						   
	var imageTagString;
	var collectionName = "";//used to determine which collection the model starts in
	var collectionArrayIndex;
	var collectionArrayCatagory = "";
	var imagePrefix = "";//adds the collection name to the begging of the file name
	var imageNumber;//the images number displayed in the html of the model
	var imageName = "";//the file name of the image
	var imageNumName = "";//image catagory name 

	var paintingCollection = new Array();
	paintingCollection[0] = "painting_01A.jpg";
	paintingCollection[1] = "painting_02A.jpg";
	paintingCollection[2] = "painting_03A.jpg";
	paintingCollection[3] = "painting_04A.jpg";
	paintingCollection[4] = "painting_05A.jpg";
	paintingCollection[5] = "painting_06A.jpg";
	paintingCollection[6] = "painting_07A.jpg";
	paintingCollection[7] = "painting_08A.jpg";
	paintingCollection[8] = "painting_09A.jpg";
	paintingCollection[9] = "painting_10A.jpg";
	paintingCollection[10] = "painting_11A.jpg";
	paintingCollection[11] = "painting_12A.jpg";
	
	var photographyCollection = new Array();
	photographyCollection[0] = "photograph_01A.jpg";
	photographyCollection[1] = "photograph_02A.jpg";
	photographyCollection[2] = "photograph_03A.jpg";
	photographyCollection[3] = "photograph_04A.jpg";
	photographyCollection[4] = "photograph_05A.jpg";
	photographyCollection[5] = "photograph_06A.jpg";
	photographyCollection[6] = "photograph_07A.jpg";
	photographyCollection[7] = "photograph_08A.jpg";
	photographyCollection[8] = "photograph_09A.jpg";
	photographyCollection[9] = "photograph_10A.jpg";
	photographyCollection[10] = "photograph_11A.jpg";
	photographyCollection[11] = "photograph_12A.jpg";
	
	var mixedMediaCollection = new Array();
	mixedMediaCollection[0] = "mixedMedia_01A.jpg";
	mixedMediaCollection[1] = "mixedMedia_02A.jpg";
	mixedMediaCollection[2] = "mixedMedia_03A.jpg";
	mixedMediaCollection[3] = "mixedMedia_04A.jpg";
	mixedMediaCollection[4] = "mixedMedia_05A.jpg";
	mixedMediaCollection[5] = "mixedMedia_06A.jpg";
	mixedMediaCollection[6] = "mixedMedia_07A.jpg";
	mixedMediaCollection[7] = "mixedMedia_08A.jpg";
	mixedMediaCollection[8] = "mixedMedia_09A.jpg";
	mixedMediaCollection[9] = "mixedMedia_10A.jpg";
	mixedMediaCollection[10] = "mixedMedia_11A.jpg";
	mixedMediaCollection[11] = "mixedMedia_12A.jpg";
	
	var sculptureCollection = new Array();
	sculptureCollection[0] = "sculpture_01A.jpg";
	sculptureCollection[1] = "sculpture_02A.jpg";
	sculptureCollection[2] = "sculpture_03A.jpg";
	sculptureCollection[3] = "sculpture_04A.jpg";
	sculptureCollection[4] = "sculpture_05A.jpg";
	sculptureCollection[5] = "sculpture_06A.jpg";
	sculptureCollection[6] = "sculpture_07A.jpg";
	sculptureCollection[7] = "sculpture_08A.jpg";
	sculptureCollection[8] = "sculpture_09A.jpg";
	sculptureCollection[9] = "sculpture_10A.jpg";
	sculptureCollection[10] = "sculpture_11A.jpg";
	sculptureCollection[11] = "sculpture_12A.jpg";
	
	var collectionArray = new Array(paintingCollection, photographyCollection, mixedMediaCollection, sculptureCollection);
	
	$("#nextModelBtn").click(function() {
		//Get which collection the user started in from the id of the image tag created by the openModel.js file
		//imageTagString = $("#imageWrapper").html().split(" ");
		imageTagString = $("center").html().split(" ");
		//alert($("center").html());
		//alert("imageTagString[3] = " + imageTagString[3]);
		//alert("imageTagString[3].charAt(3) = " + imageTagString[3].charAt(3));
		//IE7&IE8 fix - it's not returning html with quotes :(
		if(imageTagString[3].charAt(3) == "p"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "m"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "s"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "\""){
			//alert("IE9");
			collectionName = imageTagString[3].replace("id=\"","").replace("\"","");
		}
		else {
			collectionName = imageTagString[1].replace("id=\"","").replace("\"","");
		}
		//alert("collectionName = " + collectionName);
		//Assign collection to ImageName
		switch(collectionName) {
			case "painters":
			//alert("test");
			imagePrefix = "painting_";
			imageNumName = "painting ";
			numberPrefix = "P-";
			collectionArrayIndex = 0;
			break;
			case "photographers":
			imagePrefix = "photograph_";
			imageNumName = "photograph ";
			numberPrefix = "PH-";
			collectionArrayIndex = 1;
			break;
			case "mixedMedia":
			imagePrefix = "mixedMedia_";
			imageNumName = "mixed media ";
			numberPrefix = "MM-";
			collectionArrayIndex = 2;
			break;
			case "sculptors":
			imagePrefix = "sculpture_";
			imageNumName = "sculpture ";
			numberPrefix = "S-";
			collectionArrayIndex = 3;
			break;
		}
		//rebiuld image file name
		//imageName = imagePrefix + $("#imageNumber").html().replace("#","") + ".jpg";
		imageName = imagePrefix + $("#imageNumber").html().replace(imageNumName,"").replace(/\s/g,"") + "A.jpg";
		//alert("imageName = " + imageName);
		//Get index of the Array which the image is in
		
		//alert("collectionArray[collectionArrayIndex] = " + collectionArray[collectionArrayIndex]);
		for (var i = 0; i < collectionArray[collectionArrayIndex].length; i++) {
			//alert(collectionArray[collectionArrayIndex][i] + " " + imageName);
			if (collectionArray[collectionArrayIndex][i] == imageName) {
				collectionImage = i;
				break;
			}
		}
		
		//alert("arrayIndex = " + collectionImage);
		//alert("arrayIndex = " + collectionArray[collectionArrayIndex].indexOf(imageName));
		//collectionImage = collectionArray[collectionArrayIndex].indexOf(imageName);
		
		if(collectionImage != collectionArray[collectionArrayIndex].length - 1) {
			collectionImage++;
		}
		else {
			collectionImage = 0;
		}
		
		$("#imageWrapper").html("<center><img id=\"" + collectionName + "\" src=\"images/" + collectionName + "/" + collectionArray[collectionArrayIndex][collectionImage] + "\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		//alert("next imageName = " + collectionArray[collectionArrayIndex][collectionImage]);
		//imageNumber = "#" + collectionArray[collectionArrayIndex][collectionImage].replace(imagePrefix,"").replace(".jpg","");
		imageNumber = collectionArray[collectionArrayIndex][collectionImage].replace(imagePrefix,imageNumName).replace("A.jpg","");
		//alert("imageNumber = " + imageNumber);
		$("#imageNumber").html(imageNumber);
		//$("#imageWrapper").css("width","700px");
	});

	$("#previousModelBtn").click(function() {
		//Get which collection the user started in from the id of the image tag created by the openModel.js file
		imageTagString = $("center").html().split(" ");
		//collectionName = imageTagString[1].replace("id=\"","").replace("\"","");
		
		if(imageTagString[3].charAt(3) == "p"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "m"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "s"){
			//alert("IE8");
			collectionName = imageTagString[3].replace("id=","");
		}
		else if(imageTagString[3].charAt(3) == "\""){
			//alert("IE9");
			collectionName = imageTagString[3].replace("id=\"","").replace("\"","");
		}
		else {
			collectionName = imageTagString[1].replace("id=\"","").replace("\"","");
		}
		
		//alert("collectionName = " + collectionName);
		//alert($("#imageNumber").html().replace("#",""));
		//Assign collection to ImageName
		switch(collectionName) {
			case "painters":
			imagePrefix = "painting_";
			imageNumName = "painting ";
			numberPrefix = "P-";
			collectionArrayIndex = 0;
			break;
			case "photographers":
			imagePrefix = "photograph_";
			imageNumName = "photograph ";
			numberPrefix = "PH-";
			collectionArrayIndex = 1;
			break;
			case "mixedMedia":
			imagePrefix = "mixedMedia_";
			imageNumName = "mixed media ";
			numberPrefix = "MM-";
			collectionArrayIndex = 2;
			break;
			case "sculptors":
			imagePrefix = "sculpture_";
			imageNumName = "sculpture ";
			numberPrefix = "S-";
			collectionArrayIndex = 3;
			break;
		}
		//rebiuld image file name
		//imageName = imagePrefix + $("#imageNumber").html().replace("#","") + ".jpg";
		imageName = imagePrefix + $("#imageNumber").html().replace(imageNumName,"").replace(/\s/g,"") + "A.jpg";
		//imageNumber = "painting_" + imageNumber + ".jpg";
		//alert("imageName = " + imageName);
		//Get the array index of the image 
		//collectionImage = collectionArray[collectionArrayIndex].indexOf(imageName);
		for (var i = 0; i < collectionArray[collectionArrayIndex].length; i++) {
			if (collectionArray[collectionArrayIndex][i] == imageName) {
				collectionImage = i;
				break;
			}
		}
		
		if(collectionImage != 0) {
			collectionImage--;
		}
		else {
			//alert("collectionImage = 11");
			collectionImage = collectionArray[collectionArrayIndex].length -1;
		}
		//alert("arrayIndex = " + collectionArray[collectionArrayIndex].indexOf(imageName));
		//if the index is not equal to zero then move back one index position
		//if it is equal to zero go to the end of the array
		/*if(collectionImage != 0) {
			collectionImage--;
		}
		else {
			collectionImage = collectionArray[collectionArrayIndex].length - 1;
		}*/
		//alert("collectionName = " + collectionName);
		//alert("next imageName = " + collectionArray[collectionArrayIndex][collectionImage]);
		$("#imageWrapper").html("<center><img id=\"" + collectionName + "\" src=\"images/" + collectionName + "/" + collectionArray[collectionArrayIndex][collectionImage] + "\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		//alert("next imageName = " + collectionArray[collectionArrayIndex][collectionImage]);
		//imageNumber = "#" + collectionArray[collectionArrayIndex][collectionImage].replace(imagePrefix,"").replace(".jpg","");
		imageNumber = collectionArray[collectionArrayIndex][collectionImage].replace(imagePrefix,imageNumName).replace("A.jpg","");
		//alert("imageNumber = " + imageNumber);
		$("#imageNumber").html(imageNumber);
		
	});

/********************* Model Menu Btns **************************/
/*** note: reset btn beaviour on close of model ****/

	$("#photographyModelBtn").click(function() {
		//alert("photography");
		//reset other btns
		$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		$("#paintingModelBtn").hover(function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");}, function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		});
		$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		$("#mixedMediaModelBtn").hover(function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");}, function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		});
		$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		$("#sculptureModelBtn").hover(function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");}, function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		});
		//reset image
		$("#previousNextWrapperModel").css("width","165px");
		$("#imageNumber").html("photograph 01");
		$("#imageWrapper").html("<center><img id=\"photographers\" src=\"images/photographers/photograph_01A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");
		$("#photographyModelBtn").hover(function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat")
		});
	});

	$("#paintingModelBtn").click(function() {
		//alert("painting");
		//reset other btns
		$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		$("#photographyModelBtn").hover(function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");}, function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		});
		$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		$("#mixedMediaModelBtn").hover(function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");}, function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		});
		$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		$("#sculptureModelBtn").hover(function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");}, function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		});
		//reset image
		$("#previousNextWrapperModel").css("width","140px");
		$("#imageNumber").html("painting 01");
		$("#imageWrapper").html("<center><img id=\"painters\" src=\"images/painters/painting_01A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");
		$("#paintingModelBtn").hover(function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat")
		});
	});
	
	$("#mixedMediaModelBtn").click(function() {	  
		//alert("mixedMedia");
		//reset other btns
		$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		$("#paintingModelBtn").hover(function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");}, function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		});
		$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		$("#photographyModelBtn").hover(function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");}, function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		});
		$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		$("#sculptureModelBtn").hover(function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");}, function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		});
		//reset image
		$("#previousNextWrapperModel").css("width","175px");
		$("#imageNumber").html("mixed media 01");
		$("#imageWrapper").html("<center><img id=\"mixedMedia\" src=\"images/mixedMedia/mixedMedia_01A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");
		$("#mixedMediaModelBtn").hover(function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat")
		});
	});
	
	$("#sculptureModelBtn").click(function() {		  
		//alert("sculpture");
		//reset other btns
		$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		$("#paintingModelBtn").hover(function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");}, function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		});
		$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		$("#photographyModelBtn").hover(function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");}, function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		});
		$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		$("#mixedMediaModelBtn").hover(function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");}, function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		});
		//reset image
		$("#previousNextWrapperModel").css("width","150px");
		$("#imageNumber").html("sculpture 01");
		$("#imageWrapper").html("<center><img id=\"sculptors\" src=\"images/sculptors/sculpture_01A.jpg\" alt=\"\" border=\"0\" style=\"display: block;\" /></center>");
		$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");
		$("#sculptureModelBtn").hover(function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat")
		});
	});
	
	//hover over model background
	$("#modelBG,.closeBtn").hover(function () {
		//alert("test");
		$(".closeBtn").css("background","url(images/model/modelCloseBtnOver.jpg) no-repeat");
	},
	function () {
		$(".closeBtn").css("background","url(images/model/modelCloseBtn.jpg) no-repeat");				   
	});
	
	//close btn
	$("#modelBG,.closeBtn").click(function() {
		document.getElementById("modelBG").style.display = "none";
		document.getElementById("modelWindow").style.display = "none";
		document.getElementById("modelContactWindow").style.display = "none";
		
		$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		$("#paintingModelBtn").hover(function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtnOver.png) no-repeat");}, function() {
			$("#paintingModelBtn").css("background","url(images/model/paintingBtn.png) no-repeat")
		});
		$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		$("#photographyModelBtn").hover(function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtnOver.png) no-repeat");}, function() {
			$("#photographyModelBtn").css("background","url(images/model/photographyBtn.png) no-repeat")
		});
		$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		$("#mixedMediaModelBtn").hover(function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtnOver.png) no-repeat");}, function() {
			$("#mixedMediaModelBtn").css("background","url(images/model/mixedMediaBtn.png) no-repeat")
		});
		$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		$("#sculptureModelBtn").hover(function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtnOver.png) no-repeat");}, function() {
			$("#sculptureModelBtn").css("background","url(images/model/sculptureBtn.png) no-repeat")
		});
		
	});
	
	//Open Contact Modal Window
	$("#contact").click(function() {
		//alert(this.id);
		document.getElementById("modelBG").style.display = "block";
		document.getElementById("modelContactWindow").style.display = "block";
	});
	
	
});