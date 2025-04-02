'use client';
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";



const itemsMenu = [
    { title: "Home", link: "/" },
    { title: "Nossas Lojas", link: "/" },
    { title: "Novidades", link: "/" },
    { title: "Promoções", link: "/" }
];



export default function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className="h-[54px] bg-black text-white px-5 ">
            <nav className="flex items-center justify-between w-full h-full px-6">
                <div className="flex">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={200} height={54} />
                    </Link>
                    <ul className={`lg:flex justify-start items-center space-x-4 pl-10 ${openMenu ? "block absolute top-[53px] left-0 w-full h-auto py-3 bg-black" : "hidden"}`}>
                        {itemsMenu.map((item, index) => (
                            <li key={index} className="pl-5">
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-x-4 lg:flex hidden">
                    <input type="text" placeholder="Digite o produto" className="bg-white text-black placeholder-(--color-gray) py-2 px-3"></input>
                    <Button color="transparent">Buscar</Button>
                </div>
                <button className="lg:hidden flex items-center h-full" onClick={() => { setOpenMenu(!openMenu) }}>
                    {openMenu ? <FaXmark className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
                </button>
            </nav>
        </header>
    )
}
