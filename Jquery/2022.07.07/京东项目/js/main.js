document.addEventListener('DOMContentLoaded', function () {
    // main部分开始
    (function () {
        //已登录部分
        
        var sideDiv = document.querySelector('.main-w-ul-div');
        var LoginA = document.querySelectorAll('.header-center-right li')[0].children;
        sideDiv.style.zIndex = '999';
        if (true) {
            console.log(12345);
            LoginA.innerText = '已登录';
            console.log(LoginA.innerText);
        }
        //已登录部分结束
        //leftget.js首页“核心左侧数据列表”开始
    
        console.log(getCategoryCallback[0].data[0].s[0].n.split('|'));
    console.clear();
        // getCategoryCallback下面-一个对象集合-有18个数组集合-对象集合
        var sideUl = document.querySelector('.main-w-ul');

        for (var k in getCategoryCallback[0].data) {
            var li = document.createElement('li');
            for (var ke in getCategoryCallback[0].data[k].s) {
                var a = document.createElement('a');
                a.innerHTML = getCategoryCallback[0].data[k].s[ke].n.split('|')[1];
                 a.href = getCategoryCallback[0].data[k].s[ke].n.split('|')[0];
                a.dataset = {
                    index_1 : k,
                    index_2 : ke ,
                }
                console.log(a.dataset);
                var span = document.createElement('span');
                span.innerHTML = '/';
                li.appendChild(a);
                li.insertBefore(span, li[0]);
          
        //    点击事件未写 需要更改
                for(var key in getCategoryCallback[0].data[k].s[ke].s){
            var dl = document.createElement('dl');
            dl.style.width = '780px';
            dl.style.height = '32px';
            sideDiv.appendChild(dl);
            var dt = document.createElement('dt');
           dt.innerHTML = '';
            dt.innerHTML = getCategoryCallback[0].data[k].s[ke].s[key].n.split('|')[1];
           dl.appendChild(dt);
           var dd = document.createElement('dd');
           dd.innerHTML = '';
           for(var keys in getCategoryCallback[0].data[k].s[ke].s[key].s){
            //    console.log(getCategoryCallback[0].data[k].s[ke].s[key].s[keys].n.split('|')[1]);
            dd.innerHTML += getCategoryCallback[0].data[k].s[ke].s[key].s[keys].n.split('|')[1];

           }
            dl.appendChild(dd);
           
          }
          
            }




            li.className = 'main-w-ul-li';
            sideUl.appendChild(li);
        }
        //鼠标悬浮时显示数据
        // console.clear();
        // console.log(getCategoryCallback[0].data[0].s[0].n.split('|'));
        console.log(getCategoryCallback[0].data[0].s[0].s);


        Array.from(sideUl.children).forEach(function (item, index) {
            item.addEventListener('mouseover', function () {
                item.style.backgroundColor = '#e3e4e5';
                sideDiv.style.display = 'block'
                sideDiv.style.backgroundColor = '#fff';
                // 鼠标移入时 让数据进入sideDiv

            });
            item.addEventListener('mouseout',function(){
                item.style.backgroundColor = '#fefefe';
                sideDiv.style.display = 'none'
            })
        });
        var main_w = document.querySelector('.main-w');
        document.onscroll= function(){
           var offset =  main_w.offsetTop;// 元素头部
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop);
            if(scrollTop>= offset+10){
                sideDiv.style.position = 'fixed';
                sideDiv.style.top = '0px';
                sideDiv.style.left = "363px";
            }else{
                sideDiv.style.position = 'absolute';
                sideDiv.style.top = '11px';
                sideDiv.style.left = "198px";
            }
        }

console.clear();
var gdjt = document.querySelector('.gdjt');
   var pdgc = document.querySelector('.pdgc');
    var cemian = document.querySelector('.cemian');
    var lis = document.querySelectorAll('.cemian li');
    var wntj = document.querySelector('.wntj');
    var centerminlb = document.querySelector('.centerminlb');
document.addEventListener('scroll',function(){
     var top = centerminlb.offsetTop;
     console.log(top);
    var offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(offsetTop >= top){
        gdjt.style.top = '0px';
    }else{
        gdjt.style.top = '-52px';
    }
    if(offsetTop >= top){
        cemian.style.position = 'fixed';
        cemian.style.top = '80px';
    }else{
        cemian.style.position = 'absolute';
        cemian.style.top = '650px';
    }
    if(offsetTop>= top && offsetTop< pdgc.offsetTop ){
        cemian.children[0].children[0].style.color = 'red';
    }else if(offsetTop >= pdgc.offsetTop && wntj.offsetTop >offsetTop){
        cemian.children[0].children[2].style.color = 'red';
    }else if(wntj.offsetTop <= offsetTop){
        cemian.children[0].children[3].style.color = 'red';
    }else{
        return;
    }
    console.log(cemian.children[0].children);
    if(wntj.offsetTop <=offsetTop ){
        lis[6].style.display = 'block';
    }else{
        lis[6].style.display = 'none';
    }
    console.log( lis[6]);
    lis[6].addEventListener('click',function(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    })

})
        //leftget.js首页“核心左侧数据列表”结束












    })();
    // main部分结束

})