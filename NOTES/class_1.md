# Typescript

1. its only a dev tool you can <span style="color:red">**never ever**</span> use it in production. Your Broweser <span style="color:red"> dosen't understand Typescript</span> !!
2. You can install it using `npm install -g typescript`.
3. You can transpile ts to js using `tsc <file_name.ts>`.
4. When you use it with the projects you use `npm install typescript --save-dev`.
5. Even if your code gives you error in ts , you can still transpile it into .js using the above command (nothing is stopping you to write a errourous js code using ts).
6. You will see an error message before seeing the output file , but the file will still be transpiled.
7. `tsc <command>` is like `gcc <command>` you can tell typescript to so do some actions like `tsc --version`.
8. You can add your preferences in tsconfig file.
