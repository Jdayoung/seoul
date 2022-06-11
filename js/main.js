
$(function(){ //사이트에서 1번만 사용!! 로드후 실행이라는 뜻
    // [선택된 영역의 사이트 값] 으로 [새창] 이동

    $('#langBtn').click(function(){
        // console.log(111)
        var url = $('#langList').val();
        // console.log(url); 선택된거 확인
        window.open(url, "_blank"); 
        //blank : 새창으로 열기

        // a >> target="_blank" : a 태그에 넣으면 링크된 주소가 새창으로 열림
    })
    
    // 메인슬라이드
    var slide01 = new Swiper(".top_area .swiper", {
       
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".top_area .num",
            type: "fraction",
          },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        
       
    });
    // 탑영역
    $('.top_area .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.top_area .play').css({display:'block'});
        slide01.autoplay.stop();
    }) // 정지버튼 누르면 정지
    $('.top_area .play').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.top_area .pause').css({display:'block'});
        slide01.autoplay.start();
    }) // 다시 플레이


    




    var slide02 = new Swiper(".bottom_area .swiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
       
        loop: true,
        pagination: {
            el: ".bottom_area .num",
            type: "fraction",
          },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        
    });
    // 바텀영역
    $('.bottom_area .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.bottom_area .play').css({display:'block'});
        slide02.autoplay.stop();
    }) // 정지버튼 누르면 정지
    $('.bottom_area .play').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.bottom_area .pause').css({display:'block'});
        slide02.autoplay.start();
    }) // 다시 플레이


    //나오려면 결국 active 라는게 .slide에 있어야한다. > 그래야 나옴
    $('.sc_show h3').click(function(e){
        e.preventDefault();
        //이두개가 열리고 닫히는 소스
        $('.slide').removeClass('active')
        $(this).parent('.slide').addClass('active');


        if($(this).parent('.slide').hasClass('top_area')){
            //탑
            slide02.autoplay.stop();
            // slide01.autoplay.start(); //탑
            if($('.top_area .pause').css("display") == 'none'){ //일시정지일때
                slide01.autoplay.stop();
            }else {
                slide01.autoplay.start();
            }


        }else{
            //바텀을 눌렀을때
            slide01.autoplay.stop();
            // slide02.autoplay.start(); //바텀
            if($('.bottom_area .pause').css("display") == 'none'){ //일시정지일때
                slide02.autoplay.stop();
            }else {
                slide02.autoplay.start();
            }
        }

    })

    // 애초에 키자마자 시민참여는 정지되어있어야함
    slide02.autoplay.stop();
    
    
    
    var slide03 = new Swiper(".mainslide", {
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".mainslide .num",
            type: "fraction",
          },
        navigation: {
            prevEl: ".mainslide .prev",
            nextEl: ".mainslide .next",
        },
    
    });

    $('.mainslide .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.mainslide .play').css({display:'block'});
        slide03.autoplay.stop();
    }) // 정지버튼 누르면 정지
    $('.mainslide .play').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.mainslide .pause').css({display:'block'});
        slide03.autoplay.start();
    }) // 다시 플레이

    
    $('.dept1').click(function (e) {
        e.preventDefault();
        $('.sub').stop().slideUp();
        $(this).siblings('.sub').stop().slideToggle(200);
    
        if ($(this).hasClass('on')) { //열려있는경우
            $('.dept1').removeClass('on');
        } else {
            $('.dept1').removeClass('on');
            $(this).addClass('on')
        }
    })
    
    $('body').click(function(e){
        // 내가 클릭한 영역이 f_gnb가 아닐때,
        if( !$('.f_gnb').has(e.target).length ) {
        // 닫아라
            $('.sub').stop().slideUp();
        }
    });

    $('.sub li:first-child a').keydown(function(event){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9) {
            if(event.shiftKey) {
                $('.sub').stop().slideUp();
            }
        }

    })
    $('.sub li:last-child a').keydown(function(event){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9) {
            if(!event.shiftKey) {
                $('.sub').stop().slideUp();
            }
        }
    })


    $('.stop').click(function () {
        mainslide.autoplay.stop();
    })
    $('.left_tab').click(function () {
        $('left_tab').css("background-color", "#0158a8;")
    })
}) // 지우지마세요

