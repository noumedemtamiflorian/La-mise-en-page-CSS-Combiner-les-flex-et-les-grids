//Grab the images of the gallery
let galImages = document.querySelectorAll("#gallery img");
//Add onClick event on each image
galImages.forEach(image => {
    image.addEventListener('click', showGalleryPict, false);
});
//Grab overlay section
let overlay = document.getElementById("overlay");
//add click event on overlay
overlay.addEventListener('click', closeGalimg, false);
//showGalleryPict() function
function showGalleryPict(e){
    //grab image in overlay
    let img = overlay.querySelector('img');
    //change the src of the image
    img.src = e.target.src;
    //show the overlay
    overlay.classList.toggle('visible');
}

//closeGalImg function
function closeGalimg(e){
    overlay.classList.toggle('visible');
}