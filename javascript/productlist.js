// -----------------------------
// 1. Product data
// -----------------------------
const products = [
	{ id: 1, name: "FYM3021 Shirt", category: "Clothing", price: 350, description: "Comfy T-shirt with bold FYM3021 print." },
	{ id: 2, name: "FYM3021 Hoodie", category: "Clothing", price: 499, description: "Stylish hoodie in black with FYM3021 logo." },
	{ id: 3, name: "FYM3021 Sportswear", category: "Category", price: 150, description: "Stay hydrated with style." }
];

// -----------------------------
// 2. Display products function
// -----------------------------
function displayProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = ""; // Clear previous products

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>R${product.price}</strong>
      <a href="enquiry.html" class="btn">Enquire</a>
    `;
    container.appendChild(card);
  });
}

// -----------------------------
// 3. Filter and search
// -----------------------------
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort");

function filterAndSortProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  let filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchText) &&
    (category === "all" || p.category === category)
  );

  // Sorting
  if (sortSelect.value === "price-asc") filtered.sort((a,b) => a.price - b.price);
  else if (sortSelect.value === "price-desc") filtered.sort((a,b) => b.price - a.price);
  else if (sortSelect.value === "name-asc") filtered.sort((a,b) => a.name.localeCompare(b.name));

  displayProducts(filtered);
}

// -----------------------------
// 4. Event listeners
// -----------------------------
searchInput.addEventListener("input", filterAndSortProducts);
categorySelect.addEventListener("change", filterAndSortProducts);
sortSelect.addEventListener("change", filterAndSortProducts);

// -----------------------------
// 5. Initial display
// -----------------------------
displayProducts(products);
