Array.prototype.myMap = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let value = callBack(this[i], i, this);
    result.push(value);
  }
  return result;
};

Array.prototype.myFilter = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callBack, initialValue) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }
  let accumulator;
  let i = 0;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    accumulator = callBack(accumulator, this[i], i, this);
  }
  return accumulator;
};

Array.prototype.myForEach = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

Array.prototype.mySome = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

Array.prototype.myEvery = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (!callBack(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

Array.prototype.myFind = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      return this[i];
    }
  }
  return;
};

Array.prototype.myFindIndex = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myFlat = function (depth = 1) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    //when it finds an element that is an array, it checks if it has arrays inside it to flatten them, otherwise it continues with the original array
    if (Array.isArray(this[i]) && depth > 0) {
      result.push(...this[i].myFlat(depth - 1));
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myFlatMap = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("callBack must be a function");
  }
  // return this.myMap(callBack).myFlat(1);
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let val = callBack(this[i], i, this);
    if (Array.isArray(val)) {
      result.push(...val);
    } else {
      result.push(val);
    }
  }

  return result;
};
export default {};
