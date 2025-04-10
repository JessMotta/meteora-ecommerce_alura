'use client'
import Image from "next/image";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6"
import Button from "../Button";
import ProductDetails from "../ProductDetails";


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
            { id: 1, name: "Azul Claro", hex:"#4cdcfc" },
            { id: 2, name: "Offwhite", hex:"#eef5f7" },
            { id: 3, name: "Preto", hex:"#000000" },
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
            { id: 1, name: "Branco", hex:"#ffffff" },
            { id: 2, name: "Rosa", hex:"#e21e9b" },
            { id: 3, name: "Laranja", hex:"#f1830e" },
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
            { id: 1, name: "Preto", hex:"#000000" },
            { id: 2, name: "Branco", hex:"#ffffff" },
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
            { id: 1, name: "Azul Claro", hex:"#4cdcfc" },
            { id: 2, name: "Offwhite", hex:"#eef5f7" },
            { id: 3, name: "Preto", hex:"#000000" },
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
            { id: 1, name: "Preto", hex: "#000000" },
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
            { id: 1, name: "Caramelo", hex:"#c46902" },
            { id: 2, name: "Offwhite", hex:"#eef5f7" },
            { id: 3, name: "Vermelho", hex:"#e22d1e" },
        ]
    },
]


export interface DialogProductInterface {
    isOpen: boolean;
    onClose: () => void;
    productId?: number;
}

export default function DialogProduct({ isOpen, onClose, productId }: DialogProductInterface) {
    
    if(!isOpen) return null;

    const product = products.find((product) => product.id === productId);
    if (!product) return null; // Handle case where product is not found

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative overflow-y-auto max-w-[700px] w-full max-h-screen shadow-[0_4px_15px_0_rgba(44, 63, 88, 0.35)]">
                {/* cabeçalho onde tem o icone de check e o x para fechar o modal */}
                <div className="bg-black z-100 text-white flex justify-between items-center px-4 py-5">
                    <div className="flex items-center">
                        <FaRegCircleCheck className="text-primary text-[32px]" />
                        <p className="pl-5">Confira detalhes sobre o produto</p>
                    </div>
                    <button className="cursor-pointer" onClick={onClose}>
                        <FaXmark className="text-gray text-xl" />
                    </button>
                </div>
               {/*  estrutura onde o produto é exibido */}
                <div className="bg-white px-4 pt-4 pb-8 flex md:flex-row flex-col justify-between md:items-start items-center gap-4">
                    <div className="h-full">
                        <Image src={product.image} alt="Imagem da roupa" width={350} height={422} className="max-w-full max-h-full md:max-w-[350px] md:max-h-[422px]" />
                    </div>
                    <div className="max-w-[318px]">
                        <div className="flex flex-col items-start justify-between gap-6 max-w-2xs">
                            <p className="font-bold text-base">{product.title}</p>
                            <p className="text-sm">{product.description}</p>
                            <hr className="border-black h-px w-full" />
                            <p className="font-medium text-xl">{`R$ ${product.price}`}</p>
                            <p className="text-sm text-[#ADB5BD]">Vendido e entregue por Riachuelo</p>
                        </div>
                            <hr className="border-[#D8D8D8] h-px w-full mt-4 " />
                        <ProductDetails colors={product.colors} sizes={product.sizes} />
                    <Button onClickFunction={() =>{}}>Adicionar à sacola</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}