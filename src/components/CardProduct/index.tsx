import Image from "next/image";
import Button from "../Button";

export function CardProduct() {
    return (
        <div className="flex flex-col gap-2 justify-start items-start w-[350px]">
            <Image src="/products/camisetaConforto.jpg" width={350} height={422} alt="Product" />
            <div className="ml-4 flex flex-col gap-2 items-start">
                <p className="font-bold">Camiseta Conforto</p>
                <p className="text-sm">Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.</p>
                <p className="font-bold">R$ 70,00</p>
                <Button>Ver mais</Button>
            </div>
        </div>
    )
}