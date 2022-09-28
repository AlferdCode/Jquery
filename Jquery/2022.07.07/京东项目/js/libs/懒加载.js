document.addEventListener('DOMContentLoaded', function () {
    console.log(jsonpMarket.data[0]);
    console.log(jsonpMarket.data[2]);
    var divLJZ = document.querySelector('.lanjiazai').children;
    for (var i = 0; i < jsonpMarket.data.length; i++) {
        var li = document.createElement('li');
        // jsonpMarket.data[i].name +jsonpMarket.data[i].bigLink 
        //    li.innerHTML = `` ;
        if (i < 8) {
            divLJZ[0].appendChild(li);
        } else {
            divLJZ[1].appendChild(li);
        }
    }
    for (var i = 0; i < divLJZ[0].children.length; i++) {
        if (i < 2) {
            var img = document.createElement('img');
            img.src = jsonpMarket.data[i].bigImg;
            divLJZ[0].children[i].appendChild(img);
        } else {
            console.clear();
            divLJZ[0].children[i].innerHTML = `<img src="${jsonpMarket.data[i].item[0]}"><img src="${jsonpMarket.data[i].item[1]}">`
            console.log(jsonpMarket.data[2].item);
        }
    }
    // 最后懒加载
    console.log(goods[1].src);
    var divZUI = document.querySelector('.BigWheelSow');
    for (var i = 0; i < goods.length; i++) {
        var img = document.createElement('img');
        img.dataset.src = goods[i].src;
        // img.src = goods[i].src;
        divZUI.appendChild(img);
    };
    document.onscroll = function(){
        var imgs = document.querySelectorAll('.BigWheelSow img');
        var h = window.innerHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        Array.from(imgs).forEach(function(item,index){
         if(scrollTop + h/2 >= item.offsetTop){
              item.src= item.dataset.src;
         }
        })
    }















});