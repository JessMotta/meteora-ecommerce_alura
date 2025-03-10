import Button from "../Button";

export function Newsletter() {
    return (
        <div className="w-full fixed bottom-[124px]">
            <div className="border-2 border-black w-[730px] px-4 py-10 text-center mx-auto">
                <p className="text-xl pb-6">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se! </strong></p>
                <form>
                    <input type="text" placeholder="Digite seu e-mail" 
                    className="border-1 border-black w-[456px] placeholder:text-(--color-gray) py-1.5 px-4"
                    />
                    <Button>Enviar</Button>
                </form>
            </div>
        </div>
    )
}