'use strict';

// 1. gnb 마우스 오버, 포커스 시 밑줄
$(function() {
	$('.gnb li a').on('mouseenter focus', function() {
        var bar = $(this).position().left; // 각각 gnb li a 의 position left값을 bar 변수에 저장
        var width = $(this).width(); // 각각 gnb li a 의 width값을 width 변수에 저장
        $('span.bar').css({'left': bar + 'px', 'width': width + 'px', 'opacity': 1}); // span.bar 의 css를 각각의 변수값으로 변경하고 opacity 변경
    });
    $('.gnb li a').on('mouseleave', function() {
        $('span.bar').css({'left': 0, 'width': 0, 'opacity': 0}); // 원래대로 숨겨줌
    });
});

//2. circle 애니메이션
$(function() {
	aniCircle();
	$(window).scroll(aniCircle);
		function aniCircle() { //aniCircle  함수명 지어줌
			$('.circleBox').each(function () {
				var circleBox = $(this).offset().top; // circleBox: circleBox 의 위치
				var topOfWindow = $(window).scrollTop(); //topOfWindow: 스크롤바의 위치
				var animate = $(this).data('animate');
				if (circleBox < topOfWindow + $(window).height() && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: 4.71,//초기 각도
						value: 1,//차트의 진행률 1=100% 기준
						size: 700,// 사이즈 px 기준
						thickness: 35,//두께
						emptyFill: "#fff",//빈 그래프 배경색
						fill: {color: '#f5f5f5'},//그래프 색상
                        animation:{ duration: 2000, easing: "circleProgressEasing" }, //애니메이션 진행 속도
					});
				}
			});
		}		
}); 

//3. 스크롤 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

//4. 배경색 변경
$(window).on('scroll resize', function() {
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor() {
        if (scrollTop > 1400) { 
            $('body').addClass('on');
        }else {
            $('body').removeClass('on');
        }
        if (scrollTop > 2700) { 
            $('body').removeClass('on');
        }
    }
});

//5. 햄버거 메뉴
$(function() {
	$('.menuOpen button.open').on('click', function() {
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function() {
        $('.menuOpen .menuWrap').removeClass('on');
    });
});