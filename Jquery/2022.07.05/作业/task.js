$('.main-center-left').on('click',()=>{
    $('.main-center-left').toggleClass('main-center-left-toggle');
    $('.ganged').toggle(0,'linear');
});
$('.ganged-p a').click(function(){
    $('.main-center-left').toggleClass('main-center-left-toggle');
    $('.ganged').toggle(0,'linear');
});
$('.ganged-left').click(function(){
    $('.ganged-left-float').css({display:'block'});
    $('.ganged-right-float').css({display:'none'});
    $('.ganged-left').css({
        backgroundColor:'#fff',
        borderTop:'3px solid #f10180',
    });
    $('.ganged-right').css({
        backgroundColor:'#f8f8f8',
        borderTop:'3px',
    })
})
$('.ganged-left').css({
    backgroundColor:'#fff',
    borderTop:'3px solid #f10180',
});
$('.ganged-right').click(function(){
    $('.ganged-right-float').css({display:'block'});
    $('.ganged-left-float').css({display:'none'});
    $('.ganged-right').css({
        backgroundColor:'#fff',
        borderTop:'3px solid #f10180',
    });
    $('.ganged-left').css({
        backgroundColor:'#f8f8f8',
        borderTop:'3px',
    })
})
//三级联动开始
$('.ganged-left-float').append('<ul></ul>')
$('.ganged-right-float').append('<ul></ul>')
for(var k in data){
    $('.ganged-left-float ul').append(`<li>${data[k].name}</li>`);
}
$('.ganged-left-float ul li').click(function(){
    console.log(data[$(this).index()].city[0].area[0].name);
    // $(this).index();
    for(var k in data[$(this).index()]){
        // $('.ganged-right-float ul').append(`<li>${data[$(this).index()].city[0].area[k].name}</li>`);
    }
    
})
// 三级联动结束
