let greetings: string = "Hello Drumil";

console.log(greetings);
let num: number = 393939.454;

console.log(num);

let hero;

// in the above line you let ts assume hero to be 'any' type

function getHero() {
  return "thor";
}
// the above function returns string

hero = getHero();
//hero being any type it will take string
hero = 11;
//it also takes number , so always assign types, or use
// 'noImplisitAny' in tsconfig file.
export {};
