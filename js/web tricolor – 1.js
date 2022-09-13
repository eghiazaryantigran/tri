$(function(){
    
    $('.owl-theme').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
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
        }
    });


    $('.owl-testmonial').owlCarousel({
        loop:true,
        margin:200,
        nav:true,
        navText: ['<img src="./img/prev.png">', '<img src="./img/next.png">'],

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
        }
    })




$('.myBtn').click(function() {
    $('.moretext').toggle();
    if ($('.myBtn').text() == "READ & LEARN MORE") {
      $(this).text("SHOW LESS")
    } else {
      $(this).text("READ & LEARN MORE")
    }
});



$('.myBtn2').click(function() { 
    $('.moretext2').toggle();

    if ($('.myBtn2').text() == "LEARN MORE") {
      $(this).text("SHOW LESS")
    } else {
      $(this).text("LEARN MORE")
    }
});


$(".thumb-img").click(function(){
    var _img=$(this).attr("src");
    $(".big-img").attr("src",_img);
})


})



