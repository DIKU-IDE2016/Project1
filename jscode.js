var img = document.createElement("img");
img.src = "http://www.greenbookblog.org/wp-content/uploads/2013/08/Martin-Dec-2010.jpg";
var src = document.getElementById("placehere");
src.appendChild(img);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal(img, title) {
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}