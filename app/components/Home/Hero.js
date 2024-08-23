"use client";
import { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [bgImage, setBgImage] = useState(0);
    const [direction, setDirection] = useState(0);

    const images = [
        "url('/home-hero.jpg')",
        "url('/home-hero2.jpg')",
        "url('/home-hero3.jpg')",
        "url('/home-hero4.jpg')",
    ];

    const variants = {
        initial: direction => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 },
            },
        },
        exit: direction => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
            },
        }),
    };

    const nextStep = () => {
        setDirection(1);
        setBgImage(prev => (prev + 1) % images.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setBgImage(prev => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className="relative h-screen w-full">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-fixed bg-cover bg-center lg:bg-cover lg:bg-fixed xs:bg-contain xs:bg-scroll">
                    <AnimatePresence initial={false} custom={direction} className="bg-fixed h-full w-full">
                        <motion.div
                            className="w-full h-full absolute top-0 left-0 bg-fixed"
                            key={bgImage}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            custom={direction}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center bg-fixed"
                                style={{ backgroundImage: images[bgImage] }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="h-auto max-w-[90%] xs:mt-20 md:w-[40%] lg:w-auto 2xl:w-[28%] border-l-8 border-yellow bg-[#000000CC] xs:px-10 md:pl-10 md:pr-20 xl:px-0 xl:pr-32 xl:pl-14 py-7 2xl:px-0 2xl:pl-12 2xl:pr-0 absolute right-0 top-1/2 -translate-y-1/2 flex flex-col">
                    <p className="text-yellow text-[24px] xl:text-[44.2px] font-extrabold">
                        A <span className="text-white">verdade</span> é o <br />
                        braço forte da <br />
                        <span className="text-white">Justiça</span>.
                    </p>
                    <button
                        className="mt-5 bg-yellow w-32 rounded-lg py-2 md:text-xs 2xl:text-sm text-black font-bold transition duration-300 ease-in-out hover:bg-darkYellow"
                        onClick={() => {
                            document.getElementById("next-section").scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore
                    </button>

                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 xs:w-full xs:flex xs:justify-center xs:items-center">
                    <button onClick={prevStep}>
                        <svg className="xs:w-20 md:w-[167px]" width="167" height="24" viewBox="0 0 167 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M165 13.5C165.828 13.5 166.5 12.8284 166.5 12C166.5 11.1716 165.828 10.5 165 10.5L165 13.5ZM0.939346 10.9393C0.353546 11.5251 0.353546 12.4749 0.939346 13.0606L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51471C13.1924 2.92892 13.1924 1.97917 12.6066 1.39338C12.0208 0.807598 11.0711 0.807598 10.4853 1.39338L0.939346 10.9393ZM165 10.5L2 10.5L2 13.5L165 13.5L165 10.5Z" fill="white" />
                        </svg>
                    </button>
                    <span className="font-extrabold" style={{ lineHeight: "22px" }}>
                        <span className="text-yellow">{`${(bgImage + 1).toString().padStart(2, '0')}`}</span> / {`${images.length.toString().padStart(2, '0')}`}
                    </span>
                    <button onClick={nextStep}>
                        <svg className="xs:w-20 md:w-[167px]" width="167" height="24" viewBox="0 0 167 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM166.061 13.0607C166.646 12.4749 166.646 11.5251 166.061 10.9393L156.515 1.3934C155.929 0.807611 154.979 0.807611 154.393 1.3934C153.808 1.97919 153.808 2.92893 154.393 3.51472L162.879 12L154.393 20.4853C153.808 21.0711 153.808 22.0208 154.393 22.6066C154.979 23.1924 155.929 23.1924 156.515 22.6066L166.061 13.0607ZM2 13.5L165 13.5V10.5L2 10.5L2 13.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
