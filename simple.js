function sum(i) {
    if (i == 1) {
        return 1;
    }

    return i + sum(i - 1);
}

console.log(sum(10));

/*
    5 + sum(4)
    5 + 4 + sum(3)
    5 + 4 + 3 + sum(2)
    5 + 4 + 3 + 2 sum(1)
    5 + 4 + 3 + 2 + 1
    */