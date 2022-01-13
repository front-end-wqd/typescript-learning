interface P {
    name: string;
    age: number;
    sex?: string; // 可选的值
}

const message = {
    name: "wqd",
    age: 26,
    sex: "male",
};

const filterMessage = (person: P) => {
    if (person.age < 18) {
        console.log("未成年人");
    } else {
        console.log("成年人");
    }
    if (person.sex) {
        console.log(person.sex);
    }
};

const getMessage = (person: P) => {
    console.log(person.name + person.age);
};

filterMessage(message);
getMessage(message);