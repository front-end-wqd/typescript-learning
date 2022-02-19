class Select<T extends string | number> {
    constructor(private name: T[]) {}
    getName(index: number): T {
        return this.name[index];
    }
}
const select = new Select<string>(["A", "B", "C"]);
console.log(select.getName(1));