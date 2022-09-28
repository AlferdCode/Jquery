// 方法一
// var nickname = "小白";

// function sum(a,b){
//     return a + b;
// }

// function sum2(a,b){
//     return a - b;
// }

// var obj = {
//     name:"张三",
//     age:30
// }

// // 模块导出 export
// export {
//     nickname,
//     sum,
//     sum2
// }


// 方法二
export var nickname = "小白"
export function sum(a,b){
    return a + b;
}

// 默认导出
// default 默认导出方法只能有一个，不能重复使用“否则语法报错”。
// export 普通导出可多次使用
var num = [12,13,55];
export default num;