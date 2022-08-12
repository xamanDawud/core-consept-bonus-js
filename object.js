let nayoks = {
    name: "Shakib Khan",
    address: "New Yourk",
    nationality: "Bangladesh",
    eighteenToNineteen: [
        { name: "Tui Sudu Aamar ", date: 2018 },
        { name: "Toke chara Bachbona Ami ", date: 2019 },
    ],
    movies: ["No.1 Shakib Khan", "1 Takar Kabin", "Bachbona More jabo"],
    car: {
        name: "Aliion 15",
        company: "Toyota",
        price: "50000000",
        model: 2021,
        updated_mode: {
            name: "Allion - 16",
            companu: "ZXR",
        },
    },
    king: function() {
        let value = "";
        for (let i = 0; i < this.eighteenToNineteen.length; i++) {
            let element = this.eighteenToNineteen[i];
            let getValue = element.name + element.date;
            value += getValue;
        }
        return value;
    },
};
console.log(nayoks.king());