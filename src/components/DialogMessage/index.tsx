import { FaRegCircleCheck, FaXmark } from "react-icons/fa6";


export interface DialogMessageInterface {
    isOpen: boolean;
    onClose: () => void;
}

export default function DialogMessage({isOpen, onClose}: DialogMessageInterface) {
    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative w-[700px] shadow-[0_4px_15px_0_rgba(44, 63, 88, 0.35)]">
                <div className="bg-black z-100 text-white flex justify-between items-center px-4 py-5">
                    <div className="flex items-center">
                        <FaRegCircleCheck className="text-primary text-[32px]" />
                        <p className="pl-5">E-mail cadastrado com sucesso!</p>
                    </div>
                    <button className="cursor-pointer" onClick={onClose}>
                        <FaXmark className="text-gray text-xl" />
                    </button>
                </div>
                <div className="bg-white px-4 pt-4 pb-8">
                    <p>Em breve você receberá novidades exclusivas da Meteora.</p>
                </div>
            </div>
        </div>

    )
}