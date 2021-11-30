function add(a: number, b: number): number {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);

function hello(): void {
    console.log("hello");
}

function getNumber({one}: {one: number}) {
    return one;
}
const value = getNumber({one: 1});