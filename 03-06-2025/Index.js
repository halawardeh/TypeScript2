//Task(1) ====================Identify if a Number is Even or Odd=====================
// let num=1;
// if(num%2==0)
//     console.log("This numer is even");
// console.log("This number is Odd");
//Filter Expensive Products from an Array
// let ProductPrices : number[]= [10,20,30];
// let threshold=15;
// for (const price of ProductPrices) {
//     if(price>threshold)
//         console.log(price);
// }
//Sum All Elements in an Array
var ProductPrices = [10, 20, 30];
var counter = 0;
for (var _i = 0, ProductPrices_1 = ProductPrices; _i < ProductPrices_1.length; _i++) {
    var price = ProductPrices_1[_i];
    counter += price;
}
console.log(counter);
