import Image from "next/image";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6"

export interface DialogProductInterface {
    isOpen: boolean;
    onClose: () => void;
}


export default function DialogProduct({ isOpen, onClose }: DialogProductInterface) {
    const products = [
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

    //if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative w-[700px] shadow-[0_4px_15px_0_rgba(44, 63, 88, 0.35)]">
                <div className="bg-black z-100 text-white flex justify-between items-center px-4 py-5">
                    <div className="flex items-center">
                        <FaRegCircleCheck className="text-primary text-[32px]" />
                        <p className="pl-5">Confira detalhes sobre o produto</p>
                    </div>
                    <button className="cursor-pointer" onClick={onClose}>
                        <FaXmark className="text-gray text-xl" />
                    </button>
                </div>
                <div className="bg-white px-4 pt-4 pb-8 flex justify-between gap-4 px-4">
                    <div>
                        <Image src={products[3].image} alt="Imagem da roupa" width={350} height={422} />
                    </div>
                    <div className="w-[318px]">
                        <div className="flex flex-col items-start justify-between gap-6 max-w-2xs">
                            <p className="font-bold text-base">{products[3].title}</p>
                            <p className="text-sm">{products[3].description}</p>
                            <hr className="border-black h-px w-full" />
                            <p className="font-medium text-xl">{`R$ ${products[3].price}`}</p>
                            <p className="text-sm text-[#ADB5BD]">Vendido e entregue por Riachuelo</p>
                        </div>
                            <hr className="border-[#D8D8D8] h-px w-full mt-4 " />
                        <div className="flex flex-col items-start justify-between gap-6 max-w-2xs mt-4">
                            <p className="font-bold text-sm">Cores:</p>
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="color1" name="color_clothes" value="Azul Claro" className="text-sm" />
                                    <label about="color_clothes" className="text-sm">Azul Claro</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="color2" name="color_clothes" value="Offwhite" className="text-sm" />
                                    <label about="color_clothes" className="text-sm">Offwhite</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="color3" name="color_clothes" value="Preto" className="text-sm" />
                                    <label about="color_clothes" className="text-sm">Preto</label>
                                </div>

                            </div>
                        </div>
                        <hr className="border-[#D8D8D8] h-px w-full mt-4 " />
                        <div className="flex flex-col items-start justify-between gap-6 max-w-2xs mt-4">
                            <p className="font-bold text-sm">Tamanho:</p>
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="sizeP" name="size_clothes" value="Preto" className="text-sm" />
                                    <label about="size_clothes" className="text-sm">P</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="sizePP" name="size_clothes" value="Preto" className="text-sm" />
                                    <label about="size_clothes" className="text-sm">PP</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="sizeM" name="size_clothes" value="Preto" className="text-sm" />
                                    <label about="size_clothes" className="text-sm">M</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="sizeG" name="size_clothes" value="Preto" className="text-sm" />
                                    <label about="size_clothes" className="text-sm">G</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input type="radio" id="sizeGG" name="size_clothes" value="Preto" className="text-sm" />
                                    <label about="size_clothes" className="text-sm">GG</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}