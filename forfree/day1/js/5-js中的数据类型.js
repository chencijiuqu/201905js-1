/*
* 目标：
*   1. 理解js中数据分类：基本数据类型、引用数据类型（又称复杂数据类型、对象数据类型）
*   2. 掌握基本数据类型的细分类型
*   3. 掌握引用数据类型的具体细分
*
* */
/*
* 数据类型：就是js的原材料。我通过这些数据类型来实现我们想要的功能或者效果。
* I. 基本数据类型
*
* II. 引用数据类型（又称复杂数据类型、对象数据类型）
* */

// I. 基本数据类型
// 1.1 number 数字
var num = 12; // 13 0 -2 0.5 这些都是数字
var num2 = NaN; // NaN 也是number类的，Not A Number。表示非有效数字。

// 1.2 string 字符串
var str = '珠峰培训'; // 字符串是单引号或者双引号包裹的0到多个字符。
var str2 = ''; // 引号里面什么都没有叫做空字符串
var str3 = '   '; // 引号里面即便有空格也不再是空字符串
var str4 = "I am a FE"; // 双引号和单引号的字符串没有区别

// 1.3 boolean 布尔值：只有两个值 true （真）  false（假）
var boo = true;
var boo2 = false;

// 1.4 null 空：什么都没有
var empty = null;

// 1.5 undefined 未定义（很多浏览器的初始值是undefined）
var notDefined = undefined;

// 1.6 Symbol 产生一个唯一的值，和谁都不重复；ES6新增
var s1 = Symbol('珠峰');
var s2 = Symbol('珠峰'); // s1和s2虽然等号右边一样，但是是两个不同的变量
s1 == s2; // == 是比较，比较等号左右两侧是否相同，如果相同返回true，不相同返回false

// II. 引用数据类型
// 2.1 对象
// 2.1.1 普通对象：由花括号包裹着若干对 属性名: 属性值, 如果有多对属性名和属性值需要用逗号分隔；name,age,job 叫做属性名（又称 键，英文名 key），'周文颖' 18 'FE' 叫做属性值（又称 值，英文名：value）。所以对象又叫做键值对集合。
var student = {
  name: '周文颖',
  age: 18,
  job: 'FE'
};
var obj = {}; // 一个键值对都没有，叫做空对象

// 2.1.2 数组：由方括号包裹着的若干个数组项。
var ary = [1, 2, 3, 'y', 'FE'];
var ary2 = []; // 一个数组项都没有的叫做空数组

// 2.1.3 正则：正则是用来处理字符串的规则；两个斜线包裹着一堆元字符；
var reg = /^\d$/;
// var reg2 = //; 两个双斜线不叫空正则，叫单行注释

// 2.1.4 Date：js中用来处理时间日期的类型
var date = new Date(); // 这个创建date变量，它的值是日期；

// ....

// 2.2 函数: 需要重复执行或者有特殊功能的代码需要封装成函数；
function sum(a, b) {
  return a + b;
}
// function 关键字，用来声明函数变量的
// sum 函数名，函数名也是变量，只不过它代表的值是函数
// (a, b) 写在函数声明时函数名后面的小括号，叫做形参入口，a b叫做形参
// 函数声明时 {return a + b} 叫做函数体，里面放的都是函数需要执行的代码











