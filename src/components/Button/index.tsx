import React from "react";
import { cn } from "@/helpers/cn";

interface ButtonProps {
    onClickFunction: (productId : number) =>  void;
    productId?: number;
    children: React.ReactNode;
    color?: 'transparent' | 'purple' | 'black';
    className?: string;
}

export default function Button({onClickFunction, productId, children, color = "purple" }: ButtonProps) {
    const defaultButtonClasses = 'cursor-pointer border-1 px-3 py-2 font-medium'

    const colors = {
        transparent: 'bg-transparent border-white text-white hover:text-(--color-primary) hover:border-(--color-primary)',
        purple: 'bg-(--color-secondary) border-(--color-secondary) text-white hover:bg-white hover:text-(--color-secondary) hover:border-(--color-secondary)',
        black: 'bg-white border-black text-black hover:bg-black hover:text-white hover:border-black',
    }
    return (
        <button className={cn(defaultButtonClasses, colors[color])} onClick={() => {
            if(typeof productId === 'number') {
                onClickFunction(productId)}
            }
        }>
        
            {children}</button>
    )
}

