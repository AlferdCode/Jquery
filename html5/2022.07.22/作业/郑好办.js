document.addEventListener('DOMContentLoaded',function(){
    // 首页部分
(function(){
    // 全局部分开始
    
window.onresize = function(){
    var body = document.querySelector('body');
    var windowViewDark = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(windowViewDark);
    if(windowViewDark <= 600){
        body.parentNode.style.width = windowViewDark + "px";
    }
}








    // 全局部分结束
})();

// 头部开始












// 头部介绍












})