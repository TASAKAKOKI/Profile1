
// const img = document.querySelectorAll("img");
// console.log(img);


// img[0].setAttribute("cursor","pointer");
// img[0].setAttribute("onclick","doImgPop('./src/img/메인_코키2.JPG')");


// function doImgPop(img){
//     img1= new Image();
//     img1.src=(img);
//     imgControll(img);
// }

// function imgControll(img){
//     if((img1.width!=0)&&(img1.height!=0)){
//         viewImage(img);
//         }
//     else{
//     controller="imgControll('"+img+"')";
//     intervalID=setTimeout(controller,20);
//     }
// }

// function viewImage(img){
//     W=img1.width;
//     H=img1.height;
//     O="width="+W+",height="+H+",scrollbars=yes";
//     imgWin=window.open("","",O);
//     imgWin.document.write("<html><head><title>:*:*:*: 이미지상세보기 :*:*:*:*:*:*:</title></head>");
//     imgWin.document.write("<body topmargin=0 leftmargin=0>");
//     imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
//     imgWin.document.close();
// }


// // $('.js-imgSizeSame').each(function(index) { // 1번
    
// //     $(this).children('img').one("load", function() { // 2번
// //     }).each(function() {
// //         imageSizeSame($(this).parent(), 0.7); // 3번
// //     });
    
// //     $(this).parents('.card').find('.desc-noimg').addClass('desc').removeClass('desc-noimg'); // 4번
// // });

// // function imageSizeSame(wrapImgClass, ratio=0) { // 1번
// //     var divHeight;
// //     var div = wrapImgClass;
// //     var img = div.children('img');
// //     var divWidth = div.width();
// //     if(!ratio || ratio == 0) { // 2번
// //         divHeight = div.height(); // 3번
// //     } else {
// //         divHeight = divWidth * ratio; // 4번
// //         div.height(divHeight + 'px'); // 5번
// //     }
// //     var divAspect = divHeight / divWidth; // 6번
// //     var imgAspect = img.height() / img.width(); // 7번
    
// //     if (imgAspect <= divAspect) { // 8번
// //         // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 중앙으로 맞춤
// //         var imgWidthActual = div.outerHeight(true) / imgAspect; var imgWidthToBe = div.outerHeight(true) / divAspect; var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
// //         img.css({
// //             width: 'auto',
// //             'margin-left': marginLeft + 'px',
// //             height: '100%' 
// //         }); 
// //     } else { // 9번
// //         // div가 이미지보다 납작한 경우 가로를 img에 맞추고 세로는 중앙으로 맞춤
// //         var imgHeightActual = div.outerWidth(true) * imgAspect; var imgHeightToBe = div.outerWidth(true) * divAspect; var marginTop = Math.round((imgHeightActual - imgHeightToBe) / 2);
// //         img.css({
// //             width: '100%',
// //             'margin-left': 0,
// //             'margin-top': - marginTop + 'px',
// //             height: 'auto' 
// //         }); 
// //     } 
// // }