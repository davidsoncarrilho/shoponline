export async function getAllCategory() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return await categoryRes.json();
}

export async function getAllProducts() {
  const productRes = await fetch("https://fakestoreapi.com/products");
  return productRes.json();
}
