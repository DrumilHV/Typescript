# Union Type

1. Helps avoid `any` type.

```ts
const score: number | string = 33; //allowed
score = "55"; //allowed
```

2. **_If in this case you try to do_**

```ts
function getDbId(id: number | string) {
  id.toLowerCase(id); //typescript will give error, NOT ALLOWED !, because ts considers id to be OF NEW DATA TYPE 'number | string' type and not 'number' or 'string' data type.
  if (typeof id === "string") {
    id.toLowerCase(id); //allowed because now ts is sure that if you reach here then id is STRING.
  }
}
```

3. ### Array with multiple types.

```ts
const data1: numbers[] = [1, 2, 3]; //Allowed
const data2: string[] = ["1", "2"]; //Allowed
const data3: string | numbers[] = ["1", "2", 3]; // NOT Allowed
const data3: (string | numbers)[] = ["1", "2", 3]; // Allowed!!
```

4. Define fixed values

```ts
let seatAllotment: "ailes" | "middle" | "window"; // you can only have one of these three not anything else.
seatAllotment = "crew"; //NOT ALLOWED !!
```

# Tuples

1. When you want an array of mixed data type and the data should be in a specifc order, then use typles

```ts
let user: [string, number, boolen];

user = ["Drumil", 11, true]; //ALLOWED
user = [true, 12, "abc"]; // NOT ALLOWD ! , you need to maintain the specific order.
```

2. Tuples comes with it's own challanges, such as when we push to tuples, we can break the schema and it will allow us to do so.

```ts
type user = [number, string];
const newUser: user = [1, "abc@gmail.com"]; //allowed
newUser[1] = "def@gmail.com"; //Allowed (dosen't make sense but allowed !)
newUser.push(true); // Allowed (dosen't make sense but allowed !)
```

3. A possible work around for this is given below but its more trouble than its worth.

```ts
onst x: StrictTuple<[number, string]> = [1, ""] // {0: number; 1: string }
x[1] = "okay";
x[0] = 123;
x.push(123); // error!
//~~~~ Property 'push' does not exist on type { 0: number; 1: string; }
```

# Enums (Enumeration)

1. Used to define some constan values which can't be changed.

```ts
enum SeatChoise {
  AIELS,
  MIDDLE,
  WINDOW,
}
```

2. We can do a lot of play around with this code to get a good use out of it like

```ts
enum SeatChoise {
  AIELS = "ailes",
  MIDDLE = "middle",
  WINDOW = "window",
}
// if you assign string value then you have to provide values to all of them , but if you assign a number value the subsecuent values are assigned by ts
enum SeatChoise {
  AIELS = "ailes",
  MIDDLE = 1,
  WINDOW, // WINDOW is assigned 2
}
enum SeatChoise {
  AIELS = 11,
  MIDDLE = 22,
  WINDOW = 33,
}
```
