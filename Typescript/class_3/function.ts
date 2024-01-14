function addTwo(num) {
  //num will be assumed to be any
  num.toUpperCase();
  //the above will convert the num to string
  //you can also pass a string in num and it will accept it
  return num + 2;
}
// insted do this
function addThree(num: number) {
  //num.toUpperCase();
  // ts will not allow to do the above line.
  return num + 3;
}

addTwo(8);
addThree(4);

//specify the return type of the function
const getHello = (s: string): string => {
  return "";
};

let heros = ["ironMan", "espiderman", "batman"];

//now if we see the type of array heros is ts will show its string type
heros.map((hero): string => {
  return `the Hero is ${hero}`;
});
// ----------------------------------
// heros = [1,2,3,4]
// heros.map((hero): number =>{
//     return hero
// } )

// In the above code ts will auto switch context to believe hero.s is number type array
// so we dont nessarrarly need to show heros.map((hero:number) => {...})
// -------------------------

export {};
