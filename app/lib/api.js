const API_BASE = "https://dummyjson.com/products";

export async function fetchProducts({ limit = 20, skip = 0 } = {}) {
  const res = await fetch(`${API_BASE}?limit=${limit}&skip=${skip}`, {
    next:{revalidate: 120},
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProduct(id) {
  const res = await fetch(`${API_BASE}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
  return res.json();
}

export async function fetchProductsByCategory(category, { limit = 10, skip = 0 } = {}) {
  const res = await fetch(`${API_BASE}/category/${category}?limit=${limit}&skip=${skip}`, {
    next: {revalidate: 120},
  });

  if (!res.ok) throw new Error(`Failed to fetch products for category ${category}`);
  return res.json();
}

export async function faetchAllCategory() {
   const res = await fetch(`${API_BASE}/categories`, {
    next: { revalidate: 120 },
   });
   if(!res.ok) throw new Error(`Failed to fetch all categories`)
    return res.json();
}

