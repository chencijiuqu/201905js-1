/*
* 目标：
*   1. 理解函数作用
*   2. 掌握函数声明语法
*   3. 掌握函数执行语法
*   4. 函数多次执行互相独立
* */


 // -> 函数：在计算机语言中，函数是拥有固定功能和逻辑的代码块，它只需要声明一次，等到需要这些功能时就执行这个函数就可以了，而且可以无限次执行。在面向对象的语言中函数也叫做方法。



// 2. 函数语法：
/*
* 标准函数语法：
* 函数能发挥作用，是由两部分组成的：
* 1. 函数声明：
*   1.1 使用function 关键字声明函数，
*   1.2 fn	叫做函数名
*   1.3 (a, b) 叫做形参入口，a b 叫做形参，形参是非必须的
*   1.4 函数中的 {} 叫做函数体。把我们需要的功能和逻辑写在函数体中
* 2. 函数执行：函数声明后并不会发挥作用，即函数体中的代码不会执行。所以要想发挥作用，我们还需要让函数执行。
*   2.1 函数执行语法：函数名(实参); 实参也是非必须的；
*   2.1 函数执行表示让函数体里面的代码执行，此外 函数名()  这个表达式还表示函数执行后留下的结果；
*   2.3 关于函数执行的注意事情，函数可以多次的执行，每次执行都是独立的，不存在互相影响。
*
* */
function fn(a, b) {}

// 4. 函数的参数机制

// => 【连接词】：对比我们写的函数和isNaN，我们也想要我们给它什么，函数帮我们处理什么。

/*
* 参数就是函数的入口，当我们在函数中封装一个功能，我们希望我给它什么，它帮我们处理什么。配合函数的声明和执行两部分，参数对应这两部分也有两个部分：
* 函数声明阶段: 形参，形参是函数内部的变量，它也是用来代表和存储值的；
* 函数执行阶段：实参，实参是给形参赋值的具体值。就是说函数执行时，形参所代表的具体的值。
*
* */

function sum(a, b) {
	var total = 0;
	total = a + b;
	console.log(total)
}


























