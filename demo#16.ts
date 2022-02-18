enum Status {
    start,
    stop,
    finish,
}
function getStatus(status: any) {
    if (status === Status.start) {
        return "start";
    } else if (status === Status.stop) {
        return "stop";
    } else if (status === Status.finish) {
        return "finish";
    }
}
console.log(getStatus(2));