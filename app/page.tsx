import Banner from "@/app/components/banner"
import ProductCard from "@/app/components/ProductCard"
import Link from "next/link";
import {fetchProductsByCategory} from '@/app/lib/api'
import { Product, ProductsResponse } from "./products/model/product.model";

export async function generateMetadata() {
    const data = await fetchProductsByCategory('womens-dresses');
    return {
      title: `Dev Product | ${data.products[0].title}`
    }
}


export default async function Home() {
   
 const data = await fetchProductsByCategory("womens-dresses");
 const  productData:ProductsResponse = data.products || [];
  return (
    <div className="font-sans">
       <Banner />
       <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
         {
          productData.products.map((pc:Product, index:number) => {
            return (
              <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
            )
          })
         }
       </section>
       <div className="max-w-[1400px] mx-auto">
         <Link href="products" className="text-lg" >view all</Link>
       </div>
    </div>
  );
}
