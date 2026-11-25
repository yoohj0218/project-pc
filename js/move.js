// JavaScript Document

   //메인 비주얼 겔러리
 
    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수 5
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때  (타이머의 동작 상태)
    
    //$('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','60px'); // 버튼의 너비 증가
    $('.btn1 .bar').css('width','100%').css('transition','width 5s');
    
    $('.gallery li p').css('top',430).css('opacity',0);
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 p:eq(0)').delay(1500).animate({top:340, opacity:1},'slow'); //텍스트 애니메이션 동작
    $('.gallery .link1 p:eq(1)').delay(2000).animate({top:380, opacity:1},'slow'); //텍스트 애니메이션 동작
    function moveg(){   //5초마다 호출되는 함수
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
    //$('.gallery li:eq('+ (cnt-1) +')').fadeIn('slow');
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      //$('.mbutton').css('background','#dddddd'); //버튼불다꺼!!
      $('.mbutton').css('width','16px'); // 버튼 원래의 너비
      $('.mbutton .bar').css('width','0').css('transition','none');
      //$('.btn'+cnt).css('background','#fff');//자신만 불켜
      $('.btn'+cnt).css('width','60px');   
      $('.btn'+cnt).find('.bar').css('width','100%').css('transition','width 5s'); 

      $('.gallery li p').css('top',430).css('opacity',0);  //겔러리의 텍스트 위치 초기화
      $('.gallery .link'+cnt).find('p:eq(0)').delay(1500).animate({top:340, opacity:1},'slow'); //해당 이미지의 텍스트 동작!
      $('.gallery .link'+cnt).find('p:eq(1)').delay(2000).animate({top:380, opacity:1},'slow');
       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0 -> 1 2 3 4 5 1 2 3 4 5...
     }
     
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(){  //각각의 버튼 클릭시
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($(this).is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($(this).is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($(this).is('.btn3')){ 
				 cnt=3; 
		  }else if($(this).is('.btn4')){
				 cnt=4; 
		  }else if($(this).is('.btn5')){
				 cnt=5; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      //$('.mbutton').css('background','#ddd'); //버튼 모두불꺼
      $('.mbutton').css('width','16px');
      $('.mbutton .bar').css('width','0').css('transition','none');
      //$('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','60px');
      $('.btn'+cnt).find('.bar').css('width','100%').css('transition','width 5s');
      
      $('.gallery li p').css('top',430).css('opacity',0); //모든 텍스트를 원위치
      $('.gallery .link'+cnt).find('p:eq(0)').delay(1500).animate({top:340, opacity:1},'slow'); //현재 카운트에 맞는 이미지의 텍스트만 동작!
      $('.gallery .link'+cnt).find('p:eq(1)').delay(2000).animate({top:380, opacity:1},'slow');
      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;  //멈춤상태 
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; //동장상태
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){ 

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가   1 2 3 4 5 1 2 3 4 5...
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소  5 4 3 2 1 5 4 3 2 1..
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    //$('.mbutton').css('background','#ddd'); //버튼 모두불꺼
    $('.mbutton').css('width','15');
    $('.mbutton .bar').css('width','0').css('transition','none');
    //$('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','70px');
    $('.btn'+cnt).find('.bar').css('width','100%').css('transition','width 5s'); 

    $('.gallery li p').css('top',430).css('opacity',0);//모든 텍스트 초기화
    $('.gallery .link'+cnt).find('p:eq(0)').delay(1500).animate({top:340, opacity:1},'slow'); //현재 이미지의 텍스트만 동작
    $('.gallery .link'+cnt).find('p:eq(1)').delay(2000).animate({top:380, opacity:1},'slow');
    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });


//PRODUCT 스와이퍼 기능
  var swiper1 = new Swiper('.swiper1', {
      //autoHeight: true, //높이 유동
      //loop: true,  //무한 스와이퍼
      slidesPerView:'auto',  //단수
      spaceBetween: 80,  //단사이 여백
      //freeMode: true,  //터치 만큼 자유롭게 이동
      centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)-짝수일때주로사용
      initialSlide:2,  //최초 보여지는 슬라이드 번호(0~)
      //slidesPerGroup:2,  //한번에 슬라이딩 될 개수
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      
      // navigation: {    //이전/다음 버튼
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      // },
      pagination: {   //페이지 네이션
          el: '.swiper-pagination',
          dynamicBullets: false,
          clickable: true,
      // type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      // scrollbar: {  //하단 스크롤바
      //     el: '.swiper-scrollbar',
      //     hide: true
      // },
      // autoplay: {  //자동
      //     delay: 3000,
      //     disableOnInteraction: false
      // }
  });

//news 스와이퍼 기능
  var swiper2 = new Swiper('.swiper2', {
      //autoHeight: true, //높이 유동
      loop: true,  //무한 스와이퍼
      slidesPerView:'auto',  //단수
      spaceBetween: 50,  //단사이 여백
      //freeMode: true,  //터치 만큼 자유롭게 이동
      centeredSlides: false, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)-짝수일때주로사용
      initialSlide:0,  //최초 보여지는 슬라이드 번호(0~)
      //slidesPerGroup:2,  //한번에 슬라이딩 될 개수
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)

       //navigation: {    //이전/다음 버튼
       //    nextEl: '.swiper-button-next',
       //    prevEl: '.swiper-button-prev',
       //},
      //pagination: {   //페이지 네이션
      //    el: '.swiper-pagination',
      //    dynamicBullets: false,
      //    clickable: true,
      // type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      //},
      // scrollbar: {  //하단 스크롤바
      //     el: '.swiper-scrollbar',
      //     hide: true
      // },
       autoplay: {  //자동
           delay: 3000,
           disableOnInteraction: false
       }
  });

  //R&D이미지갤러리
var rdcnt = 0;  // 이미지의 순서(카운터) 0 1 2 3
  var rdinfo = 0;  //타이머의 정보를 담을 변수(멈춤기능)
  $('.rd_gallery li:eq(0)').fadeIn('slow');  //첫번째 이미지만 보여라
  $('.rd_gallery span').text(rdcnt+1+'/3');   // 1/4를 출력

  function change(){
      rdcnt++;
      if(rdcnt==3){
        rdcnt=0;
      }

      //cnt=1
      $('.rd_gallery li').hide();   //모든 이미지를 안보이게한다.
      $('.rd_gallery li:eq('+rdcnt+')').fadeIn('slow'); //cnt에 해당이미지를 보여라  
      $('.rd_gallery span').text(rdcnt+1+'/3');  //2/4
  }

  info = setInterval(change, 3000);  //3초마다 함수를 호출/정보를 info변수에 담아라
  //토글버튼만들기
  // $('.btn').toggle(function(e){  //홀수번째 클릭하면->stop
  //     e.preventDefault();

  //     clearInterval(info);  //사이코패스 살인마  -> 타이머를 중지
  //     $(this).text('play');  //버튼의 텍스트 play 변경
  // },function(e){                   //짝수번째 클릭하면->play
  //     e.preventDefault(); 

  //     info = setInterval(change, 3000);  //부활(타이머재동작)
  //     $(this).text('stop');  // 홀수번째 클릭하면->stop
  // });


