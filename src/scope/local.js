const helloWorld = () => {
  const hello = "hello World";
  console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "I am global";

const funtionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};
funtionScope();
