import { CardCat } from "@/components/CardCat";
import { CardProduct } from "@/components/CardProduct";

export default function Home() {
  return (
    <div>
      <div className="text-center font-medium my-18">
        <h2 className="lg:text-[32px] md:text-2xl sm:text-xl">Busque por categoria:</h2>
        <CardCat />
      </div>

      <div className="my-18">
        <h2 className="lg:text-[32px] md:text-2xl sm:text-xl text-center font-medium">Produtos que estão bombando!</h2>
        <CardProduct />
      </div>

    </div>
  );
}
