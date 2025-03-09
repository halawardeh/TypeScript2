// //Table of Content :Using Union Types OR Using Type Assertion
var _a;
function SetProductInfo() {
    var inputName = document.getElementById("name");
    var inputPrice = document.getElementById("price");
    var inputDescription = document.getElementById("description");
    var inputQuantity = document.getElementById("quantity");
    var newProduct = {
        name: inputName.value,
        description: inputDescription.value,
        price: parseInt(inputPrice.value),
        quantity: parseInt(inputQuantity.value)
    };
    // Get existing products array from localStorage or initialize an empty array
    var existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    // Add the new product to the array
    existingProducts.push(newProduct);
    // Save the updated array back to localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));
    alert('Product added successfully!');
    document.getElementById('productForm').reset(); // Clear form
}
(_a = document.getElementById('subBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.preventDefault();
    SetProductInfo();
    getProductInfo(); // حتى تحدث قائمة المنتجات بعد الإضافة مباشرة
});
function getProductInfo() {
    // استرجاع المنتجات من Local Storage
    var existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    // تحديد العنصر اللي رح نعرض فيه المنتجات
    var productContainer = document.getElementById('productList');
    if (!productContainer)
        return; // لو العنصر مش موجود، ما تكمل
    // تفريغ المحتوى الحالي
    productContainer.innerHTML = '';
    // عرض المنتجات
    for (var _i = 0, existingProducts_1 = existingProducts; _i < existingProducts_1.length; _i++) {
        var product = existingProducts_1[_i];
        productContainer.innerHTML += "\n            <div>\n                <h3>".concat(product.name, "</h3>\n                <p>").concat(product.description, "</p>\n                <p>Price: $").concat(product.price, "</p>\n                <p>Quantity: ").concat(product.quantity, "</p>\n                <hr>\n            </div>\n        ");
    }
}
