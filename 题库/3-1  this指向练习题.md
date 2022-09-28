1、按如下注释行要求完成代码：

```
var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
    }   
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法


    }
}

答案：
var Obj = function (msg) {
            console.log(this);//obj
            this.msg = msg
            this.shout = function () {
                console.log(this);//obj
                alert(this.msg)
            }
            this.waitAndShout = function () {
                console.log(this);//obj
                // 隔5秒后执行上面的shout方面
                setTimeout(function () {
                    // 方式一：
                    console.log(this);//window 使用call后是 obj
                    return this.shout(); //等同于retun obj.shourt();
                    // 方法二：
                    var that = this;
                    return function(){
                        that.shout(); //等同于obj.shourt();
                    }
                    
                }.call(this), 1000)
            }
        }
        var obj = new Obj('msg');
        obj.waitAndShout();
```

2、请说明下面各种情况的执行结果：

```
 function doSomething() {
 	alert(this);
 }
```

1 ）element.onclick = doSomething，点击element元素后。
2 ）element.onclick = function() {doSomething()}， 点击element元素后。
3 ）直接执行doSomething()。

3、如下代码的输出是：

```
var x = 0;
function test(){
　　console.log(this.x)
}
var obj = {}
obj.x = 1
obj.m = test
obj.m.apply(obj);
test();

答案：1 , 0
```

4、如下代码的输出是：

```
var name = 'The Window';
var obj = {
    name: 'My obj',
    getName: function() {
        return function() {
            console.log(this.name);
        };
    }
};

obj.getName()(); //答案：The Window

var result = obj.getName();
result();   //答案：The Window
```

5、如下代码的输出是：

```
var x = 3;
var y = 4;
var obj = {
    x: 1,
    y: 6,
    getX: function() {
        var x =5;
        return function() {
            return this.x;
        }();
    },
    getY: function() {
        var y =7;
         return this.y;
    }
}
console.log(obj.getX())
console.log(obj.getY())
```

6、如下代码的输出是：

```

var length = 10;
function fn() {
    console.log(this.length);
}
fn();   //答案：10
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();   //答案：10
    arguments[0]();     //答案：2
  }
};
 
obj.method(fn, 1);

```

7、如下代码的输出是：

```
setInterval(function(){
    console.log("1");
    return function(){
        console.log("2");
    }
}(), 1000);
//答案：先输出1.每1秒后输出2重复执行。
```

