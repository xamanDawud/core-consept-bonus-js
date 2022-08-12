function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i];
        sum += element;
    }
    return sum;
}

console.log(add(23, 23, 23));