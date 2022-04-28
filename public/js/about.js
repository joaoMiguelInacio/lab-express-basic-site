let slideIndex = 1,
    arrayOfSlides = document.getElementsByClassName("about-slides"),
    myTimeout;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  if (n > arrayOfSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {slideIndex = arrayOfSlides.length}
  for (let i = 0; i < arrayOfSlides.length; i++) {
    arrayOfSlides[i].style.display = "none";  
  }
  arrayOfSlides[slideIndex-1].style.display = "block";  
}

slideIndex = 0;
carousel();

function carousel() {
  for (let i = 0; i < arrayOfSlides.length; i++) {
    arrayOfSlides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > arrayOfSlides.length) {
    slideIndex = 1;
  }
  arrayOfSlides[slideIndex-1].style.display = "block";
  myTimeout = setTimeout(carousel, 15000);
}

function clearTimeOut () {
  window.clearTimeout(myTimeout);
  myTimeout = setTimeout(carousel, 15000);
}