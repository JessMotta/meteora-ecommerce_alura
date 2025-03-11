import Image from "next/image";

// colocar esse array dentro do mock
const categories = [
    {
        title: 'Camisetas',
        image: '/products/catCamiseta.jpg',
        alt: 'Imagem de camiseta',
    },
    {
        title: 'Bolsas',
        image: '/products/catBolsa.jpg',
        alt: 'Imagem de bolsa',
    },
    {
        title: 'Calçados',
        image: '/products/catCalcado.jpg',
        alt: 'Imagem de calçado',
    },
    {
        title: 'Calças',
        image: '/products/catCalca.jpg',
        alt: 'Imagem de calça',
    },
    {
        title: 'Casacos',
        image: '/products/catCasaco.jpg',
        alt: 'Imagem de casaco',
    },
    {
        title: 'Óculos',
        image: '/products/catOculos.jpg',
        alt: 'Imagem de óculos',
    }
]

export function CardCat() {
    return (
        <div className="text-center font-medium">
            <h2 className="text-[32px]">Busque por categoria:</h2>
            <div className="flex justify-center gap-[30px] mt-8 mb-11">
                {categories.map((category, index) => (
                    <div key={index} className="max-w-40">
                    <Image src={category.image} width={160} height={72} alt={category.alt} className='mr-6' />
                    <p className="text-white bg-black py-2">{category.title}</p>
                </div>
                ))}
                
            </div>
        </div>


    )
}