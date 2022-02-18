interface Stduent {
    isAdult: boolean;
    study: () => {};
}
interface Teacher {
    isAdult: boolean;
    teach: () => {};
}
function judge(person: Stduent | Teacher) {
    if (person.isAdult) {
        (person as Teacher).teach();
    } else {
        (person as Stduent).study();
    }
}