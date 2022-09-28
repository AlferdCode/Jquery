# Symbol
Symbol是ES6新定义的一种值，它既不是字符串，也不是对象，而是为javaScript增加的第七种基本类型，可以作为一个属性，多用来修复与旧代码命名冲突的问题。



```javascript
typeof Symbol()

//"symbol"
```



创建一个Symbol有三种方法：



- 调用Symbol()，这种方式每一次调用都会返回一个新的唯一的symbol。
- 调用Symbol.for(string)，这种方式会把创建的symbol放入一个symbol注册表，如果已经存在了该symbol就会返回相同的值，这样可在不同的页面共享一个Symbol。
- 使用标准定义的Symbol，例如Symbol.iterator 。
   

 因为不是一个对象，所以不需要使用new来创建 
 

```javascript
var s1 = Symbol("dog"); //dog称作描述符，可以用console.log().或者.toString（）方法打印出来，主要用于调试
var s2 = Symbol("dog");
console.log(s1 == s2); //false



var s3 = Symbol.for("dog");
console.log(s3 == s1); //false

var s4 = Symbol.for("dog");
console.log(s3 == s4); //true
```


 Symbol可以作为属性的键，但是只能用[]访问，不能用.访问。

```javascript
var s1 = Symbol("dog");

// 方式一
var obj = {};
obj[s1] = "dog";
obj.s1 = "dog"; //error

// 方式二

var obj = {
	[s1]: "dog"
}
```


 如果已经知道了一个symbol，那么可以访问它或者删除它

```javascript
var s1 = Symbol("dog");



var obj = {};



obj[s1] = "dog";



// 判断是否存在



if(s1 in obj)



// 删除



delete obj[s1]
```

但是常见的对象检测会忽略symbol键，例如  for-in循环，Object.keys(obj)，Object.getOwnPropertyNames(obj)；这就有点像java中的private一样，但是我们可以通过Object.getOwnPropertySymbols(obj)列出对象的所有symbol键。Reflect.ownKeys(obj)返回所有的字符串键和Symbol键，所以也不是完全私有的。

 
 

 另外， symbol具有弱封装机制，只在当前作用域中有效，所以我们可以在一个模块或者一个闭包中创建一个symbol，而无需担心与其他模块冲突

```javascript
var obj = (function(){



	var s1 = Symbol("dog");



	var obj = {};



	obj[s1] = "dog";



	console.log(obj[s1]);//dog



	return obj;



})();



console.log(obj[s1]); //undefined
```

这样除了使用  `Object.getOwnPropertySymbols()` 之外我们无法在外部访问到s1这个Symbol

 
 

 symbol和其他基本类型不一样， 不会自动转换为字符串类型，所以不要用+来拼接symbol，所以尽量不要使用symbol做任何的运算

```javascript
var s1 = Symbol("dog");



console.log("cat" + s1);//TypeError: can't convert symbol to string



console(123 - s1); //TypeError: can't convert symbol to number
```