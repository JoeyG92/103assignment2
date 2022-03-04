let productName;
let quantity;
let price;
let priceTotal;

productName=prompt("Enter the product's name");
quantity=prompt("Enter the quantity");
price=Number(prompt("Enter the price"));
priceTotal=Number(price*0.16);


console.log(productName,quantity,price,priceTotal);
