import Link from "next/link";
import Image from "next/image";
<<<<<<< Updated upstream


const itemsMenu = [
    { title: "Home", link: "/" }, 
    { title: "Nossas Lojas", link: "/" }, 
    { title: "Novidades", link: "/" }, 
    { title: "Promoções", link: "/" }
=======
import { FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SearchBar } from "../SearchBar";



const itemsMenu = [
    { title: "Home", link: "/" },
    { title: "Nossas Lojas", link: "/store" },
    { title: "Novidades", link: "/news" },
    { title: "Promoções", link: "/onsale" }
>>>>>>> Stashed changes
];



export default function Header() {
<<<<<<< Updated upstream
    return (
        <header className="h-[54px] bg-black text-white flex justify-between items-center px-5">
            <div className="flex items-center justify-start">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={54} />
                </Link>
                <nav className="pl-10">
                    <ul className="flex justify-start space-x-4">
=======

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const [searchBar, setSearchBar] = useState<boolean>(false);

    const screenWidth = window.innerWidth;

    const pathname = usePathname();

    useEffect(() => {
        if(screenWidth >= 768) {
            setSearchBar(true);
        }else {
            setSearchBar(false);
        }
    }, [screenWidth]);

    return (
        <header className="h-[54px] bg-black text-white px-5 ">
            <nav className="flex items-center justify-between w-full h-full px-6">
                <div className="flex">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={200} height={54} />
                    </Link>
                    <ul className={`lg:flex justify-start items-center space-x-4 lg:pl-10 pl-6 px-6 ${openMenu ? "block absolute top-0 right-0 w-fit h-auto py-3 bg-gray-mobile pt-10" : "hidden"}`}>
>>>>>>> Stashed changes
                        {itemsMenu.map((item, index) => (
                            <li key={index} className={`lg:pl-5 text-white font-normal ${openMenu ? "pl-0 py-2 border-b-2 border-gray-mobile2" : "pl-5"} ${pathname === item.link ? "text-primary font-bold" : ""}`} >
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
<<<<<<< Updated upstream
                </nav>
            </div>
            <div className="flex justify-end items-center space-x-4">
                <input type="text" placeholder="Digite o produto" className="bg-white text-black placeholder-(--color-gray) py-2 px-3"></input>
                <Button color="transparent">Buscar</Button>
            </div>
=======
                </div>

                <SearchBar button="Buscar" show={searchBar} menuPosition={true} />
                <button className="lg:hidden flex items-center h-full z-10" onClick={() => { setOpenMenu(!openMenu) }}>
                    {openMenu ? <FaXmark className="fill-primary" size={24} /> : <FaBars className="fill-primary" size={24} />}
                </button>
            </nav>
>>>>>>> Stashed changes
        </header>
    )
}
