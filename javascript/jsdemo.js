var a;
console.log(a)
const c=10;
{
    var d=11;
    console.log(d)
    console.log(c)
}
console.log(d)
function hello(user='Guest'){
    console.log('Hello $(user)');
}
hello('rudranshi');
const add=(a=5, b=6)=>a+b
console.log(add());
function f1(user, callback){
    console.log('Hello $(user)');
    callback();
}
f1('admin', add(3.5));