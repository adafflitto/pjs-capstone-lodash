let _ = {};


_.clamp = (num, min, max) => {
	const lowerClampedValue = Math.max(num, min);
	const clampedValue = Math.min(lowerClampedValue, max);
	return clampedValue;
};



_.inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  };
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  };
  let isInRange = (number >= start && number < end);
  return isInRange;
};



_.words = string => {
  let arr = string.split(' ');
  return arr;
};



_.pad = (string, length) => {
  if (string.length > length) {
    return string;
  }
  let begpadding = Math.floor((length - string.length) / 2);
  let endpadding = length - string.length - begpadding;
  let paddedString = ' '.repeat(begpadding) + string + ' '.repeat(endpadding);
  return paddedString;
};



_.has = (obj, key) => {
  let hasValue = obj[key] !== undefined;
  return hasValue;
};



_.invert = object => {
  const invertedObject = {};
  let value = {};
  for (let key in object) {
    let originalValue = key.value;
    invertedObject.key = originalValue;
    invertedObject.originalValue = key;
  }
  return invertedObject;
};



_.findKey = (object, predicate) => {
  for (let key in object) {
    let value = object[key];
    let predicateReturnValue = predicate(value);
    if (predicateReturnValue) {
      return key;
    }
   return undefined;
 }
};



_.drop = (array, n) => {
  if (!n) {
    n = 1;
  }
  let droppedArray = array.slice(n);
  return droppedArray;
};



_.dropWhile = (array, predicate) => {
  let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
  let droppedArray = this.drop(dropNumber);
  return droppedArray;
};
//the dropWhile test kept sending back an error that this.drop is not a function.
//I tried _.drop and it sent an error that array.slice in the _.drop method is not a function, even though it passed all the tests.
//I tried reaching out to a moderator, or anyone, on Slack; but, I have not recieved any feedback.
//After googling and trying everything I could think of, I decided I had better submit this before the deadline passes.


_.chunk = (array, size) => {
  if (!size) {
    size = 1;
  }
  let arrayChunks = [];
  for (let i = 0; i < array.length; i+size) {
    let arrayChunk = array.slice(i, i += size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
} ;



module.exports = _;
