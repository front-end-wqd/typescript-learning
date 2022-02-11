// public private protected

class A {
    public name: string = "";
}

class B extends A {
    say() {
        console.log(this.name);
    }
}

const people = new A();
people.name = "wqd";
console.log(people.name);