
// //Table of Content :Using Union Types OR Using Type Assertion


// const singleTypeArr: string[] = [ //define array with single type 
//     "GFG",
//     "TypeScript",
// ];

// //Using Union Types
// const multiTypeArr: ( //define array with multi types
//     | number
//     | string
//     | boolean
// )[] = [12, "GFG", true, "TypeScript"];

// // console.log(singleTypeArr);
// // console.log(multiTypeArr);


// //Using Type Assertion
// const mixedArr = [120, "GFG", true, "TypeScript"] as (number | string | boolean)[];

// // console.log(mixedArr); 

// //---------------------------------------------------------------------------
// //TypeScript function types define the structure of a function, including its parameter types and return type,
// // ensuring consistent and type-safe usage.
// //Help validate the types of parameters passed to a function.
// //Ensure the function returns the expected type.
// //Improve code clarity and prevent runtime errors.

// function add(a: number, b: number): number {
//     return a + b;
// }
// // console.log(add(3,4));

// //Optional parameters in TypeScript allow functions to be called without specifying all arguments, enhancing flexibility and code readability.
// let products = [
//     { name: "Pizza", description: "Cheesy pizza with fresh toppings", price: 10 },
//     { name: "Burger", description: "Grilled beef burger with cheese and vegetables", price: 7 },
//     { name: "Ice Cream", description: "Vanilla and chocolate flavored ice cream", price: 5 }
// ];


// function ShowProducts()
// {
//     let productList = document.getElementById("productList");

//     if (productList) {

//         for (let i = 0; i < products.length; i++) {
//             let product = products[i];
//             productList.innerHTML +=  `${product.name}: ${product.description} - ${product.price}

//             <br>`

//         }
//     }
// }


//================================ Task 1 =========================================
//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
// interface person {
//     Name: string;
//     Age: number;
// }

// const ObjPerson : any= {
//     Name:"Rahaf",
//     Age : 18,
// }
// const Rahaf = <person> ObjPerson;

// if(Rahaf.Age > 18)
//     console.log("Adult");
// console.log("Minor");



//================================ Task 2 =========================================
// //Task 2: Iterate Through an Array in an Interface
//You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// interface Teacher{
//     Name:string,
//     Subjects: string[];
// }

// let teacher1: Teacher={
//     Name: "Sajeda",
//     Subjects: ["Math","Languages"]
// } 

// function printTeacher(teacher){
// for (const element of teacher.Subjects) {
//     console.log(element);
// }}

// console.log("The Teacher name is "+ teacher1.Name + " And her/his subjects are :"  );
// printTeacher(teacher1);


//================================ Task 3 =========================================
//Task 3: Modify Object in an Array of Interfaces
//You are given an array of Product interfaces, where each product has a name, price, and quantity.
//Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface Product {
//     Name: string;
//     Price: number;
//     Qauntity: number;
// }
// let products: Product[] = [
//     { Name: "PC", Price: 500, Qauntity: 10 },
//     { Name: "Laptop", Price: 750, Qauntity: 10 },
//     { Name: "SmartPhone", Price: 300 , Qauntity: 1 }
// ]

// for (const element of products) {
//     if (element.Qauntity > 5)
//         element.Price = element.Price * .85;
//     console.log(element.Price);
// }

//================================ Task 4 =========================================
//Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product
// and when you submit the form it will save the product inside array in the local storage 
// and then display all the products as a cards under the form.

type Product = {
    name: string;
    description: string;
    price: number;
    quantity: number;
};
document.getElementById('subBtn')?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    SetProductInfo();
    getProductInfo(); // حتى تحدث قائمة المنتجات بعد الإضافة مباشرة
});

function SetProductInfo() {

 
    const inputName = document.getElementById("name") as HTMLInputElement;
    const inputPrice = document.getElementById("price") as HTMLInputElement;
    const inputDescription = document.getElementById("description") as HTMLInputElement;
    const inputQuantity = document.getElementById("quantity") as HTMLInputElement;

    const newProduct: Product = {
        name: inputName.value,
        description: inputDescription.value,
        price: parseInt(inputPrice.value),
        quantity: parseInt(inputQuantity.value)
    };

    // Get existing products array from localStorage or initialize an empty array
    const existingProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    // Add the new product to the array
    existingProducts.push(newProduct);

    // Save the updated array back to localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    alert('Product added successfully!');
    (document.getElementById('productForm') as HTMLFormElement).reset(); // Clear form
}



function getProductInfo() {
    // استرجاع المنتجات من Local Storage
    const existingProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    // تحديد العنصر اللي رح نعرض فيه المنتجات
    const productContainer = document.getElementById('productList');
    if (!productContainer) return; // لو العنصر مش موجود، ما تكمل

    // تفريغ المحتوى الحالي
    productContainer.innerHTML = '';

    // عرض المنتجات
    for (const product of existingProducts) {
        productContainer.innerHTML += `
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <hr>
            </div>
        `;
    }
}

