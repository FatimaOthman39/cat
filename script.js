


async function getCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const categories = await response.json();
        const categoriesDiv = document.getElementById('categories');

        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.textContent = category;
            categoriesDiv.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        const productsDiv = document.getElementById('products');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <strong>Category: ${product.category}</strong>
                <br>
                <strong>Price: $${product.price}</strong>
            `;
            productsDiv.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


async function getProductsByCategory(category) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        console.log(data.products);
    } catch (error) {
        console.error(`Error fetching products for category "${category}":`, error);
    }
}

async function initialize() {
    await getCategories();
    await getProducts();
}


initialize();
