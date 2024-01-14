# Type Aliases

## Optional Fields

1. If we put `?` before the `:` it becomes an optional field.

```ts
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: string;
};
// allowed even without creditCardDetails
let user1: User = {
  _id: "1234",
  name: "d",
  email: "d@g.com",
  isActive: false,
};
```

## Combining Types

```ts
type cardNumber = {
  cardNum: number;
};
type cardDate = {
  date: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
//now I have to use all the 3 when we make cardDetails mandatorily because we used '&' (and) operator.
//It's a bad practise.
```
