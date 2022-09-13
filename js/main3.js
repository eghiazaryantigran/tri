$(document).ready(function(){
    $(".owl-theme").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        margin:50,
        nav:true,
        dots:false,
        navText: ['<img src="./img/prev.png">', '<img src="./img/next.png">'],
autoplayHoverPause:false,

    });

    $(".thumb-img").click(function(){
        var _img=$(this).attr("src");
        $(".big-img").attr("src",_img);
    })




    
  });
  
