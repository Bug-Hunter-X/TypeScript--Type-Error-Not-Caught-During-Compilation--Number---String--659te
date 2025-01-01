function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error, but compiles without error in some cases
console.log(result); //outputs NaN, unexpected behavior