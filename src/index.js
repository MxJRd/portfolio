import $ from 'jquery';
/***************************************************************************** */
function beginScroll() {
    $('.nav-item').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".about-title-container").offset().top
        }, 825);
    });
}
/***************************************************************************** */
// function changelinkedinImgHtml(){
//     return $(`.linkedin`).html(`<p >Click worked</p>`)
// }

function linkedinImgClick() {
    $(`.linkedinImg`).on('click', function () {
        // changelinkedinImgHtml();
        window.open("https://www.linkedin.com/");
    })
}
/***************************************************************************** */
// function changeGithubImgHtml(){
//     return $(`.github`).html(`<p >Click worked</p>`)
// }

function githubImgClick() {
    $(`.githubImg`).on('click', function () {
        // changeGithubImgHtml();
        window.open("https://www.github.com/")
    })
}
/***************************************************************************** */
// function changeImgHtml(){
//     return $(`.email`).html(`<p >Click worked</p>`)
// }

function emailImgClick() {
    $(`.emailImg`).on('click', function () {
        // changeImgHtml();
        window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
    })
}
/***************************************************************************** */
$(document).ready(function () {
    console.log("Index.js Loaded");
    beginScroll();
    linkedinImgClick();
    githubImgClick();
    emailImgClick();
});


