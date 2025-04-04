import Image from "next/image"
import { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";


//criar um array com as imagens para todos os tamanhos de tela
const slidesLg = [
    '/carousel/Banner carousel 1 _ 1440.png',
    '/carousel/Banner carousel 2 _ 1440.png',
    '/carousel/Banner carousel 3 _ 1440.png',
]

const slidesMd = [
    '/carousel/Banner carousel 1 _ 768.png',
    '/carousel/Banner carousel 2 _ 768.png',
    '/carousel/Banner carousel 3 _ 768.png',
]

const slidesSm = [
    '/carousel/Banner carousel 1 _ 375.png',
    '/carousel/Banner carousel 2 _ 375.png',
    '/carousel/Banner carousel 3 _ 375.png',
]
export default function Carousel() {
    const [current, setCurrent] = useState(0);

    const [slides, setSlides] = useState<string[]>(slidesLg);

    // Atualiza os slides com base no tamanho da tela
    const updateSlidesByScreen = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setSlides(slidesSm);
        } else if (width < 1024) {
            setSlides(slidesMd);
        }
        else {
            setSlides(slidesLg);
        }
    }

    useEffect(() => {
        updateSlidesByScreen();
        window.addEventListener('resize', updateSlidesByScreen);
        return () => window.removeEventListener('resize', updateSlidesByScreen);
    }, []);


    const previousSlide = () => {
        if (current === 0) {
            setCurrent(slides.length - 1);
        } else {
            setCurrent(current - 1);
        }
    }

    const nextSlide = () => {
        if (current === slides.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
        <div>
            <div className="overflow-hidden relative ">
                <div className="w-screen h-[415px] flex transition ease-out duration-400" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <Image key={index} src={slide} alt={`Slide ${index + 1}`} className="min-w-[100vw] h-full" width={1400} height={415} />
                    ))}
                </div>
            </div>
            <div className="absolute flex justify-between items-center w-full h-[415px] top-[54px] left-0 lg:px-10 md:px-4 text-white">
                <button className="cursor-pointer" onClick={previousSlide}>
                    <MdArrowLeft className="text-5xl" />
                </button>
                <button className="cursor-pointer" onClick={nextSlide}>
                    <MdArrowRight className="text-5xl" />
                </button>
            </div>
            <div className="absolute flex justify-center gap-1.5 w-full h-[415px] top-[520px] md:top-[420px] lg:top-[440px] left-0">
                {slides.map((_, index) => (
                    <div key={index} className={`cursor-pointer w-7 h-1 ${index == current ? "bg-white opacity-100" : "bg-white opacity-50"}`}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}