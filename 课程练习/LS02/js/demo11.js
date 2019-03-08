/**
 * Created by qile on 2017/8/14.
 */
//Part 1
console.log(Boolean(undefined));//flase
console.log(Boolean(null));//flase
console.log(Boolean(0));//flase
console.log(Boolean(NaN));//flase
console.log(Boolean(1));//true
console.log(Boolean(""));//true
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true

if(new Boolean(false)){
    console.log("执行");
}

//Part 2
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));

//Part 3
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));//[object Object]