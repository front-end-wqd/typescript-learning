class Stduent {
    public readonly _name: string;
    constructor(name: string) {
        this._name = name;
    }
}

const stduent = new Stduent("wqd");
console.log(stduent._name);

abstract class Base {
    abstract skill(): void
}
class C extends Base {
    skill() {}
}
class D extends Base {
    skill() {}
}
class E extends Base {
    skill() {}
}