import React from 'react'
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
import HeroImg from "../../assets/graphics/hero_image.png";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";

const Hero = () => {
    const {setActiveModal} = useModalContext();
    return (
        <div className='m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42'>
            <div>
                <h1 className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter">
                    Hi there,<br/>
                    I'm Yatharth Mittal
                </h1>
                <p className="text-primary-100 mb-10 text-xl/loose font-light">
                    A dedicated Frontend Developer with a strong foundation in modern web technologies, I specialize in building responsive, visually engaging, and performance-driven interfaces. With hands-on experience using React.js, Tailwind CSS, and JavaScript, I transform ideas into intuitive digital experiences. Whether it's crafting sleek landing pages or architecting scalable web components, I’m passionate about clean code, pixel-perfect design, and seamless user interaction.
                </p>
                <button
                className='text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5'
                onClick={()=> setActiveModal("sign-up")}
                >
                    <p className="text-lg/8">Get Started</p>
                    <div className="w-5">
                        <ArrowRightLine
                            alt="Arrow right line"
                            className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                            width={2.5}
                        />
                        <ArrowRight
                            alt="Arrow right icon"
                            className="stroke-primary-1300 inline w-5"
                            width={2}
                        />
                    </div>
                </button>
            </div>
            <div className="relative">
                <div className="bg-primary-1300 absolute inset-0 rounded-full blur-3xl" />
                <img
                    src={HeroImg}
                    alt="Hero graphic of an Iphone showing NoteFlows note summarizer"
                    className="relative max-h-[30rem] justify-self-end rounded-full"
                />
            </div>
        </div>
    )
}

export default Hero