// redirect.js
document.addEventListener("DOMContentLoaded", function () {
    // hide content
    document.body.style.opacity = "0";

    // Check if the current page is about.html
    var currentPage = window.location.pathname.split("/").pop();
    if (currentPage !== "index.html") {
        // Redirect to index.html with the appropriate query parameter
        currentPage = currentPage.split(".")[0];
        console.log(currentPage);
        console.log("REDIRECTING NOW");
        window.location.href = "../index.html?page=project/" + currentPage + ".html";
    }
});
