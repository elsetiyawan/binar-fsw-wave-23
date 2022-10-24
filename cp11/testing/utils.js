class Utils {
  add(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      return "cannot count";
    } else {
      return x + y;
    }
  }

  multiply(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      return "cannot count";
    } else {
      return x / y;
    }
  }

  concatFullname(firstName, lastName) {
    if (firstName == undefined || firstName == null || firstName == "") {
      return "firstName is required";
    }
    if (lastName == undefined || lastName == null || lastName == "") {
      return "lastName is required";
    }
    return `${firstName} ${lastName}`;
  }

  splitFullname(fullName) {
    const arrayName = fullName.split(" ");
    if (arrayName.length === 1) {
      return "fullName require more than 1 word";
    } else {
      return {
        firstName: arrayName[0],
        lastName: arrayName[arrayName.length - 1],
      };
    }
  }
}

module.exports = new Utils();
