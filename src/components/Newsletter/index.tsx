'use client'
// deixar por enquanto até consertar o form

import Button from "../Button";
import Form from "next/form";

export function Newsletter() {
    return (
        <div className="w-full my-[60px]">
            <div className="border-2 border-black max-w-[320px] md:max-w-[700px] px-4 py-10 text-center mx-auto">
                <p className="text-base md:text-xl px-2 md:px-14">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se! </strong></p>
                <Form action="/" className="flex flex-row justify-center items-center px-2 md:px-16 py-6">
                    <input type="text" placeholder="Digite seu e-mail" 
                    className="border-1 border-black  placeholder:text-(--color-gray) py-2 px-4 w-full "
                    />
                    <Button>Enviar</Button>
                </Form>
            </div>
        </div>
    )
}