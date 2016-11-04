function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;}
      array[i] = changeValue;
  }
  return array
  }

  function keepGoing(array, changeValue, stopValue) {
    for (let i=0; i < array.length; i++) {
      if (array[i] === stopValue) {
        continue;
      }
      array[i] = changeValue;
    }
    return array
  }

  function findBy(array, findFn)  {
    for (let i = 0; i < array.length; i++ ) {
      if (findFn(array[i])) {
        return array[i]
      }
      return null  
    }

  }

// findBy(["dog", "cat", "cow"], a => a === "moose")



// findBy(array, findFn) which looks for a value in array based on the return value of findFn. Return null if the value isn't found.
