type Point = { x: number; y: number };
type P = keyof Point; 

interface Test4 {
    a?: string;
    b?: number;
}

interface Test3 extends Test4 {
    c?: number;
    a?: string;
}

const test = {
    x: 1212,
    y: 323232
};

const test2: P = "x";

type Test55 = keyof typeof test; 

const test32: Test55 = "x";

console.log(test, test2, test32);



