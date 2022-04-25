if (window.location.pathname === "/"){
    document.getElementById("home").classList.add("current-menu-item");
    document.getElementById("logo").src = "/images/mr-bean-logo-index.png";
    document.getElementById("navbar").style.marginBottom = "0px";
}

if (window.location.pathname === "/about"){
    document.getElementById("about").classList.add("current-menu-item");
}

if (window.location.pathname === "/episode-guide"){
    document.getElementById("episode-guide").classList.add("current-menu-item");
}

if (window.location.pathname === "/gallery"){
    document.getElementById("gallery").classList.add("current-menu-item");
}