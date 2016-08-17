// code that can be executed before the page loads


// wait for the document to get ready
$(document).ready(function() {
	//totalnumber of pages
	finalPage = bookData.Book.totalPages;
	// code to create a image tag with default cover page.
	var image = document.createElement('img');
	image.id = "mainImage";
	image.style.border = "2px solid black";
	var srcStart = "../bookPics/";
	var srcMain = 1;
	var srcEnd = ".png";
    var x = document.getElementById('imageDiv');
    x.appendChild(image);

    // code to write the events when arrow keys are pressed
	window.addEventListener("keydown", onkeypress, false);
	    function onkeypress(key){

	      	//code when left key is pressed
	        if(key.keyCode == "37"){

	          	//first of all get what is the src value of that image
	          	if(srcMain == 1){
	          		//do nothing
	          	}
	          	else{
	          		srcMain = srcMain - 1;
	          	}

	        }
	        // code when right key is pressed
	        if(key.keyCode == "39"){
	          	if(srcMain == finalPage){
	          		//do nothing
	          	}
	          	else{
	          		srcMain = srcMain + 1;
	          	}
	        }
	        image.src = srcStart + srcMain + srcEnd; 
	    }

    // image source is made finally
    image.src = srcStart + srcMain + srcEnd;
});