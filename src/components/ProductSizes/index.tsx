interface ProductSizesProps {
    sizes: Array<{
        id: number;
        name: string;
    }>
}
export default function ProductSizes({sizes}: ProductSizesProps) {
    return (
        <>
            <div className="flex flex-col items-start justify-between gap-6 max-w-2xs my-4">
                <p className="font-bold text-sm">Tamanho:</p>
                <div className="flex justify-between items-center gap-4">
                    {sizes.map((size) => (
                        <div key={size.id} className="flex flex-col gap-2">
                            <input type="radio" id={(size.id).toString()} name="size_clothes" value={size.name} className="appearance-none w-3.5 h-3.5 rounded-full border-2  border-[#DEE2E6] checked:border-[#C3C4FF] checked:ring-2 checked:ring-[#9353FF] checked:ring-inset" />
                            <label about="size_clothes" className="text-sm">{size.name}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}