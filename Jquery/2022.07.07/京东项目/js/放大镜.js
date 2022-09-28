document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var ul = document.querySelector('.main-div ul');
        // console.log(imgSrc.length);
        var imgD = document.querySelector('.main-img img');
        var imgX = document.querySelector('.main-maxImg img');
        imgD.src = imgSrc[0].minSrc;
        imgX.src = imgSrc[0].maxSrc;
        for (var i = 0; i < imgSrc.length; i++) {
            var li = document.createElement('li');
            var img = document.createElement('img');
            img.src = imgSrc[i].minSrc;
            li.appendChild(img);
            ul.appendChild(li);
        }
        var lis = document.querySelectorAll('.main-div li');
        Array.from(lis).forEach(function (item, index) {
            item.addEventListener('mouseover', function () {
                imgD.src = imgSrc[index].minSrc;
                imgX.src = imgSrc[index].maxSrc;
            });
        });
    })();

    (function () {
        var zhongImg = document.querySelector('.main-imgS');
        var D = document.querySelector('.main-maxImg');
        var mask = document.querySelector('.mask');
        zhongImg.addEventListener('mouseover', function () {
            mask.style.display = 'block';
            D.style.display = 'block';
        });
        zhongImg.addEventListener('mouseout', function () {
            mask.style.display = 'none';
            D.style.display = 'none';
        });
        zhongImg.addEventListener('mousemove', function (e) {
            var x = e.pageX - zhongImg.parentNode.offsetLeft;
            var y = e.pageY - zhongImg.parentNode.offsetTop;
            D.children[0].style.top = -y + "px";
            D.children[0].style.left = -x + "px";
            if (x <= 100) {
                 x = 100;
            }
            if (x >= 250) {
                 x = 250;
            }
            if (y <= 100) {
                 y = 100;
            }
            if (y >= 250) {
                y = 250;
            }
            mask.style.top = y - 100 + "px";
            mask.style.left = x - 100 + "px";


        })
    })();
    // 四级联动
(function(){
    // 获取元素
var province = document.querySelector('#province');
var city = document.querySelector('#city');
var region = document.querySelector('#region');
var row = document.querySelector('#row');


var arr = Object.keys(area);
var ars = Object.values(area);  
console.log(arr);
console.log(ars);
// 给省份渲染数据
for(var a in arr){
   var option = document.createElement('option');
   option.innerHTML = arr[a];
   option.dataset.indexA = a;
   console.log(option);
   province.appendChild(option);
}

console.clear();
// 点击对应省份渲染出对应市(二次点击清除之前渲染，再次渲染对应市)
province.onchange = function(e){
    console.log(e.target.dataset.indexA);
    // console.log(e.target.dataset.indexA);//省份下标
    // var eleClick = ars[e.target.dataset.indexA];
    // console.log(eleClick);
    // for(var b in eleClick){

    // }
}




})();
// 四级结束



})