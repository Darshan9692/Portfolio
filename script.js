$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    })
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings:["a Web Developer","an IT Engineer"],
        typeSpeed:100,
        backSpeed:80,
        loop:true
    });
    var typed = new Typed(".typing-1",{
        strings:["a Web Developer","an IT Engineer"],
        typeSpeed:100,
        backSpeed:80,
        loop:true
    });
})