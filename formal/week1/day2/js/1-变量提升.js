/*
* js代码执行之前，会预先分析我们的js代码，这种机制成为变量提升（预解释）
*
*   js解析引擎执行分为两步
*   1. 变量提升
*   2. 执行
*
* */

/*
* 变量提升（预解释）
* 在js代码执行之前，对所有声明的变量 进行提前带var和带function变量进行提前声明和定义（赋值）；
*
* 对于带var的进行提前声明，不赋值（变量声明时不赋值，变量的默认值是undefined），只是浏览器知道有这么个变量。
*
* 对于带function的进行提前声明 并且赋值为函数定义本身
*
* 变量提升结束后，代码才会从上到下执行。
* 当执行到var 变量 = 值；时，此时才会对变量进行赋值，即在此之后变量才代表这个值本身，在此之前是undefined；
*
* 而当执行到function 函数名()... 时，跳过，因为在变量提升阶段就已经完成了对变量的赋值过程。
*
*
* */
console.log(num); // undefined 因为代码执行到这里时，num只是经过了变量提升阶段的声明，但是没有完成赋值，所以是undefined；

var num = 100; // 代码执行过这一行后完成了赋值，所以num是100
console.log(num);  // 100

console.log(fe); // 函数体本身，因为fe这个变量在函数执行时就已经赋值完成了，所以无论在函数声明前还是后使用都是函数本身
fe(); // 因为fe在变量提升阶段就已经完成了赋值，所以fe是一个函数，所以可以成功执行
function fe() {
	console.log('We are Front-end Engineer');
}















