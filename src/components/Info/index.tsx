import Image from 'next/image'

export function Info() {
    return (
        <div className="bg-black w-full w-min-[238px] mt-20 mb-16 py-10 text-white">
            <h2 className="font-medium md:text-[32px] text-[28px] text-center">Conheça todas as nossas facilidades</h2>
            {/* Seção com as informações */}
            <div className='flex flex-row flex-wrap justify-center gap-8 mt-10'>
                {/* cada seção */}
                <div className='flex justify-start items-center space-y-4 max-w-[304px]'>
                    <Image src="/pix.svg" width={42} height={42} alt='Logo do PIX' className='mr-6 lg:w-[72px] lg:h-[72px]'/>
                    <div className='max-w-[200px]'>
                        <p className="uppercase text-(--color-primary) font-bold text-base">Pague pelo PIX</p>
                        <p>Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </div>
                <div className='flex justify-start items-center space-y-4 max-w-[304px]'>
                    <Image src="/change.svg" width={42} height={42} alt='Logo do de troca' className='mr-6 lg:w-[72px] lg:h-[72px]' />
                    <div className='max-w-[200px]'>
                        <p className="uppercase text-(--color-primary) font-bold text-base">Troca grátis</p>
                        <p>Fique livre para trocar em até 30 dias</p>
                    </div>
                </div>
                <div className='flex justify-start items-center space-y-4 max-w-[304px]'>
                    <Image src="/sustainability.svg" width={42} height={42} alt='Logo da sustentabilidade' className='mr-6 lg:w-[72px] lg:h-[72px]' />
                    <div className='max-w-[200px]'>
                        <p className="uppercase text-(--color-primary) font-bold text-base">Sustentabilidade</p>
                        <p>Moda responsável, que respeita o meio ambiente</p>
                    </div>
                </div>
            </div>
        </div>

    )
}