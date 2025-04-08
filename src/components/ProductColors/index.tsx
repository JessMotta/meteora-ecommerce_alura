interface ProductColorsProps {
    colors: Array<{
        id: number;
        name: string;
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
                            <input type="radio" id={color.id.toString()} name="color_clothes" value={color.name} className="text-sm" />
                            <label about="color_clothes" className="text-sm">{color.name}</label>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}