$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["A passionate B.Tech scholar excelling in academics with an 8.49 SGPA and proficiency in Java, DSA, HTML, and CSS."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     // Retrieve the like count from local storage if it exists
     let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
     let toggleState = 0; // Initialize the toggle state (0 means increment, 1 means decrement)
 
     // Update the like count on page load
     updateLikeCount();
 
     // Handle like button click
     $('#like-button').click(function() {
         if (toggleState === 0) {
             // Increment the like count
             likeCount++;
             // Set the toggle state to 1 (next click will decrement)
             toggleState = 1;
         } else {
             // Decrement the like count
             likeCount--;
             // Set the toggle state back to 0 (next click will increment)
             toggleState = 0;
         }
 
         // Store the updated like count in local storage
         localStorage.setItem("likeCount", likeCount);
         updateLikeCount();
     });
 
     // Your existing code for sticky navbar, scroll-up button, menu/navbar, typing text animation, and owl carousel...
     
     function updateLikeCount() {
         const likeCountElement = document.getElementById("like-count");
         likeCountElement.textContent = likeCount;
     }
 
     // Helper function to handle cookies
     function setCookie(name, value, days) {
         let expires = "";
         if (days) {
             const date = new Date();
             date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
             expires = "; expires=" + date.toUTCString();
         }
         document.cookie = name + "=" + (value || "") + expires + "; path=/";
     }
});

