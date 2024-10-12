function arrayMultiplos(numero, nMultiplos)
{
   if
   (!(typeof numero == 'number') || !(typeof nMultiplos == 'number')) return;

   let result = [];

   for (let index = 1; index <= nMultiplos; index++) {
      result.push((index * numero))
   }

   return result;
}

let result1 = arrayMultiplos(2, 10);
let result2 = arrayMultiplos(17, 6);
let result3 = arrayMultiplos('a', 6);
let result4 = arrayMultiplos(17, '2');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);