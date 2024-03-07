// Find the object whose property "Y" has the greatest value in an array of objects

const products = [
    {name: "Product 1", category: "Electronics", price: 200},
    {name: "Product 2", category: "Electronics", price: 500},
    {name: "Product 3", category: "Books", price: 30},
    {name: "Product 4", category: "Books", price: 40},
    {name: "Product 5", category: "Furniture", price: 700},
    {name: "Product 6", category: "Furniture", price: 800} 
    ];
    const max = products.reduce(function(prev, current) {
        return (prev > current) ? prev : current
    }) //returns object
    console.log(max)