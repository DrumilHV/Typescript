# Types in Typescript

## [Documentation (click to see Docs)](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

1. You can use type `any` to ignore all the errors thrown at you, especially when you dont want to write a massive type declaration to explain ts.
2. Ts make's a lot of sense when you work in teams so all of team members are on the same page.
3. Basic syntax

```ts
let variableName: type = value;
```

4. <span style="color:red">**_Read the documentation!!!_** </span>
5. There is no `int` and `float` type in js or ts its just a `number` type.
6. When we define the types in ts we get sugessions for that kind of type only. We therefour are able to prevet a lot of errors.
7. Type inference, it's differnet from js because ts is interpreting the type, where as in js the interpreter decides the type.

```ts
let num: number = 9.9;
//it's to redundent to do so insted to this
let num = 9.9;
//ts can understand its a number type
```

8. When you don't give any type to a variable ts assums it to be any and it can break your code in the future.
