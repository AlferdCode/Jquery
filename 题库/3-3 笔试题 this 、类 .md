1、

```
    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    const member = new Person("Lydia", "Hallie");
    Person.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    } 
    console.log(member.getFullName());  //答案：LydiaHallie
```

2、

```
function Foo() { 
    getName = function () { 
        alert(1); 
    }; 
    return this; 
} 
Foo.getName = function () { 
    alert(2); 
}; 
Foo.prototype.getName = function () { 
    alert(3); 
}; 
var getName = function () { 
    alert(4); 
}; 
function getName() { 
    alert(5); 
} 
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2
new Foo().getName(); //3
```

3、

```
String.prototype.giveLydiaPizza = function() {
 return "Just give Lydia pizza already!";
};
const name = "Lydia";
name.giveLydiaPizza();
//没有答案
```

4、

```
function Fn(){
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    console.log(this.x);
};
Fn.prototype.getY = function () {
    console.log(this.y);
};
var f1 = new Fn();
var f2 = new Fn();
console.log(f1.getX === f2.getX);	//false
console.log(f1.getY === f2.getY);	//true
console.log(f1.__proto__.getY === Fn.prototype.getY);	//true
console.log(f1.__proto__.getX === f2.getX);				//false
console.log(f1.__proto__.getX === Fn.prototype.getX);	//true
console.log(f1.constructor);	//输出函数FN的代码块
console.log(Fn.prototype.__proto__.constructor);	// ƒ Object() { [native code] }
f1.getX();	//100
f1.__proto__.getX();	//undefined
f2.getY();	//200
Fn.prototype.getY();	//undefined

```

5、

```
var A=function(){}

A.prototype.n=1

var b=new A()

A.prototype={
n:2,

m:3

}

var c=new A()

console.log(b.n,b.m,c.n,c.m); //1 , undefined , 2 , 3
```

6、

```
var F=function(){};

Object.prototype.a=function(){
console.log('a()')

};

Function.prototype.b=function(){
console.log('b()')

}

var f=new F();

f.a()	//'a()'

f.b()	// 报错, 正常情况下在控制台输出，此处不解决，下方运行看不到结果。

F.a()	//'a()'

F.b()	//'b()'
```

