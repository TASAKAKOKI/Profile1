var boxes = document.querySelectorAll('.box');
var modal;
var array = [];
var mArray = [];
var sArray = [];
// console.log(array);
// console.log(boxes);
// console.log(`Boxes length is: ${boxes.length}`);
function init() { 
    for(let i = 0; i < boxes.length; i++) {
        var articles = boxes[i].querySelectorAll("article");
        // console.log(articles);
        for (let k = 0; k < 5; k++) {
            array.push(articles[k]);
        }
        // console.log(`articles length is: ${articles.length}`);
        // for(let j = 0; j < articles.length; j++) {
        //     console.log(articles[j]);
        //     var div = articles[j].querySelector(".image");
        //     var image = div.querySelector("img")
        //     console.log(image);
        //     var modal = articles[j].querySelector('.modal');
        //     console.log(modal);
        //     image.onclick = function() {
        //         modal.style.display = "block";
        //     }
        //     window.onclick = function(event) {
        //         if (event.target == modal) {
        //             modal.style.display = "none";
        //         }
        //     }
        //     console.log(`${i}번째 ${j}완료`);
        // }
    }
    console.log(array);
    for(let a = 0; a < 45; a++) {
        var modal = array[a].querySelector('.modal');
        var span = modal.querySelector('.close');
        mArray.push(modal);
        sArray.push(span);
    }
    console.log(mArray);
    console.log(sArray);
    array[0].onclick = function() {
        mArray[0].style.display = "block";
    }
    sArray[0].onclick = function() {
        mArray[0].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[0]) {
            mArray[0].style.display = "none";
        }
    }

    array[1].onclick = function() {
        mArray[1].style.display = "block";
    }
    sArray[1].onclick = function() {
        mArray[1].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[1]) {
            mArray[1].style.display = "none";
        }
    }
    array[2].onclick = function() {
        mArray[2].style.display = "block";
    }
    sArray[2].onclick = function() {
        mArray[2].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[2]) {
            mArray[2].style.display = "none";
        }
    }
    array[3].onclick = function() {
        mArray[3].style.display = "block";
    }
    sArray[3].onclick = function() {
        mArray[3].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[3]) {
            mArray[3].style.display = "none";
        }
    }
    array[4].onclick = function() {
        mArray[4].style.display = "block";
    }
    sArray[4].onclick = function() {
        mArray[4].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[4]) {
            mArray[4].style.display = "none";
        }
    }
    array[5].onclick = function() {
        mArray[5].style.display = "block";
    }
    sArray[5].onclick = function() {
        mArray[5].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[5]) {
            mArray[5].style.display = "none";
        }
    }
    array[6].onclick = function() {
        mArray[6].style.display = "block";
    }
    sArray[6].onclick = function() {
        mArray[6].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[6]) {
            mArray[6].style.display = "none";
        }
    }
    array[7].onclick = function() {
        mArray[7].style.display = "block";
    }
    sArray[7].onclick = function() {
        mArray[7].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[7]) {
            mArray[7].style.display = "none";
        }
    }
    array[8].onclick = function() {
        mArray[8].style.display = "block";
    }
    sArray[8].onclick = function() {
        mArray[8].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[8]) {
            mArray[8].style.display = "none";
        }
    }
    array[9].onclick = function() {
        mArray[9].style.display = "block";
    }
    sArray[9].onclick = function() {
        mArray[9].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[9]) {
            mArray[9].style.display = "none";
        }
    }
    array[10].onclick = function() {
        mArray[10].style.display = "block";
    }
    sArray[10].onclick = function() {
        mArray[10].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[10]) {
            mArray[10].style.display = "none";
        }
    }
    array[11].onclick = function() {
        mArray[11].style.display = "block";
    }
    sArray[11].onclick = function() {
        mArray[11].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[11]) {
            mArray[11].style.display = "none";
        }
    }
    array[12].onclick = function() {
        mArray[12].style.display = "block";
    }
    sArray[12].onclick = function() {
        mArray[12].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[12]) {
            mArray[12].style.display = "none";
        }
    }
    array[13].onclick = function() {
        mArray[13].style.display = "block";
    }
    sArray[13].onclick = function() {
        mArray[13].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[13]) {
            mArray[13].style.display = "none";
        }
    }
    array[14].onclick = function() {
        mArray[14].style.display = "block";
    }
    sArray[14].onclick = function() {
        mArray[14].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[14]) {
            mArray[14].style.display = "none";
        }
    }
    array[15].onclick = function() {
        mArray[15].style.display = "block";
    }
    sArray[15].onclick = function() {
        mArray[15].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[15]) {
            mArray[15].style.display = "none";
        }
    }
    array[16].onclick = function() {
        mArray[16].style.display = "block";
    }
    sArray[16].onclick = function() {
        mArray[16].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[16]) {
            mArray[16].style.display = "none";
        }
    }
    array[17].onclick = function() {
        mArray[17].style.display = "block";
    }
    sArray[17].onclick = function() {
        mArray[17].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[17]) {
            mArray[17].style.display = "none";
        }
    }
    array[18].onclick = function() {
        mArray[18].style.display = "block";
    }
    sArray[18].onclick = function() {
        mArray[18].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[18]) {
            mArray[18].style.display = "none";
        }
    }
    array[19].onclick = function() {
        mArray[19].style.display = "block";
    }
    sArray[19].onclick = function() {
        mArray[19].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[19]) {
            mArray[19].style.display = "none";
        }
    }
    array[20].onclick = function() {
        mArray[20].style.display = "block";
    }
    sArray[20].onclick = function() {
        mArray[20].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[20]) {
            mArray[20].style.display = "none";
        }
    }
    array[21].onclick = function() {
        mArray[21].style.display = "block";
    }
    sArray[21].onclick = function() {
        mArray[21].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[21]) {
            mArray[21].style.display = "none";
        }
    }
    array[22].onclick = function() {
        mArray[22].style.display = "block";
    }
    sArray[22].onclick = function() {
        mArray[22].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[22]) {
            mArray[22].style.display = "none";
        }
    }
    array[23].onclick = function() {
        mArray[23].style.display = "block";
    }
    sArray[23].onclick = function() {
        mArray[23].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[23]) {
            mArray[23].style.display = "none";
        }
    }
    array[24].onclick = function() {
        mArray[24].style.display = "block";
    }
    sArray[24].onclick = function() {
        mArray[24].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[24]) {
            mArray[24].style.display = "none";
        }
    }
    array[25].onclick = function() {
        mArray[25].style.display = "block";
    }
    sArray[25].onclick = function() {
        mArray[25].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[25]) {
            mArray[25].style.display = "none";
        }
    }
    array[26].onclick = function() {
        mArray[26].style.display = "block";
    }
    sArray[26].onclick = function() {
        mArray[26].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[26]) {
            mArray[26].style.display = "none";
        }
    }
    array[27].onclick = function() {
        mArray[27].style.display = "block";
    }
    sArray[27].onclick = function() {
        mArray[27].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[27]) {
            mArray[27].style.display = "none";
        }
    }
    array[28].onclick = function() {
        mArray[28].style.display = "block";
    }
    sArray[28].onclick = function() {
        mArray[28].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[28]) {
            mArray[28].style.display = "none";
        }
    }
    array[29].onclick = function() {
        mArray[29].style.display = "block";
    }
    sArray[29].onclick = function() {
        mArray[29].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[29]) {
            mArray[29].style.display = "none";
        }
    }
    array[30].onclick = function() {
        mArray[30].style.display = "block";
    }
    sArray[30].onclick = function() {
        mArray[30].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[30]) {
            mArray[30].style.display = "none";
        }
    }
    array[31].onclick = function() {
        mArray[31].style.display = "block";
    }
    sArray[31].onclick = function() {
        mArray[31].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[31]) {
            mArray[31].style.display = "none";
        }
    }
    array[32].onclick = function() {
        mArray[32].style.display = "block";
    }
    sArray[32].onclick = function() {
        mArray[32].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[32]) {
            mArray[32].style.display = "none";
        }
    }
    array[33].onclick = function() {
        mArray[33].style.display = "block";
    }
    sArray[33].onclick = function() {
        mArray[33].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[33]) {
            mArray[33].style.display = "none";
        }
    }
    array[34].onclick = function() {
        mArray[34].style.display = "block";
    }
    sArray[34].onclick = function() {
        mArray[34].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[34]) {
            mArray[34].style.display = "none";
        }
    }
    array[35].onclick = function() {
        mArray[35].style.display = "block";
    }
    sArray[35].onclick = function() {
        mArray[35].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[35]) {
            mArray[35].style.display = "none";
        }
    }
    array[36].onclick = function() {
        mArray[36].style.display = "block";
    }
    sArray[36].onclick = function() {
        mArray[36].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[36]) {
            mArray[36].style.display = "none";
        }
    }
    array[37].onclick = function() {
        mArray[37].style.display = "block";
    }
    sArray[37].onclick = function() {
        mArray[37].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[37]) {
            mArray[37].style.display = "none";
        }
    }
    array[38].onclick = function() {
        mArray[38].style.display = "block";
    }
    sArray[38].onclick = function() {
        mArray[38].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[38]) {
            mArray[38].style.display = "none";
        }
    }
    array[39].onclick = function() {
        mArray[39].style.display = "block";
    }
    sArray[39].onclick = function() {
        mArray[39].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[39]) {
            mArray[39].style.display = "none";
        }
    }
    array[40].onclick = function() {
        mArray[40].style.display = "block";
    }
    sArray[40].onclick = function() {
        mArray[40].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[40]) {
            mArray[40].style.display = "none";
        }
    }
    array[41].onclick = function() {
        mArray[41].style.display = "block";
    }
    sArray[41].onclick = function() {
        mArray[41].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[41]) {
            mArray[41].style.display = "none";
        }
    }
    array[42].onclick = function() {
        mArray[42].style.display = "block";
    }
    sArray[42].onclick = function() {
        mArray[42].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[42]) {
            mArray[42].style.display = "none";
        }
    }
    array[43].onclick = function() {
        mArray[43].style.display = "block";
    }
    sArray[43].onclick = function() {
        mArray[43].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[43]) {
            mArray[43].style.display = "none";
        }
    }
    array[44].onclick = function() {
        mArray[44].style.display = "block";
    }
    sArray[44].onclick = function() {
        mArray[44].style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == mArray[44]) {
            mArray[44].style.display = "none";
        }
    }
}

init();
