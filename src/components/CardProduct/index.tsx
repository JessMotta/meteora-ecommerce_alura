import Image from "next/image";
import Button from "../Button";

const products =[
    {
        id: 1,
        title: "Camiseta Conforto",
        image: "/products/camisetaConforto.jpg",
        description: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        price: "70,00",
    },
    {
        id: 2,
        title: "Calça Alfaiataria",
        image: "/products/calcaAlfaiataria.jpg",
        description: "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        price: "180,00",
    },
    {
        id: 3,
        title: "Tênis Chunky",
        image: "/products/tenisChunky.jpg",
        description: "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        price: "250,00",
    }, 
    {
        id: 4,
        title: "Jaqueta Jeans",
        image: "/products/jaquetaJeans.jpg",
        description: "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        price: "150,00",
    }, 
    {
        id: 5,
        title: "Óculos Redondo",
        image: "/products/oculosRedondo.jpg",
        description: "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        price: "120,00",
    }, 
    {
        id: 6,
        title: "Bolsa Coringa",
        image: "/products/bolsaCoringa.jpg",
        description: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        price: "120,00",
    }, 
]

export function CardProduct() {
    return (
        <div className="grid gap-7 mt-8 justify-items-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {products.map(product => (
                <div key={product.id} className="flex flex-col gap-2 justify-start items-start lg:max-w-[350px] border border-[#00000021] pb-4 max-w-[300px]">
                <Image src={product.image} width={350} height={422} alt="Product"/>
                <div className="ml-4 flex flex-col gap-2 items-start">
                    <p className="font-bold">{product.title}</p>
                    <p className="text-sm">{product.description}</p>
                    <p className="font-bold">R$ {product.price}</p>
                    <Button onClickFunction={()=>{}}>Ver mais</Button>
                </div>
            </div>
            ))}
        </div>

    )
}