document.addEventListener('DOMContentLoaded',function(){
;(function(){
var leftDiv = document.querySelector('.min-toggle-left');
var rightDiv = document.querySelector('.min-toggle-right');
var ulonClick = document.querySelector('.min-center');
// console.log(ulClick.children);
ulonClick.children[0].style.color = '#e93854';
ulonClick.onclick = function(e){
Array.from(ulonClick.children).forEach(function(item,index){
    item.style.color = 'rgb(101, 100, 100)';  
})
e.target.style.color = "#e93854";
if(ulonClick.children[0].style.color == "rgb(233, 56, 84)"){
    leftDiv.style.display = 'block';
    rightDiv.style.display = 'none';
}else{
    leftDiv.style.display = 'none';
    rightDiv.style.display = 'block';   
}
}
//登录切换结束
var usersLogin = document.querySelector('#usersLogin');


var arr = document.cookie.split(';');
console.log(arr);
var Account = arr[0].split('=')[1];
console.log(Account);
var password = arr[1].split('=')[1];
usersLogin.onsubmit = function(){
    var username = document.querySelector('#username').value;
var password = document.querySelector('#password').value;
if(username == Account && password == password){
    alert('正确');
    location.href = '../html/main.html';
}else {
    alert('信息错误');
    return false ;
}
}


})();
});
