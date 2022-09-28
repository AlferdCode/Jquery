;(function($){
    //1.封装插件第一种方法
    // 使用$.fn.extend() , 参数是对象
    //可以给jQuery扩展更多的API，且能操作DOM
    $.fn.extend({
        bold:function(){
            console.log(this);
            this.css({
                fontWeight:800,
            })
        },
        setFont:function(fontSize){
            this.css({
                fontSize
            })
        }
    })





})(jQuery || $);