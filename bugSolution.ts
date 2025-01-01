function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number | string {
  if (typeof b === 'string') {
    const parsedB = parseFloat(b);
    if (isNaN(parsedB)) {
      return `Error: Cannot add number and non-numeric string.`;
    }
    return a + parsedB;
  } else {
    return a + b;
  }
}

let result1 = addSafe(5, '10');
console.log(result1); // Output: 15

let result2 = addSafe(5, 'hello');
console.log(result2); // Output: Error: Cannot add number and non-numeric string.

let result3 = addSafe(5, 10);
console.log(result3); // Output: 15