interface User {
  email: string;
  userId: number;
  googleId?: string; //'?' means it's optional.
  getId?: () => string; //one of the ways to define getId is a function and returns string.
  getCupon(cuponname: string): number;
}
const user1: User = {
  email: "abc@def.com",
  userId: 11,
  googleId: "ahheir8839=-9d338ce99d",
  getCupon(name: "code10") {
    // you can change the name of the argument it still works.
    return 10;
  },
};
interface Costumer {
  firstName: string;
  lastName: string;
  hashedPassword: string;
  createdAt: string;
}

type futureUser = Pick<Costumer, "firstName" | "lastName">; // futureUser will have only tow fields firstName and lastName.
type deletedUser = Omit<Costumer, "hashedPassword">; // deletedUser will have firstName and lastName and createdAt and NO hashedPassword field.

type newUser = Omit<User, "hashedPassword"> & {
  createdAt: Date;
};
