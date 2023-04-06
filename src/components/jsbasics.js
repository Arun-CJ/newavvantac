const a = "Hello";

const fun1 = () => {
  console.log("function after settimeout completed");
};
const fun2 = () => {
  console.log("function after  settimeout and function1 completed");
};
const fun3 = () => {
  console.log("function after  settimeout and function2 completed");
};
const fun = () => {
  console.log("function inside settimeout");
  fun1(fun3(fun2(fun3())));
};

// Promise.then(() => )
setTimeout(fun, 2000);

console.log("written after settimeout");

// promise functionality

// resolve event and reject event

// promise.then(
//     promise.then()
// ).catch()

// Async and await

// setTimeout(fun, 2000).
