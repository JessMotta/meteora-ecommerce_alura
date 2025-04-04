'use client';
import { CardCat } from "@/components/CardCat";
import { CardProduct } from "@/components/CardProduct";
import Carousel from "@/components/Carousel";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchBar, setSearchBar] = useState<boolean>(false);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 768) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  }, [screenWidth]);

  return (
    <div>
      <div className="flex justify-center items-center my-6 md:my-0 mx-6">
        <SearchBar button="Search" show={searchBar} menuPosition={false} />
      </div>
      <div className="m-auto ">
        <Carousel />
      </div>
      <div className="text-center font-medium my-18">
        <h2 className="md:text-[32px] text-[28px]">Busque por categoria:</h2>
        <CardCat />
      </div>

      <div className="my-18">
        <h2 className="md:text-[32px] text-[28px] text-center font-medium">Produtos que estão bombando!</h2>
        <CardProduct />
      </div>

    </div>
  );
}
