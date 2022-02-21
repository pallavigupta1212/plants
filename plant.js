
$(function () {
    $()
    // CLICK FUNCTION=========
    $(".header .nav ul li a").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var scrolt = $(href).offset().top + 2;
        $("html,body").animate({
            scrollTop: scrolt

        }, 1200)
    });

    // =================SCROLLING FUNCTION==========
    var navi = ["#home", "#planters", "#indoor-plants", "#choose", "#feedback", "#offers", "#featured-plants", "#tm", "#hash"]
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        //   alert(sc);


        var home = $(navi[0]).offset().top;

        var planters = $(navi[1]).offset().top;


        var indoor = $(navi[2]).offset().top;
        //   alert(about)
        var choose = $(navi[3]).offset().top;
        var feedback = $(navi[4]).offset().top;
        var offers = $(navi[5]).offset().top;
        var featured = $(navi[6]).offset().top;
        var tm = $(navi[7]).offset().top;
        var hash = $(navi[8]).offset().top;

        if (sc >= home && sc < planters) {
            $(".header .nav ul li a").removeClass("active");
            $(".header .nav ul li a").eq(0).addClass("active");
        }
        else if (sc >= planters && sc < indoor) {
            $(".header  .nav ul li a").removeClass("active");
            $(".header.nav ul li a").eq(1).addClass("active");
        }
        else if (sc >= indoor && sc < choose) {
            $(".header.nav ul li a").removeClass("active");
            $(".header.nav ul li a").eq(2).addClass("active");
        }
        else if (sc >= choose && sc < feedback) {
            $(".header  .nav ul li a").removeClass("active");
            $(".header  .nav ul li a").eq(3).addClass("active");
        }
        else if (sc >= feedback && sc < offers) {
            $(".header .nav ul li a").removeClass("active");
            $(".header    .nav ul li a").eq(4).addClass("active");
        }
        else if (sc >= offers && sc < featured) {
            $(".header .nav ul li a").removeClass("active");
            $(".header .nav ul li a").eq(5).addClass("active");
        }
        else if (sc >= featured && sc < tm) {
            $(".header  .nav ul li a").removeClass("active");
            $(".header  .nav ul li a").eq(6).addClass("active");
        }
        else if (sc >= tm && sc < hash) {
            $(".header  .nav ul li a").removeClass("active");
            $(".header   .nav ul li a").eq(7).addClass("active");
        }
        else if (sc >= hash) {
            $(".header .nav ul li a").removeClass("active");
            $(".header    .nav ul li a").eq(4).addClass("active");
            // alert("hey")
        }

    });



    $(function () {
        $(".bars").click(function () {
            $(".header .nav ul").slideToggle();
        });
        // ===========HEADER BARS========

        $(".p1,.p2,.p3,.p4,.maintenance,.improve,.banner").mouseover(function () {
            $(".m1").addClass("cover_1");
            // $(this).append(" <div class='cover ''></div>");
        })
        $(".p1,.p2,.p3,.p4,.maintenance,.improve,.banner").mouseout(function () {
            $(".m1").removeClass("cover_1");
        })

        var start = 0;
        $(window).scroll(function () {
            var st = $(window).scrollTop();
            //  alert(st);
            if (st > start) {
                $(".header").addClass('headerhide');

            }
            else {
                $(".header").removeClass('headerhide');
            }
            start = st;
        })


        // =====contact effect
        $(".ctr").click(function () {
            // alert("hi");
            $(".cont").toggleClass("so");
        })
        $(".wbr").click(function () {
            // alert("hi");
            $(".web ").toggleClass("so");
        })



    })//ready ends

})