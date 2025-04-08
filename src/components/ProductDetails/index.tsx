import ProductColors from "../ProductColors";
import ProductSizes from "../ProductSizes";

interface ProductDetailsProps {
    sizes: Array<{
        id: number;
        name: string;
    }>;
    colors: Array<{
        id: number;
        name: string;
    }>;
}

export default function ProductDetails({ sizes, colors }: ProductDetailsProps) {
    return (
        <>
            <ProductColors colors={colors} />
            <hr className="border-[#D8D8D8] h-px w-full mt-4 " />
            <ProductSizes sizes={sizes} />
        </>
    )
}