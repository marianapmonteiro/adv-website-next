"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Limpa o estilo ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    const menuVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
        closed: {
            opacity: 0,
            x: '100%',
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className="w-full h-[97px] flex  justify-center absolute z-50 bg-[#000000CC]">
            <div className="w-10/12 h-full flex justify-between items-center">
                <Link href="/" >
                    <Image src="/logo.png" width="76" height="67" className="flex justify-center items-center sm:w-16 sm:h-auto lg:w-[76px]" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
                    onClick={() => { setOpen(!open) }}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <ul className="md:gap-10 lg:gap-24 items-center hidden md:flex">
                    <li className="relative group">
                        <Link href="/" className="font-inter font-bold leading-5 md:text-base lg:text-lg transition-colors duration-300 group-hover:text-yellow">Nossos Advogados</Link>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-yellow group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link href="/" className="font-inter font-bold leading-5 md:text-base lg:text-lg transition-colors duration-300 group-hover:text-yellow">Serviços</Link>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-yellow group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link href="/" className="font-inter font-bold leading-5 md:text-base lg:text-lg transition-colors duration-300 group-hover:text-yellow">Sobre nós</Link>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-yellow group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link href="/" className="font-inter font-bold leading-5 md:text-base lg:text-lg transition-colors duration-300 group-hover:text-yellow">Contato</Link>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-yellow group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            {open ? <AnimatePresence>
                {open && (
                    <motion.div
                        className="w-screen h-screen absolute z-50 bg-[#000000CC] flex flex-col"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="flex justify-center items-center mt-3">
                            <Link href="/" className="flex justify-center align-center">
                                <Image src="/logo.png" width="76" height="67" className="flex justify-center items-center sm:w-16 sm:h-auto lg:w-[76px]" />
                            </Link>
                            <button
                                type="button"
                                className="absolute right-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <hr className="mt-5" />
                        <ul className="uppercase space-y-8 mt-20 pl-7">
                            <li>
                                <Link href="/" className="font-inter leading-5 text-[20px]">Nossos Advogados</Link>
                            </li>
                            <li className="mb-10">
                                <Link href="/" className="font-inter leading-5 text-[20px]">Serviços</Link>
                            </li>
                            <li className="mb-10">
                                <Link href="/" className="font-inter leading-5 text-[20px]">Sobre nós</Link>
                            </li>
                            <li className="mb-10">
                                <Link href="/" className="font-inter leading-5 text-[20px]">Contato</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence> : null}
        </nav>
    )
}

export default Navbar;
