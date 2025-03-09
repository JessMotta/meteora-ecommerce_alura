import Link from "next/link";
import Button from "./Button";

const itemsMenu = [{ title: "Home", link: "/" }, { title: "Nossas Lojas", link: "/" }, { title: "Novidades", link: "/" }, { title: "Promoções", link: "/" }];

const Header = () => {
    return (
        <header className="h-[54px] bg-black text-white flex justify-between items-center px-5">
            <ul className="flex justify-start space-x-4">
                {itemsMenu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-end items-center space-x-4">
            <input type="text" placeholder="Digite o produto" className="bg-white text-[#6C757D] py-2 px-3"></input>
            <Button>Buscar</Button>
            </div>
        </header>
    )
}

export default Header;