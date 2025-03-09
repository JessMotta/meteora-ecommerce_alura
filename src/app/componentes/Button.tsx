import React from "react";

const Button = ({children} : {children : React.ReactNode}) => {
    return (
        <button className="cursor-pointer border-1 border-white px-3 py-2"
        >{children}</button>
    )
}

export default Button;