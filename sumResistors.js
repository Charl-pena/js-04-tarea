

function sumResitance(arrResis)
{
   let aR = Array.from(arrResis);
   return aR.reduce((acc, cur, i) => (typeof cur === 'number') ? (i+1 === aR.length) 
      ? acc += " ohms" : Math.abs(acc) + Math.abs(cur) : acc, 0 );
}


let result1 = sumResitance([-1,5,6,3]);
let result2 = sumResitance([14,3.5, 6]);
let result3 = sumResitance([8,15,100]);

console.log(result1);
console.log(result2);
console.log(result3);