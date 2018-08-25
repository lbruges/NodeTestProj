var faker = require("faker");

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");

function getProducts(numOfProd) {
    for(var i=0; i<numOfProd; i++) {
        console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));
        //console.log(faker.commerce.product());
    }
}

getProducts(10);