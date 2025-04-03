"use client";
import { CardCat } from "@/components/CardCat";
import { CardProduct } from "@/components/CardProduct";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  
      const screenWidth = window.innerWidth;
  
      useEffect(() => {
          if(screenWidth >= 768) {
              setSearchBar(false);
          }else {
              setSearchBar(true);
          }
      }, [screenWidth]);
  
  return (
    <div>
      <SearchBar button="Buscar" show={searchBar} menuPosition={false} />
      <div className="text-center font-medium my-18">
        <h2 className="text-[32px]">Busque por categoria:</h2>
        <CardCat />
      </div>

      <div className="my-18">
        <h2 className="text-[32px] text-center font-medium">Produtos que estão bombando!</h2>
        <CardProduct />
      </div>

    </div>
  );
}
