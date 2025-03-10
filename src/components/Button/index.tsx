import React from "react";
import { cn } from "@/helpers/cn";

export default function Button({children, color = "purple"} : {children : React.ReactNode; color? : 'transparent' | 'purple'; className? : string}) {
    const defaultButtonClasses = 'cursor-pointer border-1 border-white px-3 py-2 font-medium'

    const colors = {
        transparent: 'bg-transparent text-white hover:text-(--color-primary) hover:border-(--color-primary)',
        purple: 'bg-(--color-secondary) text-white hover:bg-white hover:text-(--color-secondary) hover:border-(--color-secondary)'
    }
    return (
        <button className={cn(defaultButtonClasses, colors[color])}
        >{children}</button>
    )
}

