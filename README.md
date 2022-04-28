# Bulding an Express basic website with [Alice](https://github.com/alice101001011)

## Introduction

The instructions started by asking us to pick a person we admire and to build a website that shared some basic information about them. 

Instead, I was lucky to be paired with someone I admire to complete the task at hand and that person was [Alice](https://github.com/alice101001011).

Together, we worked on solving [the lab](https://github.com/ironhack-labs/lab-express-basic-site).

## Requirements

We had to use `express`, build the routing logic with the built-in app routing methods, and serve static content for every request.

To meet the requirements of the lab the website should have (at least) 3 pages:

1. A **Home** page, that welcomes the visitor and links to the other pages on the website.
2. An **About** page, that shares some basic information about the person.
3. A **Works** page, where you showcase some of the work of the person you chose.
4. Bonus: A **Photo Gallery** page, displaying some pictures of the person/their work.

## The Home page

Only two things could have brought an user to our website: Mr. Bean or the Teddy. So we had to include them both in the home page! 

However, the coolest thing in this page has to be navigation bar that will be present in all pages without the extensive code thanks to Handlebars.

```
{{> navigation}}
```

That is not what makes it impressive but this:

```
/* As in nav-details.js: */
if (window.location.pathname === "/"){
    document.getElementById("home").classList.add("current-menu-item");
    document.getElementById("logo").src = "/images/mr-bean-logo-index.png";
    document.getElementById("navbar").style.marginBottom = "0px";
}

/* With a little help from styles.css: */
nav a:hover {
  border-bottom: 4px solid;
}

.current-menu-item {
  color: rgb(255, 122, 144);
  border-bottom: 4px solid rgb(255, 122, 144);
}
```

Yes! The items change on hovering and change again as you move through the pages :exploding_head:

![](/public/images/mr-bean-website-page1.png)

## The About page

We know the Navigation bar is awesome in itself but lets now try to look past that!

On the about page, we decided to challenge ourselves into building an automatic slideshow.

But don't worry if you didn't have your reading glasses ready and you couldn't finish reading when the slide moved to the next one!

You can move back and forth manually as well using the < > on the side of the slide and the timer to change slides resets everytime you click one of those!

Check the whole logic at [about.js](https://github.com/joaoMiguelInacio/lab-express-basic-site/blob/master/public/js/about.js)

![](/public/images/mr-bean-website-page2.png)

## The Works page

This was a very straightforward and easy section with a boring table and tons of text, at least for a little while. 

Is there even a limit to what one can do with JavaScript and still make it look so simple with Handlebars?

```
<div class="card-grid">
{{#each episodes}}
  {{> episodesCards this}}
{{/each}}
</div>
```

If you are curious or just a fellow :nerd_face:, check the full code responsible for flipping the cards [here](https://github.com/joaoMiguelInacio/lab-express-basic-site/blob/master/public/js/episode-cards.js)!


![](/public/images/mr-bean-website-page3.png)

## The Photo Gallery page

Without any instructions on how to complete this section, we just had to, again, try something new :persevere:

Starting from almost no code in the [gallery.hbs](https://github.com/joaoMiguelInacio/lab-express-basic-site/blob/master/views/gallery.hbs) file, using JavaScript to do some DOM manipulation the result is as follows:

![](/public/images/mr-bean-website-page4.png)

```
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
```
