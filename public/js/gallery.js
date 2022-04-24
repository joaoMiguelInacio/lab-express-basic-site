const galleryImages = [
  "https://images.cosmopolitan.de/104241-was-macht-mr-bean-eigentlich-heute,id=8136419d,b=cosmopolitan,w=1100,rm=sk.webp",
  "https://images-na.ssl-images-amazon.com/images/I/71-vStgKutL._RI_.jpg",
  "https://i.ytimg.com/vi/u-c5Ojnpo1w/maxresdefault.jpg",
  "https://i.ytimg.com/vi/iLPuP12C5gY/maxresdefault.jpg",
  "https://bloody-disgusting.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-08-at-8.36.10-AM.jpg",
];

const bigImage = document.querySelector(".big-image");
const smallImages = document.querySelector(".small-images");

for (let i = 0; i < galleryImages.length; i++) {
  let newSmallImage = document.createElement("img");
  newSmallImage.setAttribute("src", galleryImages[i]);
  smallImages.appendChild(newSmallImage);
  smallImages.addEventListener("click", (image) => {
    bigImage.setAttribute("src", image.target.src);
  });
}
