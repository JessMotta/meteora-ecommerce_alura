interface ProductColorsProps {
    colors: Array<{
        id: number;
        name: string;
        hex: string;
    }>;
}
export default function ProductColors({ colors }: ProductColorsProps) {
    return (
        <>
            <div className="flex flex-col items-start justify-between gap-6 max-w-2xs mt-4">
                <p className="font-bold text-sm">Cores:</p>
                <div className="flex justify-between items-center gap-4">
                    {colors.map((color) => (
                        <div key={color.id} className="flex flex-col gap-2">
                            <input 
                            type="radio" 
                            id={color.id.toString()} 
                            name="color_clothes" 
                            value={color.name}
                            style={{ backgroundColor: color.hex }} 
                            className="appearance-none w-3.5 h-3.5 rounded-full border-2  border-[#DEE2E6] checked:border-[#C3C4FF] checked:ring-2 checked:ring-[#9353FF] checked:ring-inset" />
                            <label about="color_clothes" className="text-sm">{color.name}</label>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}