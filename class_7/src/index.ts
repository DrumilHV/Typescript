class User {
  email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const u1 = new User("abc@def.com", "abc");
