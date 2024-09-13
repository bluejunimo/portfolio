var lightbox;

$(document).ready(function(){
    var page = null;
    lightbox = new SimpleLightbox('.image-gallery a', { /* options */ });

    // check if subpage, and get req content
    var params = new URLSearchParams(window.location.search);
    console.log("params");
    page = params.get('page');

    // check if button, and get req content
   $("body").on("click", "#main-links-wrapper a, #projects a", function(e){
        e.preventDefault();
        $(".site-content").stop(true, true).animate({"opacity": 0}, 250);
        page = $(this).attr('href');
        loadPage(page);
    });

    console.log(page);

    // if no page is specified, fill in home content
    if(!page) {
        page = "home.html";
        //window.location.href = "#../index.html";
    }

    loadPage(page);
    
});

function loadPage(page) {
    // load page
    setTimeout(function(){
        $(".site-content").stop(true, true).animate({"opacity": 0}, 1);
        $("#site-content").load(page, function() {
            $(".site-content").stop(true, true).animate({"opacity": 1}, 500);
            lightbox = new SimpleLightbox('.image-gallery a', { /* options */ });
            document.getElementById('site-content').scrollIntoView();
        });
    }, 500);
}



// setInterval(() => {
//     if (document.querySelector(".logo img:hover") != null) {
//         console.log("hovered");
//         document.getElementById('logo-image').src = 'img/logo-hover.png';
//     }
//     else {
//             console.log("not hovering anymore");
//             document.getElementById('logo-image').src = 'img/logo.png';

//     }

//     // // TODO:
//     // // if the nav is completely in view, make it sticky at the bottom of it
//     // // else, keep it relative
//     // if(bigger && document.getElementById(nav).bottomHeight >= viewport_height) {
//     //     document.getElementById('nav').position = 'sticky';
//     // }
// }, 10);


// TODO
// goal: a one-page website that just replaces the content page with the new content
// SPA (single page application)
var page;

// functions tied to links that go to site-contents
// site-contents replaced by new content stored in a different html page?
function fillPage(page) {
    // clear content
    document.getElementById('site-content').innerHTML = "";

    // get content from other page (POST req?)
    // TODO ^
    var newHTML = getHTML(page);

    // insert html
    document.getElementById('site-content').innerHTML = newHTML;

    // done? (go down page?)
}