function secretName(names)
{
   let arN = Array.from(names);
   arN = arN.map((cur, i, arr) => (typeof cur === "string" && cur.length > 0) ? cur[0] : "" );

   return arN.join('');
}

let result1 = secretName(["Esperanza","Franco", "Nia"]);
let result2 = secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']);
let result3 = secretName(['Harry', 'Ron', 'Hermione']);

console.log(result1);
console.log(result2);
console.log(result3);
