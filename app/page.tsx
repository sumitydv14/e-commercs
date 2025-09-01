import Banner from "@/app/components/banner"
import ProductCard from "@/app/components/ProductCard"
import Link from "next/link";
import { faetchAllCategory, fetchProductsByCategory } from '@/app/lib/api'
import { Product, ProductsResponse } from "./products/model/product.model";
import SideNavbar from "./components/SideNavbar";

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export async function generateMetadata() {
  const data = await fetchProductsByCategory('womens-dresses');
  return {
    title: `Dev Product | ${data.products[0].title}`
  }
}


export default async function Home() {

  const res = await faetchAllCategory();
  const categories:Category[] = res || [];

  const getRandomCategoires = (categories:Category[], count:number) => {
      return categories.sort(() => 0.5 - Math.random()).slice(0,count);
  }

  const fiveRandomCategory = getRandomCategoires(categories, 5);

  console.log("fiveRandomCategory", fiveRandomCategory)


  const responseOne = await fetchProductsByCategory(fiveRandomCategory[0].slug);
  const productDataOne: ProductsResponse = responseOne || [];

  
  const responseTwo = await fetchProductsByCategory(fiveRandomCategory[1].slug);
  const productDataTwo: ProductsResponse = responseTwo || [];

  const responseThree = await fetchProductsByCategory(fiveRandomCategory[2].slug);
  const productDataThree: ProductsResponse = responseThree || [];

  const responseFour = await fetchProductsByCategory(fiveRandomCategory[3].slug);
  const productDataFour: ProductsResponse = responseFour || [];

  const responseFive = await fetchProductsByCategory(fiveRandomCategory[4].slug);
  const productDataFive: ProductsResponse = responseFive || [];

  return (
    <div className="font-sans relative">
      <Banner />
      <section className="flex">
      <main className="flex-1 max-w-[1400px] mx-auto">
          <h1 className="p-4 text-xl font-bold">{productDataOne?.products[0]?.category}</h1>
          <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              productDataOne?.products?.map((pc: Product, index: number) => {
                return (
                  <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
                )
              })
            }
          </section>
          <h1 className="text-xl font-bold">{productDataTwo?.products[1]?.category}</h1>
           <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              productDataTwo?.products?.map((pc: Product, index: number) => {
                return (
                  <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
                )
              })
            }
          </section>
          <h1 className="text-xl font-bold">{productDataThree.products[2]?.category}</h1>
           <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              productDataThree?.products?.map((pc: Product, index: number) => {
                return (
                  <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
                )
              })
            }
          </section>
            <h1 className="text-xl font-bold">{productDataFour?.products[3]?.category}</h1>
           <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              productDataFour?.products?.map((pc: Product, index: number) => {
                return (
                  <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
                )
              })
            }
          </section>
              <h1 className="text-xl font-bold">{productDataFive?.products[4]?.category}</h1>
           <section className="max-w-[1400px] mx-auto py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              productDataFive?.products?.map((pc: Product, index: number) => {
                return (
                  <ProductCard index={index} id={pc.id} category={pc.category} thumbnail={pc.thumbnail} key={pc.id} price={pc.price} title={pc.title} />
                )
              })
            }
          </section>
          <div className="max-w-[1400px] mx-auto">
            <Link href="/products" className="text-lg" >view all</Link>
          </div>
      </main>
      </section>

    </div>
  );
}
