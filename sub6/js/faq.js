// JavaScript Document

	var article = $('.faq .article');  //모든 질문 답변 리스트 li
	article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>'); //모든 li의 질문에 아래방향의 아이콘 삽입
    $('.faq .article:first').find('.a').slideDown(100); //첫번째 li의 답변만 열어라
    $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>'); //첫번재 li의 질문에 위쪽방향 아이콘 변경
	
	$('.faq .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list >li 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){  //홀수번째 클릭 시 -> 모두열기
        e.preventDefault(); 
        article.find('.a').slideDown(100);  //모든 답변을 열어라
        article.removeClass('hide').addClass('show');  //show클래스 변경
        article.find('span').html('<i class="fas fa-chevron-up"></i>');  //위쪽방향 아이콘 변경
        $(this).html('모두닫기<i class="fa-solid fa-angles-up"></i>');
  },function(e){    //짝수번째 클릭시 -> 모두닫기
        e.preventDefault(); 
        article.find('.a').slideUp(100);  //모든 답변을 닫아라
        article.removeClass('show').addClass('hide');  //모든 클랙스 hide로 변경
        article.find('span').html('<i class="fas fa-chevron-down"></i>');  //아래방향 아이콘 변경
        $(this).html('모두열기<i class="fa-solid fa-angles-down"></i>');
  });



