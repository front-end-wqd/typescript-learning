class Girl {
    constructor(public name: string) {}
}

class Boy extends Girl {
    constructor(public age: number) {
        super("wqd");
    }
}

const boy = new Boy(10);
console.log(boy);