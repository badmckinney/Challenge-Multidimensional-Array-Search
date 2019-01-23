function locate(array, target) {
  let located = false;
  let checkStack = [];
  checkStack.push(array);

  while (checkStack.length > 0) {
    let next = checkStack.pop();
    next.forEach(item => {
      if (item === target) {
        located = true;
      } else if (Array.isArray(item)) {
        checkStack.push(item);
      }
    });
  }

  if (located === true) {
    return true;
  } else {
    return false;
  }
}

module.exports = locate;
