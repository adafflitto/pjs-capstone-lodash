// The following mimic methods from the lodash.js library using ordinary javascript functionality.

let _ = {};

// _.clamp utilizes Math min and max methods to assign a given number a value between to given minimum and maximum values (inclusive), 
// or the same value if the original number falls in that range.
_.clamp = (num, min, max) => {
	const lowerClampedValue = Math.max(num, min);
	const clampedValue = Math.min(lowerClampedValue, max);
	return clampedValue;
};

// _.inRange checks to see if a given number falls withing given start and end values (inclusive) using if statements and
// comparison operators. If no end value is given, end value is set to the start value and start is set to 0.
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
        let isInRange = (number >= start && number <= end);
        return isInRange;
};

// _.words utilizes the .split() method to take a given string and return an array of each word in the string.
_.words = string => {
	return string.split(' ');
};

// _.pad returns a string with a given number of added spaces as "padding" on each side of the string. 
// If the amount of spacing is uneven, the extra space is added to the end of the string.
_.pad = (string, length) => {
	if (string.length > length) {
    	return string;
    }
    let begpadding = Math.floor((length - string.length) / 2);
    let endpadding = length - string.length - begpadding;
    let paddedString = ' '.repeat(begpadding) + string + ' '.repeat(endpadding);
    return paddedString;
};

// _. checks to see if a given object contains a truthy value at the given key. If so, it returns true. If not, it returns false.
_.has = (obj, key) => {
	let hasValue = obj[key] !== undefined;
    return hasValue;
};

// _.invert takes a given object and inverts each key/value pair using a for...in statement
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

// _.findKey uses another find...in statement to loop through a given object's key/value pairs and return the first truthy value.
// If no truthy values are found, it returns undefined.
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

// _.drop uses the .slice() method to remove a given number of objects from an array starting at index [0].
// If no number is given, an if statement sets the number to equal 1.
_.drop = (array, n) => {
	if (!n) {
    	n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
};

// _.dropWhile passes a function into the .findIndex() method in order to find falsey values in a given array; then uses the previously
// constructed _.drop method to drop values starting at the beginning of the array up to the falsey value.
_.dropWhile = (array, predicate) => {
	let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = _.drop(array, dropNumber);
    return droppedArray;
};

// _.chunk breaks up a given array into an array of "chunks" of a given size using a for loop. 
// An if statement checks to see if a given size of "chunk" is given; and, if not, sets it to equal 1.
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
};

module.exports = _;
