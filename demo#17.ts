function join<T>(a: T, b: T) {
    return `${a} ${b}`;
}
console.log(join<string>("wqd", "hello"));

function getArr<T>(arr: Array<T>) {
    return arr;
}
console.log(getArr<number>([1, 2, 3]));