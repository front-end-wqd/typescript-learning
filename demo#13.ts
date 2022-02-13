class Teacher {
    constructor(private _age: number) {}
    get age() {
        return this._age;
    }
    set age(age: number) {
        this._age = age;
    }
}

const teacher = new Teacher(10);
console.log(teacher.age);
teacher.age = 20;
console.log(teacher.age);