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

    // Code that will run when left or right button are clicked

    //Code fo left button
    $("#left-button").click(function(){
		srcMain = goLeft(srcMain);
		image.src = srcStart + srcMain + srcEnd;
	});

	// Code for right button
	$("#right-button").click(function(){
		srcMain = goRight(srcMain);
		image.src = srcStart + srcMain + srcEnd;
	}); 

    // code to write the events when arrow keys are pressed
	window.addEventListener("keydown", onkeypress, false);
	    function onkeypress(key){

	      	//code when left key is pressed
	        if(key.keyCode == "37"){
	        	srcMain = goLeft(srcMain);
	        }

	        // code when right key is pressed
	        if(key.keyCode == "39"){
	        	srcMain = goRight(srcMain);
	        }
	        image.src = srcStart + srcMain + srcEnd; 
	    }

    // image source is made finally
    image.src = srcStart + srcMain + srcEnd;
});

//Function to turn the page left
function goLeft(srcMain){
	//first of all get what is the src value of that image
  	if(srcMain == 1){
  		//do nothing
  	}
  	else{
  		return srcMain = srcMain - 1;
  	}
}

// Function to turn the page toward right
function goRight(srcMain){
	if(srcMain == finalPage){
  		//do nothing
  	}
  	else{
  		return srcMain = srcMain + 1;
  	}
}