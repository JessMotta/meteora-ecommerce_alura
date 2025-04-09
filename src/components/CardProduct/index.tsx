import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import DialogProduct from "../DialogProduct";

const products = [
    {
        id: 1,
        title: "Camiseta Conforto",
        image: "/products/camisetaConforto.jpg",
        description: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        price: "70,00",
        sizes: [
            { id: 1, name: "P" },
            { id: 2, name: "PP" },
            { id: 3, name: "M" },
            { id: 4, name: "G" },
            { id: 5, name: "GG" },
        ],
        colors: [
            { id: 1, name: "Azul Claro" },
            { id: 2, name: "Offwhite" },
            { id: 3, name: "Preto" },
        ]
    },
    {
        id: 2,
        title: "Calça Alfaiataria",
        image: "/products/calcaAlfaiataria.jpg",
        description: "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        price: "180,00",
        sizes: [
            { id: 1, name: "P" },
            { id: 2, name: "M" },
            { id: 3, name: "GG" },
        ],
        colors: [
            { id: 1, name: "Branco" },
            { id: 2, name: "Rosa" },
            { id: 3, name: "Laranja" },
        ]
    },
    {
        id: 3,
        title: "Tênis Chunky",
        image: "/products/tenisChunky.jpg",
        description: "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        price: "250,00",
        sizes: [
            { id: 1, name: "PP" },
            { id: 2, name: "M" },
            { id: 3, name: "G" },

        ],
        colors: [
            { id: 1, name: "Preto" },
            { id: 2, name: "Branco" },
        ]
    },
    {
        id: 4,
        title: "Jaqueta Jeans",
        image: "/products/jaquetaJeans.jpg",
        description: "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        price: "150,00",
        sizes: [
            { id: 1, name: "P" },
            { id: 2, name: "PP" },
            { id: 3, name: "M" },
            { id: 4, name: "G" },
            { id: 5, name: "GG" },
        ],
        colors: [
            { id: 1, name: "Azul Claro" },
            { id: 2, name: "Offwhite" },
            { id: 3, name: "Preto" },
        ]
    },
    {
        id: 5,
        title: "Óculos Redondo",
        image: "/products/oculosRedondo.jpg",
        description: "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        price: "120,00",
        sizes: [
            { id: 1, name: "U" },
        ],
        colors: [
            { id: 1, name: "Preto" },
        ]
    },
    {
        id: 6,
        title: "Bolsa Coringa",
        image: "/products/bolsaCoringa.jpg",
        description: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        price: "120,00",
        sizes: [
            { id: 1, name: "U" },
        ],
        colors: [
            { id: 1, name: "Caramelo" },
            { id: 2, name: "Offwhite" },
            { id: 3, name: "Vermelho" },
        ]
    },
]

export function CardProduct() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(0);

    function handleOpenModal(productId: number) {
        setSelectedProductId(productId);
        setModalIsOpen(true);
    }

    function handleCloseModal(){
        setModalIsOpen(false);
       

    }

    return (
        <>
            <div className="grid gap-7 mt-8 justify-items-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col gap-2 justify-start items-start lg:max-w-[350px] border border-[#00000021] pb-4 max-w-[300px]">
                        <Image src={product.image} width={350} height={422} alt="Product" />
                        <div className="ml-4 flex flex-col gap-2 items-start">
                            <p className="font-bold">{product.title}</p>
                            <p className="text-sm">{product.description}</p>
                            <p className="font-bold">R$ {product.price}</p>
                            <Button onClickFunction={handleOpenModal} productId={product.id} >Ver mais</Button>
                        </div>
                    </div>
                ))}
            </div>
            <DialogProduct isOpen={modalIsOpen} onClose={handleCloseModal} productId={selectedProductId} />
        </>


    )
}