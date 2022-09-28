document.addEventListener('DOMContentLoaded',function(){
    var clickA = document.querySelector('.CPM-jdyhzc a ');
    var CPM = document.querySelector('.CPM');
    var CPM_zui = document.querySelector('.CPM-zui');
    clickA.addEventListener('click',function(e){
        e.stopPropagation();
        CPM.style.display = 'none';
        location.href = '../html/main.html';
    })
    CPM_zui.addEventListener('click',function(e){
        e.stopPropagation();
        CPM.style.display = 'none';
    })
    // 验证手机号

    var Tel = document.querySelector('.Validation-cente-right');
    var verifyBtn = document.querySelector('.Validation-cente-bottom');
    var nextStep = document.querySelector('.Validation-cente-bottom-btn');
    Tel.addEventListener('change',function(){
        var  RegExpS = /^1[3-9]\d{9}$/;
        if(RegExpS.test(Tel.value)){
         document.cookie = 'Tel='+Tel.value;

        }else{
            alert("格式错误");
        }
    });
    var btnDJ = document.querySelector('.Validation-cente-bottom-btn');
    var SJH = document.querySelector('.Validation-center');
    var zh = document.querySelector('.tuoAccount');
    btnDJ.addEventListener('click',function(e){
        e.stopPropagation();
        SJH.style.display = 'none';
        zh.style.display = 'block';
    })
    var inputzh = document.querySelectorAll('.tuoAccount input');
    var btnzh = document.querySelector('.tuoAccount button');
    inputzh[0].addEventListener('change',function(){
        var  RegExpS = /^1[3-9]\d{9}$/;
        if(RegExpS.test(inputzh[0].value)){
            document.cookie = 'Account='+inputzh[0].value;
        }else{
            alert('账号错误')
        }
    })
    inputzh[1].addEventListener('change',function(){
        var passWord = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
        if(passWord.test(inputzh[1].value)){
            alert('格式正确');

        }else{
            alert('格式错误');
        }
    })
    inputzh[2].addEventListener('change',function(){
        if( inputzh[2].value == inputzh[1].value ){
            console.log(String(inputzh[2].value));
            document.cookie = 'password='+String(inputzh[2].value);
            console.log(document.cookie);
            alert('密码正确');

        }else{
            alert('密码二次确认不相符');
        }
    });
    var zccg = document.querySelector('.zccg');
    btnzh.addEventListener('click',function(){
        SJH.style.display = 'none';
        zh.style.display = 'none';
        zccg.style.display = 'block';
    })
    zccg.children[0].addEventListener('click',function(){
        location.href = '../html/页面Login.html';
    })


})