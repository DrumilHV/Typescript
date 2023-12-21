# Interfaces

```ts
interface User {
  email: string;
  userId: number;
  googleId?: string; //'?' means it's optional.
  getId?: () => string; //one of the ways to define getId is a function and returns string.
  getCupon(cuponname: string): number;
}
```

1. you define some of the properties that should be implemented but you dont care how its implemented.
2. you can reopen interface , that is you can add some thing to interface.

```ts
interface User {
  gitHubToken?: string;
}
```

3. We can also modify the interfaces using `Pick` and `Omit`

```ts
interface Users {
  firstName: string;
  lastName: string;
  hashedPassword: string;
  createdAt: string;
}

type futureUser = Pick<User, "firstName" | "lastName">; // futureUser will have only tow fields firstName and lastName.
type deletedUser = Omit<User, "hashedPassword">; // deletedUser will have firstName and lastName and createdAt and NO hashedPassword field.
```

4. We could Pick and Omit for limiting the infomation we are sharing with the api user.
5. We could use it to transform types of fields.

```ts
type newUser = Omit<User, "hashedPassword"> & {
  createdAt: Date;
};
```
