
const input = { a: 1, b: 2, c: 3 };

const output = Object.keys(input).map(key => ({ [key]: input[key] }));

console.log(output);


//second problem


const input1 = [{ a: 1 }, { b: 2 }, { c: 3 }];

const output1= Object.assign({}, ...input1);

console.log(output1);


