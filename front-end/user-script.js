﻿//Navigation Bar----------------------------------------------------------
const nav = document.querySelector(".nav");
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
    userProf2 = document.querySelector(".userprofile-visible");

    searchIcon.addEventListener("click", () => {
        x
        if (window.matchMedia("(max-width: 768px)").matches) {
            userProf2.style.display = "none";
        } else {
            userProf2.style.display = "flex";
        }

        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
        if (nav.classList.contains("openSearch")) {
            searchIcon.classList.replace("uil-search", "uil-times")
            if (userProf2.style.display === "flex") {
                userProf2.style.display = "none";
            }
            return;
        }
        searchIcon.classList.replace("uil-times", "uil-search")
    });

    navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");
        searchIcon.classList.replace("uil-times", "uil-search")

    });
    navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
    });

//NavLink
const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {

            links.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                }
            });

            link.classList.add('active');
        });
    });


//Carousel----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');

    nextDom.addEventListener("click", function (event) {
        event.preventDefault();
        showSlider('next');
    });

    prevDom.addEventListener("click", function (event) {
        event.preventDefault();
        showSlider('prev');
    });

    let timeAutoNext = 7000;
    let autoSlideInterval = setInterval(autoSlide, timeAutoNext);

    function autoSlide() {
        nextDom.click();
    }

    function clearAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(autoSlide, timeAutoNext);
    }

    function resetAutoSlide() {
        clearAutoSlide();
        startAutoSlide();
    }

    function showSlider(type) {
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
        } else {
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev');
        }

        resetAutoSlide();
    }
});

// Filter Tab----------------------------------------------------------
var tabs = document.querySelectorAll(".tabs_wrap ul li");
var all = document.querySelectorAll(".post-box");
var action = document.querySelectorAll(".action");
var adventure = document.querySelectorAll(".adventure");
var comedy = document.querySelectorAll(".comedy");
var drama = document.querySelectorAll(".drama");
var family = document.querySelectorAll(".family");
var fantasy = document.querySelectorAll(".fantasy");
var history_ = document.querySelectorAll(".history");
var horror = document.querySelectorAll(".horror");
var mystery = document.querySelectorAll(".mystery");
var romance = document.querySelectorAll(".romance");
var scifi = document.querySelectorAll(".scifi");
var sport = document.querySelectorAll(".sport");
var thriller = document.querySelectorAll(".thriller");

function hideAllExcept(category) {
    [all, action, adventure, comedy, drama, family, fantasy, history_, horror, mystery, romance, scifi, sport, thriller].forEach((element) => {
        if (element !== category) {
            element.forEach((item) => {
                item.style.display = "none";
            });
        } else {
            element.forEach((item) => {
                item.style.display = "block";
            });
        }
    });
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // If clicked tab is "All", deactivate other tabs
        if (tab.getAttribute("data-tabs") === "all") {
            tabs.forEach((t) => {
                if (t !== tab && t.classList.contains("active")) {
                    t.classList.remove("active");
                }
            });
        } else {
            // Toggle the "active" class for the clicked tab
            tab.classList.toggle("active");
        }

        // Get all active categories
        var activeCategories = [];
        tabs.forEach((t) => {
            if (t.classList.contains("active")) {
                activeCategories.push(t.getAttribute("data-tabs"));
            }
        });

        // Update the display based on the active categories
        all.forEach((item) => {
            if (activeCategories.length === 0 || activeCategories.every(category => item.classList.contains(category))) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// User Profile----------------------------------------------------------
const pendingSpan = document.getElementById('pendingCount');
const completeSpan = document.getElementById('completeCount');
const tbodyPending = document.getElementById('pending-movies');
const tbodyFinish = document.getElementById('finished-movies');


// Count the number of <tr> elements inside the tbody
const pendingCount = tbodyPending.getElementsByTagName('tr').length;
const completeCount = tbodyFinish.getElementsByTagName('tr').length;

// Update the inner text of the spans with the counts
pendingSpan.textContent = pendingCount;
completeSpan.textContent = completeCount;



//Movie Review----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const postBtn = document.querySelector('.review-postbtn');
    const endPostContainer = document.querySelector('.endpost-container');
    const starWidget = document.querySelector('.star-widget');
    const editBtn = document.querySelector('.edit');

    // Event listener for post button click
    postBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        starWidget.style.display = "none"; 
        endPostContainer.style.display = "block";
    });

    // Event listener for edit button click
    editBtn.addEventListener("click", function (event) {
        event.preventDefault();
        starWidget.style.display = "block"; 
        endPostContainer.style.display = "none";
    });
});