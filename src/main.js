//Select imgs, buttons and bg
var displayedImg = document.querySelector('#displayed__img');
var background = document.querySelector('#background');
var prevButton = document.querySelector('#prev-button');
var nextButton = document.querySelector('#next-button');

var thumbnails = Array.from(document.querySelectorAll('.img-thumbnail')); //select and take all images to array
var displayed = document.querySelector('.displayed'); //select displayer
var currentIndex = 0; // Variable to store the index of the currently displayed image

//show image in your display
function displayImage(index) {
    displayedImg.src = thumbnails[index].src;
    displayed.style.display = 'block';
    background.style.display = 'block';
}

// Add a event listener for each mini img
thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
        currentIndex = index;
        displayImage(currentIndex);
    });
});

// Event listener prev button
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    displayImage(currentIndex);
});

// Event listener next button
nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    displayImage(currentIndex);
});

// Close img and bg
background.addEventListener('click', function() {
    // Hide background and displayed img 
    displayed.style.display = 'none';
    this.style.display = 'none';
});
