function locate(array, target) {
  let located = false;
  let checkStack = [];
  checkStack.push(array);

  while (checkStack.length > 0) {
    let next = checkStack.pop();
    next.some(item => {
      if (item === target) {
        located = true;
      } else if (Array.isArray(item)) {
        checkStack.push(item);
      }
    });
  }

  return located;
}

module.exports = locate;

// const isArray = Array.isArray(array);

// if (!isArray) {return array === target; }
// else if (isArray && array.length <= 0) { return false; }

//   return array.some((current) => {
//     return locate(current, target);
//   });
