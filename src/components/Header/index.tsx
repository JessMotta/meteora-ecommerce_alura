import Link from "next/link";
import Button from "../Button";
import Image from "next/image";


const itemsMenu = [{ title: "Home", link: "/" }, { title: "Nossas Lojas", link: "/" }, { title: "Novidades", link: "/" }, { title: "Promoções", link: "/" }];

export default function Header() {
    return (
        <header className="h-[54px] bg-black text-white flex justify-between items-center px-5">
            <div className="flex items-center justify-start">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={54} />
                </Link>
                <nav className="pl-10">
                    <ul className="flex justify-start space-x-4">
                        {itemsMenu.map((item, index) => (
                            <li key={index} className="pl-5">
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex justify-end items-center space-x-4">
                <input type="text" placeholder="Digite o produto" className="bg-white text-black placeholder-(--color-gray) py-2 px-3"></input>
                <Button color="transparent">Buscar</Button>
            </div>
        </header>
    )
}
