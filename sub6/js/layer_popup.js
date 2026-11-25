
     
      $('.openBtn').on('click', function(e){  //각각의 팝업열기 버튼을 클릭하면
          e.preventDefault();
          
          $(this).parent().next('.big').fadeIn('slow');  //클릭한 해당 확대 팝업창을 연다
          $('.box').show(); //모달박스도 연다
      });
     
     $('.closeBtn, .box').on('click', function(e){  //닫기버튼,모달박스를 클릭하면
          e.preventDefault();

          $('.big').fadeOut('fast'); //확대 팝업창을 닫아라
          $('.box').hide(); //모달박스 닫기
     });


