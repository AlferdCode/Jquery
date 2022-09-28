// 模块导入
// 方法一：
// 普通导入，名字是结构赋值，需要与导出保持一致。
// 另起名，可以使用as关键字 后添加新名“ nickname as petname ”
// import {nickname as petname,sum,sum2}
// from "./a.js";

// 方法二
// 默认导出，名字可以随意起
import nums from "./a.js";

// console.log(petname);
// console.log(sum(5,6));
console.log(nums);