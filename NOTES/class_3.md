# Functions and Unpredicatable Behavior

1. Whenever you are using any functions you need to pass in the type compulsary.

```ts
function addTwo(num) {
  //num will be assumed to be any
  num.toUpperCase();
  //the above will convert the num to string
  //you can also pass a string in num and it will accept it
  return num + 2;
}
// insted do this
function addThree(num: number) {
  num.toUpperCase();
  // ts will not allow to do the above line.
  return num + 3;
}
```

2. If I don't return any thing from a function I neet to put a void type to prevert me from accidentally returning a value

```ts
function consoleErrMessage(errMsg): void {
  console.log(errMsg);
}
```

3. We use `never` mostly when we are try ing to forcefully terminate the execution or throwing an error it's very similar to void and yet different.<span style="color:red"> In a return type, this means that the function throws an exception or terminates execution of the program</span>.

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

4. We have some unpredictable behaviour with ts like

```ts
function createUser({ name: string, isPaid: boolean }) {}

//the following is not allowed as ts will throw error
createUser({ name: "Drumil", isPaid: true, email: "abc@gmail.com" });

//but the following is allow for some unknow reason, unpredictable behavour of ts starts
let user = { name: "Drumil", isPaid: true, email: "abc@gmail.com" };
createUser(user);
```

# Readonly

1. we have keyword readonly which does not allow any changes to this field. You can read only in ts ,<span style="color:red"> **_but in js you can still modify the readonly filed, so be very carefull_**</span> !!

```ts
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};
let user1: User = {
  _id: "1234",
  name: "d",
  email: "d@g.com",
  isActive: false,
};
// followin is allowed
user1.name = "Hn";
//following is not allowed
user1._id = "12345";
```

2. <span style="color:red">**If readonly was an array , I can still push new things in the array** !!</span>
3.

## Arrays

1. When we make an `const SuperHeros = []` it is default assigned to type `never`, and we can push anything into it . If anythng is never type you can't modify it not even push an element into it.
2. If we do `const SuperHeros : [] = []` you are assiginig an empty array to an array type and it shall always remain empty , so again you can't push anything to it.
3. correct way to do so is `const SuperHeros: string[] = []` and then you can do all your operations.
4. Also another way is

```ts
const SuperHeros: Array<numbers> = [];
```

5. We can define array of arrays.

```ts
const MachineLearningModel[][] = [
  [0,1,1,1,1,0,0],
  [],
  ...
]
```
