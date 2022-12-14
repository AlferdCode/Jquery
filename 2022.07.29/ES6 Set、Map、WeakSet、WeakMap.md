

# ES6中的Set、WeakSet、Map、WeakMap

[TOC]



## 1、Set

ES6中提供了Set数据容器，这是一个能够**存储无重复值**的无序列表。

> 创建Set

通过`new Set()`可以创建Set，然后通过`add`方法能够向Set中添加数据项：

```
let set= new Set();
set.add(1);
set.add('1');
console.log(set.size);
```

**Set内部使用Object.is()方法来判断两个数据项是否相等，唯一不同的是+0和-0在Set中被判断为是相等的。**

同时可以使用数组来构造Set，或者说具有迭代器的对象都可以用来构造Set，并且Set构造器会确保不会存在重复的数据项：

```
let set = new Set([1,2,3,3,3,3]);
console.log(set.size);
```

> 检查某个值是否存在于Set中

可以使用`has()`方法来判断某个值是否存在于Set中：

```
let set = new Set([1,2,3,3,3,3]);
console.log(set.has(5)); 
```

> 删除值

使用delete()方法从Set中删除某个值，或者使用clear()方法从Set中删除所有值：

```
let set = new Set([1,2,3,3,3,3]);
console.log(set.size);
console.log(set.has(5)); 

set.delete(1);

console.log(set.has(1)); 
console.log(set.size); 
```

> forEach()方法

可以使用`forEach`方法来遍历Set中的数据项，该方法传入一个回调函数`callback`，还可以传入一个`this`，用于回调函数之中：

回调函数callback中有三个参数：

1. 元素值；

2. 元素索引；

3. 将要遍历的对象；

   ```
    let set = new Set([1,2,3,3,3,3]);
    set.forEach(function (value,key,ownerSet) {
        console.log(value);
        console.log(key);           
    })
   ```

Set中的value和key是相同的，这是为了让Set的forEach方法和数组以及Map的forEach方法保持一致，都具有三个参数。

在forEach方法中传入`this`，给回调函数使用：

```
let set = new Set([1,2,3,3,3,3]);
let operation ={

    print(value){
        console.log(value);
    },

    iterate(set=[]){
        set.forEach(function(value,key,ownerSet){
            this.print(value);
            this.print(key);
        },this);
    }

}

operation.iterate(set);

输出：1 1 2 2 3 3
```

如果回调函数使用箭头函数的话，就可以省略`this`的入参，这是因为箭头函数会通过作用域链找到当前this对象，将上面的示例代码使用箭头函数来写：

```
let set = new Set([1,2,3,3,3,3]);
let operation ={

    print(value){
        console.log(value);
    },

    iterate(set=[]){
        set.forEach((value,key)=>{
            this.print(value);
            this.print(key);
        })
    }

}

operation.iterate(set);
```

> 将Set转换成数组

将数组转换成Set十分容易，可以将数组传入Set构造器即可；而将Set转换成数组，需要使用扩展运算符。扩展运算符能将数组中的数据项切分开，作为独立项传入到函数，如果将扩展运算符用于可迭代对象的话，就可以将可迭代对象转换成数组：

```
let [...arr]=set;
console.log(arr); 
```

## 2、Weak Set

Set在存放对象时，实际上是存放的是对象的引用，即Set也被称之为Strong Set。如果所存储的对象被置为null，但是Set实例仍然存在的话，对象依然无法被垃圾回收器回收，从而无法释放内存：

```
let set = new Set();
let key={};
let key2 = {};
set.add(key);
set.add(key2);
console.log(set.size); 

key=null;
console.log(set.size); 
```

可以看出就算对象key置为null，但是由于是强引用的方式，Set实例还存在，对象key依然不会被回收。

如果想让对象key正常释放的话，可以使用Weak Set，此时，**存放的是对象的弱引用，当对象只被Set弱引用的话，并不会阻止对象实例被回收**。Weak Set同Set的用法几乎一致。可以使用add()方法增加数据项，使用has()方法检查Weak Set中是否包含某项，以及使用delete()方法删除某一项。

```
let set = new WeakSet();
let key = {};   
set.add(key);
console.log(set.has(key)); 
set.delete(key);
console.log(set.has(key)); 
```

但需要注意的是：Weak Set构造器不接受基本类型数据，只接受对象。同样的可以使用可迭代的对象如数组，来作为构造器参数，来创建Weak Set。

> Weak Set和Set之间的差异

对于Weak Set和Set之间的重要差异：

1. 对于Weak Set实例，若调用了add()方法时传入了非对象的参数，则会抛出错误。如果在has()或者delete()方法中传入了非对象的参数则会返回false；
2. Weak Set不可迭代，因此不能用于for-of循环；
3. Weak Set 无法暴露出任何迭代器（例如 keys() 与 values() 方法） ，因此没有任何编程手段可用于判断 Weak Set 的内容；
4. Weak Set没有forEach()方法；
5. Weak Set没有size属性；



## 3、Map

ES6中提供了Map数据结构，能够存放键值对，其中，键的去重是通过Object.is()方法进行比较，键的数据类型可以是基本类型数据也可以是对象，而值也可以是任意类型数据。

> 对Map的操作

1. 使用`set()`方法可以给Map添加键值对

   ```
    let map = new Map();
    map.set('title','hello world');
    map.set('year','2018');
    
    console.log(map.size); 
   ```

通过`set()`方法往Map中增加了两个键值对后，可以看到Map的大小就为2；

1. 通过get()方法可以从Map中提取值

   ```
    let map = new Map();
    map.set('title','hello world');
    map.set('year','2018');
    
    console.log(map.get('title')); 
   ```

2. has(),delete()以及clear()方法

为了和Set的操作保持一致，Map中同样有has()方法，用来检查某个数据项是否存在于Map中，使用delete方法可以从Map中删除一个数据项，使用clear方法可以删除Map中所有的数据项

```
let map = new Map();
map.set('title','hello world');
map.set('year','2018');

console.log(map.has('year')); 
map.delete('title');
console.log(map.has('title')); 
map.clear();
console.log(map.size); 
```

> Map的初始化

与Set的初始化一样，Map也可以用数组来初始化Map，该数组中的每一个数据项也是数组，数组的第一个数据项代表键值对的键，第二个数据项是键值对的值：

```
let map = new Map([['title','hello world'],['year','2018']]);
console.log(map.has('title')); 
console.log(map.has('year')); 
console.log(map.size); 
```

> Map的forEach方法

与Set一样，Map也拥有`forEach`方法，该方法也接收一个回调函数，该回调函数有三个参数：

1. 键值对的值；

2. 键值对的值键；

3. 当前Map对象引用；

   ```
    let map = new Map([['title','hello world'],['year','2018']]);
    map.forEach((value,key,ownerMap)=>{
        console.log(value);
        console.log(key);
    });
    
    hello world
    title
    2018
    year
   ```

与Set的forEach一样，可以在回调函数中传入`this引用`。



## 4、Weak Map

Weak Map对Map而言，就像是Weak Set相对于Set一样：**Weak Map(或者Weak  Set)都是存储对象弱引用的方式，在Weak Map（或者Weak  Set）中，所有的键都必须是对象（尝试使用非对象的键会抛出错误），而且这些对象都是弱引用，不会干扰到垃圾回收。当Weak Map中的键在Weak Map之外不存在引用时，该键值对会被移除。**

> Weak Map的操作

1. Weak Map的初始化

Weak Map的键必须是对象，值可以是任意类型，初始化同Map一样，也可是使用数组来创建一个 Weak Map ：

```
let key = {};
let key2 = {};
let map = new WeakMap([[key,'hello'],[key2,'world']]);
console.log(map.get(key)); 
console.log(map.get(key2)); 
```

1. has方法以及delete方法

与Map一样，可以使用has()方法来检查Weak Map中是否存在某一个键值对，使用delete()方法可以删除一个键值对。clear() 方法不存在，这是因为没必要对键进行枚举，并且枚举 Weak Map 也是不可能的，这与 Weak Set 相同：

```
let key = {};
let key2 = {};
let map = new WeakMap([[key,'hello'],[key2,'world']]);

map.delete(key);
console.log(map.has(key)); 
```

> Weak Map 的用法与局限性

当决定是要使用 Weak Map 还是使用正规 Map 时，首要考虑因素在于你是否只想使用对象类型的键。如果你打算这么做，那么最好的选择就是 Weak Map 。因为它能确保额外数据在不再可用后被销毁，从而能优化内存使用并规避内存泄漏。

要记住 Weak Map 只为它们的内容提供了很小的可见度，因此你**不能使用 forEach() 方法、size 属性或 clear() 方法来管理其中的项**。如果你确实需要一些检测功能，那么正规 Map会是更好的选择，只是一定要确保留意内存的使用。





1. Set 是无重复值的有序列表。根据 `Object.is()`方法来判断其中的值不相等，以保证无重复。 Set 会自动移除重复的值，因此你可以使用它来过滤数组中的重复值并返回结果。 Set并不是数组的子类型，所以你无法随机访问其中的值。但你可以使用`has()` 方法来判断某个值是否存在于 Set 中，或通过 `size` 属性来查看其中有多少个值。 Set 类型还拥有`forEach()`方法，用于处理每个值。
2. Weak Set 是只能包含对象的特殊 Set 。其中的对象使用弱引用来存储，意味着当 Weak  Set中的项是某个对象的仅存引用时，它不会屏蔽垃圾回收。由于内存管理的复杂性， Weak Set的内容不能被检查，因此最好将 Weak Set  仅用于追踪需要被归组在一起的对象。
3. Map 是有序的键值对，其中的键允许是任何类型。与 Set 相似，通过调用 `Object.is()`方法来判断重复的键，这意味着能将数值 5 与字符串 "5" 作为两个相对独立的键。使用`set()` 方法能将任何类型的值关联到某个键上，并且该值此后能用 `get()` 方法提取出来。Map 也拥有一个 `size` 属性与一个 `forEach()` 方法，让项目访问更容易。
4. Weak Map 是只能包含对象类型的键的特殊 Map 。与 Weak Set 相似，键的对象引用是弱引用，因此当它是某个对象的仅存引用时，也不会屏蔽垃圾回收。当键被回收之后，所关联的值也同时从 Weak Map 中被移除。

![](C:%5Ctypro-images%5C2615789-677c9382b37392f5)