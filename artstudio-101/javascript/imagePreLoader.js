// JavaScript Document
$(document).ready(function() {
//alert('Loader');
function preloadimages(arr){
	//alert('function preloadimages()');
    var newimages=[];
	var loadedimages=0;
	var postaction=function(){};
    var arr=(typeof arr!="object")? [arr] : arr; //force arr parameter to always be an array
	
	function imageloadpost(){
        loadedimages++;
        if (loadedimages==arr.length){
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
	
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src=arr[i];
		newimages[i].onload=function(){
            imageloadpost();
        }
        newimages[i].onerror=function(){
			imageloaderror();
        }
    }
	return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }

}
 
//preload 3 images:
preloadimages([
			   'images/aboutBtn.png',
			   'images/aboutBtnOver.png',
			   'images/artMenuBtnHit.png',
			   'images/artMenuBtnOver.png',
	           'images/clientsBtnHit.png',
	           'images/clientsBtnOver.png',
			   'images/teamBtnHit.png',
			   'images/teamBtnOver.png',
			   'images/servicesBtnHit.png',
			   'images/servicesBtnOver.png',
			   'images/contactBtnOver.png',
			   'images/services/sunday-moring-btnOver.png',
			   'images/artMenu/photographyTabOver.png',
			   'images/artMenu/paintingTabOver.png',
			   'images/artMenu/mixedMediaTabOver.png',
			   'images/artMenu/sculptureTabOver.png',
			   'images/model/photographyBtnOver.png',
			   'images/model/paintingBtnOver.png',
			   'images/model/mixedMediaBtnOver.png',
			   'images/model/sculptureBtnOver.png',
			   'images/photographers/photograph_01A.jpg',
			   'images/photographers/photograph_02A.jpg',
			   'images/photographers/photograph_03A.jpg',
			   'images/photographers/photograph_04A.jpg',
			   'images/photographers/photograph_05A.jpg',
			   'images/photographers/photograph_06A.jpg',
			   'images/photographers/photograph_07A.jpg',
			   'images/photographers/photograph_08A.jpg',
			   'images/photographers/photograph_09A.jpg',
			   'images/photographers/photograph_10A.jpg',
			   'images/photographers/photograph_11A.jpg',
			   'images/photographers/photograph_12A.jpg',
			   'images/painters/painting_01A.jpg',
			   'images/painters/painting_02A.jpg',
			   'images/painters/painting_03A.jpg',
			   'images/painters/painting_04A.jpg',
			   'images/painters/painting_05A.jpg',
			   'images/painters/painting_06A.jpg',
			   'images/painters/painting_07A.jpg',
			   'images/painters/painting_08A.jpg',
			   'images/painters/painting_09A.jpg',
			   'images/painters/painting_10A.jpg',
			   'images/painters/painting_11A.jpg',
			   'images/painters/painting_12A.jpg',
			   'images/mixedMedia/mixedMedia_01A.jpg',
			   'images/mixedMedia/mixedMedia_02A.jpg',
			   'images/mixedMedia/mixedMedia_03A.jpg',
			   'images/mixedMedia/mixedMedia_04A.jpg',
			   'images/mixedMedia/mixedMedia_05A.jpg',
			   'images/mixedMedia/mixedMedia_06A.jpg',
			   'images/mixedMedia/mixedMedia_07A.jpg',
			   'images/mixedMedia/mixedMedia_08A.jpg',
			   'images/mixedMedia/mixedMedia_09A.jpg',
			   'images/mixedMedia/mixedMedia_10A.jpg',
			   'images/mixedMedia/mixedMedia_11A.jpg',
			   'images/mixedMedia/mixedMedia_12A.jpg',
			   'images/sculptors/sculpture_01A.jpg',
			   'images/sculptors/sculpture_02A.jpg',
			   'images/sculptors/sculpture_03A.jpg',
			   'images/sculptors/sculpture_04A.jpg',
			   'images/sculptors/sculpture_05A.jpg',
			   'images/sculptors/sculpture_06A.jpg',
			   'images/sculptors/sculpture_07A.jpg',
			   'images/sculptors/sculpture_08A.jpg',
			   'images/sculptors/sculpture_09A.jpg',
			   'images/sculptors/sculpture_10A.jpg',
			   'images/sculptors/sculpture_11A.jpg',
			   'images/sculptors/sculpture_12A.jpg'
]).done(function(images){
 //code inside here is run after all images have preloaded
 //images parameter is an array of image objects corresponding to the preloaded images
 //images[0] references the 1st image etc
 	//alert('Image preloading complete!');
})

function imageloaderror(){
	//alert('images failed to load');
}


});

