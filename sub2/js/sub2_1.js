//console.log('sub2_1.js 연결 성공');
    //'./product.html?pname=베이스'
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출



   //ajax 처리

   $.ajax({
       url: './js/sub2_1.json',
       dataType: 'json',
       success: function(data){
           var useData = data.sam; //useData->모든상품 리스트
           
           function dataPrint(arr){  //해당 상품 객체를 출력한다.
               
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       //var $Price = arr[i].Price;
                       //var $Descript = arr[i].Descript;
                       var $Image = arr[i].Image;
                       var $Category = arr[i].Category;

                       //$Price = $Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  //천단위 , 처리

                        var categoryClass = "";

                        if($Category == "전문의약품"){
                            categoryClass = "prescription";
                        }else if($Category == "일반의약품"){
                            categoryClass = "general";
                        }else if($Category == "건강기능식품"){
                            categoryClass = "health";
                        }else if($Category == "의료기기"){
                            categoryClass = "medical";
                        } 

                       txt+='<li>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<dl>';
                       txt+='<dt class="'+categoryClass+'">'+$Category+'</dt>'; 
                       txt+='<dd>'+$Name+'</dd>';
                       //txt+='<dd>'+$Descript+'</dd>';
                       txt+='</dl>';
                       txt+='<a href="#" class="pop_open"><i class="fa-solid fa-arrow-right"></a></i>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           
           var newArray = [];  //검색된 상품리스트를 담을 배열
           var search_on =false;  //검색 안되었을때 false , 검색 되었을때 true
           //초기실행, 함수호출
            
           if(value){  //다른 페이지에서 검색어가 넘어왔을 때
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){  //넘어온 검색어로 상품을 검색
                    return element.Name.includes(value);
                });
                //console.log(newArray);

                if(newArray.length!=0){  //검색된 제품 리스트가 1개라도 있다면
                  dataPrint(newArray);  //검색된 제품만 출력
                }else{  //검색된 제품리스트가 없다면
                    $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red;  margin-bottom:100px;">검색된 상품이 없습니다</span>');
                }
                search_on =true;
           }else{   //다른페이지에서 검색어가 넘어오지 않았을 때
                dataPrint(useData);  //모든 상품 리스트를 출력
                search_on =false;
           }
           

           //검색버튼을 클릭했을때...
           $('.search_box #btn').click(function(){
                newArray = useData.filter(function(element){
                    //console.log($('#title').val());
                    //return element.Name == $('#title').val();
                    return element.Name.includes($('#title').val());
                });
                //상품페이지에서 입력된 검색어로 상품리스트 검색
                //console.log(newArray);
                if(newArray.length!=0){  //검색된 상품이 있으면
                    dataPrint(newArray); //검색된 상품리스트 출력
                }else{  //검색된 상품 없으면
                      $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red; margin-bottom:100px;">검색된 상품이 없습니다</span>');
                }
                search_on =true;
           });
           $('#title').keydown(function(e){  //키보드 엔터를 눌렀을때
                if(e.key === 'Enter'){
                    e.preventDefault();
                    $('.search_box #btn').click();  //검색 버튼을 클릭한 것처럼 실행
                }
            });

        //    $('.btn_all').click(function(){  //모두보기 클릭시
        //        dataPrint(useData);  //모든상품 리스트 출력
        //        search_on =false;
        //    });


        //팝업처리 함수
        var pop_txt="";
        function popchange(obj){  //팝업창에 내용을 출력하는 함수
            var pop_txt="";

            pop_txt+='<img src="'+ obj.pop_img +'" alt="">';
            pop_txt+='<div class="pop_txt">';
            pop_txt+='<span>'+ obj.Category +' > '+ obj.pop_type +'</span>';
            pop_txt+='<p>'+ obj.Name +'</p>';
            pop_txt+='<dl>';
            pop_txt+='<dt>효능군</dt>';
            pop_txt+='<dd>'+ obj.pop_effect +'</dd>';
            pop_txt+='<dt>주요성분</dt>';
            pop_txt+='<dd>'+ obj.Ingredient +'</dd>';
            pop_txt+='</dl>';
            pop_txt+='</div>';

            $('.modal_box .pop_con').html(pop_txt);
        }
        // index에서 팝업창으로이동
        if(key == 'pname' && value && newArray.length != 0){
            popchange(newArray[0]);
        }
      
        //팝업창 열기
        $(document).on('click', '.pop_open', function(e) {//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때..
            e.preventDefault();
            
            $('.product .modal_box').fadeIn('slow'); //팝업창 열기
            ind = $(this).parent('li').index(); //상품리스트의 배열에 index번호를 추출한다.
      
            if(search_on==false){//검색 안되었을때
                popchange(useData[ind]); //클릭한 인덱스에 맞는 객체만 전달
            }else if(search_on==true){//검색 되었을때
                popchange(newArray[ind]);
            }
        });

        //팝업창 닫기
        $('.close_pop, .modal_box').click(function(e){  //모두보기 클릭시
             e.preventDefault();
            $('.product .modal_box').fadeOut('fast');
        });

        //카테고리버튼 클릭
        $('#content .category_tab button').click(function(){
             var category ='';
             var idx = $(this).index();  // 0 1 2 3

            $('#content .category_tab button').removeClass('active');
            $(this).addClass('active'); 
             
             if(idx==0){  //전체보기tab
                newArray = useData;
                dataPrint(newArray);
                search_on = false;
                $('#title').val('');  //검색 후 전체보기 누르면 검색어 삭제
                return;
             }else if(idx==1){
                category ='전문의약품';
             }else if(idx==2){
                category ='일반의약품';
             }else if(idx==3){
                category ='건강기능식품';
             }else if(idx==4){
                category ='의료기기';
             }

             //$('#content .category_tab button').removeClass('active');

                newArray = useData.filter(function(element){
                    //console.log($('#title').val());
                    //return element.Name == $('#title').val();
                    return element.Category==category;
                });

                 dataPrint(newArray);
              
                search_on =true;
        });


            
       } 
   });
    
