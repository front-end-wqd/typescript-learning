class Parent {
    text = "hello";
    say() {
        return this.text;
    }
}

class Child extends Parent {
    say() {
        return super.say() + " wqd";
    }
    sing() {
        return "sing";
    }
}

const log = new Child();
console.log(log.say());
console.log(log.sing());