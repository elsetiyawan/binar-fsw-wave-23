const returnHelloWorld = (name) => {
  return "Hello " + name + "!";
};

const isMoreThan5 = (input) => {
  if (input > 5) {
    return true;
  } else {
    return false;
  }
};

const substract = (x, y) => {
  if (typeof x != "number" || typeof y != "number") {
    return "X or Y is not a number";
  }
  return x - y;
};

module.exports = {
  returnHelloWorld,
  isMoreThan5,
  substract,
};
