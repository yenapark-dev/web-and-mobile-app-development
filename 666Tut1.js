let f_older = 0;
let f_old = 1;
let n = 10;

//Display f2,...,fn
let fibonacci = function(n){
  let f_new;
  for(let i=2;i<=n;i++){
  f_new =f_old+f_older;
  console.log("F"+i+":"+f_new);
  f_older=f_old;
  f_old=f_new;
}
return f_new;
}
console.log(fibonacci(n));