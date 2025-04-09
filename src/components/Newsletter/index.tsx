'use client'
// deixar por enquanto até consertar o form

import Button from "../Button";
import Form from "next/form";
import DialogMessage from "../DialogMessage";
import { useState } from "react";

export function Newsletter() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModal() {
        setModalIsOpen(true);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }


    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        handleOpenModal();
    }

    return (
        <>
            <div className="w-full my-[60px]">
                <div className="border-2 border-black max-w-[320px] md:max-w-[700px] px-4 py-10 text-center mx-auto">
                    <p className="text-base md:text-xl px-2 md:px-14">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se! </strong></p>
                    <Form onSubmit={handleSubmit} action="/" className="flex flex-row justify-center items-center px-2 md:px-16 py-6">
                        <input type="text" placeholder="Digite seu e-mail"
                            className="border-1 border-black  placeholder:text-(--color-gray) py-2 px-4 w-full "
                        />
                        {/* adicionar o evento de envio do email */}
                        <Button onClickFunction={handleOpenModal} >Enviar</Button>
                    </Form>
                </div>
            </div>
            <DialogMessage isOpen={modalIsOpen} onClose={handleCloseModal}/>
        </>
    )
}