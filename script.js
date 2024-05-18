let opposite = "D<br>A<br>R<br>K";

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (opposite === "L<br>I<br>G<br>H<br>T") {
        opposite = "D<br>A<br>R<br>K";
    } else if (opposite === "D<br>A<br>R<br>K") {
        opposite = "L<br>I<br>G<br>H<br>T"
    }

    document.getElementById("theme").innerHTML = opposite;

    // Save the dark mode preference to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

function menuActive() {
    let state = document.getElementById("menu");
    state = state.classList.contains("active");
    let state3 = document.getElementById("cont2");
    state3 = state3.classList.contains("container2");

    if (state === true && state3 === true) {
        var container = document.getElementById("cont2");
        var opacity = document.getElementById("container");
        var menuo = document.getElementById("menu");
        container.classList.toggle("container2");
        opacity.classList.toggle("container2");
        menuo.classList.toggle("active");
    } else {
        var menuo = document.getElementById("menu");
        var opacity = document.getElementById("container");
        menuo.classList.toggle("active");
        opacity.classList.toggle("blur");
    }

    let state1 = document.getElementById("container");
    state1 = state1.classList.contains("blur");

    if (state1 === true) {
        var opacity = document.getElementById("container");
        opacity.classList.toggle("blur");
    }

    localStorage.setItem("menuActive", document.getElementById("menu").classList.contains("active"));
    localStorage.setItem("cont2Active", document.getElementById("cont2").classList.contains("container2"));
}

function projectsActive() {
    var container = document.getElementById("cont2");
    var opacity = document.getElementById("container");
    container.classList.toggle("container2");
    opacity.classList.toggle("container2");
    opacity.classList.toggle("blur");

    // Save the container state to localStorage
    localStorage.setItem("cont2Active", container.classList.contains("container2"));
}

window.onload = function() {
    var darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting === "enabled") {
        document.body.classList.add("dark-mode");
        opposite = "L<br>I<br>G<br>H<br>T";
    } else {
        opposite = "D<br>A<br>R<br>K";
    }
    document.getElementById("theme").innerHTML = opposite;

    var menuActive = localStorage.getItem("menuActive") === "true";
    var cont2Active = localStorage.getItem("cont2Active") === "true";

    if (menuActive) {
        document.getElementById("menu").classList.add("active");
        document.getElementById("container").classList.add("blur");
    }
    if (cont2Active) {
        document.getElementById("cont2").classList.add("container2");
        document.getElementById("container").classList.add("container2");
    }
}