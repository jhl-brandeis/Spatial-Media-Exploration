/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// fullscreenTarget.addEventListener('click', event=> {
//     try {
//         fullscreenTarget.requestFullscreen();
//     } catch (error) {
//         console.log(error);
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    // Enable fullscreen on image click
    document.querySelectorAll('.fullscreenTarget').forEach(img => {
        img.addEventListener('click', () => {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.webkitRequestFullscreen) {
                img.webkitRequestFullscreen();
            }
        });
    });
});