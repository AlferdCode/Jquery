;(function($){
    //2.封装插件的第二种方法 ， 给jQuery对象添加方法。
    $.extend({
        add:function(x,y){
            return x + y ;
        },
        sub:function(x,y){
            return x - y;
        } 
    })
})(jQuery || $);