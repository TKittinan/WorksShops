let price = 1500;
let discount = 0.2;
afterprice = price - (price * discount);

if (afterprice == 0){
    afterprice1 = 0;
}
else if (afterprice <= 500){
    afterprice1 = afterprice + 50;
}
else if(afterprice > 500){
    afterprice1 = afterprice - (afterprice * 0.1);
}
console.log(afterprice1);