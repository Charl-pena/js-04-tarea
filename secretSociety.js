function secretName(names)
{
   let arN = Array.from(names);
   return arN = arN.map((cur, i, arr) => (typeof cur === "string" && cur.length > 0) 
      ? cur[0].toUpperCase() : "" ).sort().join('');
}

let result1 = secretName(["Esperanza","Franco", "Nia"]);
let result2 = secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']);
let result3 = secretName(['Harry', 'Ron', 'Hermione']);
let result4 = secretName(["chaco","ariel",12, "Nia", "Naomi", 0]);
let result5 = secretName(["chaco","",12, "Nia", "Naomi", 0, 2, "naomi"]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);