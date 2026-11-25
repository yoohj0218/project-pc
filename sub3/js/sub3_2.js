$('.api_area1 img').css('opacity',1); //이미지에 투명도 애니메이션 동작
$('.api_area1 .btn li:eq(0) a').css('background','#0e3057').css('color','#fff').children().css('filter','grayscale(100%)');  //첫번째버튼 활성화

//$('.text li:eq(0)').fadeIn(2000); //첫번째 텍스트만 보여라

$('.api_area1 .btn li a').click(function(e){  //각각의 버튼을 클릭하면
    e.preventDefault();
    var ind = $(this).parent().index();  //클릭한 버튼에 해당하는 index를 할당한다(0,1,2,3)
    console.log(ind);
    

    $('.api_area1 img').attr('src','./images/sub2/api_0'+(ind+1)+'.jpg');  //클릭한 버튼에 해당하는 이미지로 교체한다
    $('.api_area1 img').hide().fadeIn('fast');  //애니메이션 페이드 효과

    $('.api_area1 .btn li a').css('background','#fff').css('color','#333').children().css('filter','grayscale(0)');  //클릭할때마다 비활성화
    $(this).css('background','#0e3057').css('color','#fff').children().css('filter','grayscale(100%)');  //클릭한 자신의 버튼만 활성화

    //$('.text li').hide();  //모든 텍스트를 안보이게 해라
    //$('.text li:eq('+ind+')').fadeIn(2000);  //클릭한 해당index에 맞는 텍스트만 보여라
});