function numDiv(numero){
   if
   (numero % 2 !== 0) return;
   
   let mitad = numero /2;

   return [mitad, mitad];
}

let result1 = numDiv(4);
let result2 = numDiv(10);

console.log(result1);
console.log(result2);