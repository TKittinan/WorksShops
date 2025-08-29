let products = [
    {name : "A",price : "300",discount : "0.125"},
    {name : "B",price : "500",discount : "0.2"},
    {name : "C",price : "600",discount : "0.5"},
    {name : "D",price : "100",discount : "0.6"},
    {name : "E",price : "200",discount : "0.4"},
];
function calculateTotal(){
    let total = 0;
    
    products.forEach(product => {
        let afterprice = product.price - (product.price * product.discount);
        total += afterprice;
    });
    console.log("Total price after discount: $" + total.toFixed(2));
}

calculateTotal();