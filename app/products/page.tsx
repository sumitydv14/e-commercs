import ProductCard from "../components/ProductCard";
import { fetchProducts } from "@/app/lib/api";
import { Product, ProductsResponse } from "./model/product.model";


export async function generateMetadata() {
    const data = await fetchProducts();
    return {
      title: `Dev Product | ${data.products[0].title}`
    }
}

export default async function Products() {
    const data = await fetchProducts();
    const AllproductsData:ProductsResponse = data || [];
  return (
     <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
       {
        AllproductsData.products?.map((product:Product, index:number) => {
            return (
                <ProductCard index={index} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} category={product.category} key={product.id} />
            )
        })
       } 
     </section>
  )
}