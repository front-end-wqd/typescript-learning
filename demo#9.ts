interface Info {
    name: string;
    age: number;
    sex?: string; // 可选的值
    [propname: string]: any;
    say(): string;
}

interface Teacher extends Info {
    lesson: string;
}

class MyInfo implements Info {
    name = "wqd";
    age = 26;
    sex = "male";
    say() {
        return "welcome";
    }
}

const info = {
    name: "wqd",
    age: 26,
    sex: "male",
    say() {
        return "welcome";
    },
    lesson: "数学",
};

const filterInfo = (person: Info) => {
    if (person.age < 18) {
        console.log("未成年人");
    } else {
        console.log("成年人");
    }
    if (person.sex) {
        console.log(person.sex);
    }
};

const getInfo = (person: Teacher) => {
    console.log(person.name + person.age);
};

filterInfo(info);
getInfo(info);