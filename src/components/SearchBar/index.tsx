import Button from "../Button";

export interface SearchBarInterface{
    show: boolean;
    button: string;
    menuPosition: boolean;
}

const menu:string = 'bg-white text-black placeholder-(--color-gray)';
const notMenu:string = 'bg-white border-black border-1 placeholder-(--color-gray)';

export function SearchBar(props: SearchBarInterface) {
    return (
        <div className={`space-x-4 justify-center items-center ${props.show ? "flex" : "hidden"}  `}>
            <input type="text" placeholder="Digite o produto" className= {`py-2 px-3  ${props.menuPosition ? menu : notMenu}`}></input>
            <Button color={props.menuPosition ? 'transparent': 'black'}>{props.button}</Button>
        </div>
    )
}