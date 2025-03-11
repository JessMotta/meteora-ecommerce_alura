import Image from "next/image";

export function CardCat() {
    return (
        <div className="text-center font-medium">
            <h2 className="text-[32px]">Busque por categoria:</h2>
            <div className="flex justify-start gap-[30px] mx-[165px] mt-8 mb-11">
                <div className="max-w-40">
                    <Image src="/products/catCamiseta.jpg" width={160} height={72} alt='Categoria camisetas' className='mr-6' />
                    <p className="text-white bg-black py-2">Camisetas</p>
                </div>
                <div className="max-w-40">
                    <Image src="/products/catCamiseta.jpg" width={160} height={72} alt='Categoria camisetas' className='mr-6' />
                    <p className="text-white bg-black py-2">Camisetas</p>
                </div>
            </div>
        </div>


    )
}