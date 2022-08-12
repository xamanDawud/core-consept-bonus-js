let phones = [
    { name: "Samsung j4+", price: 15000 },
    { name: "Samsung A2", price: 15000 },
    { name: "Walton j4+", price: 15000 },
    { name: "Oppo 7x+", price: 15000 },
    { name: "Iphone 13", price: 110000 },
    { name: "Iphone 14", price: 115000 },
    { name: "Nothing Phone", price: 15000 },
];

function matchedSearched(phones, search) {
    let res = [];
    for (const phone of phones) {
        if (phone.name.toLowerCase().includes(search.toLowerCase())) {
            res.push(phone);
        }
    }
    return res;
}

const result = matchedSearched(phones, "iphone");
console.log(result);