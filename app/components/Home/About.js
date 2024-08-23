import Image from 'next/image';
import Link from 'next/link';

const About = () => {

    return (
        <div id="next-section" className="w-full md:h-[90%] lg:h-screen xs:h-auto md:py-12 lg:py-0 xs:pb-14 gap-18 bg-black md:flex md:justify-center md:items-center">
            <div className="flex justify-center items-center xs:py-20">
                <Image src="/logo-dourado.png" width="308" height="285" className="xs:w-40 sm:w-[308px]" />
            </div>
            <div className="max-w-2xl lg:max-w-none lg:pl-20 xs:px-10 lg:px-0 md:w-2/4 xl:w-2xl sm:flex-col sm:justify-center sm:items-center sm:max-w-none sm:w-full">
                <h2 className="lg:text-[44.2px] xs:text-3xl sm:text-[36px]  text-yellow lora-font xs:mb-6 md:mb-12" style={{ lineHeight: '56.58px' }}>Quem é ESTRELLA & SUITA?</h2>
                <p className="lg:text-[33.16px] xs:text-md sm:text-[24px] font-light"><span className="lora-font lg:text-[44.2px] xs:text-lg sm:text-[24px] font-light">Estrella & Suita</span> é um escritório de advocacia focado em atender suas necessidades. Orgulhamo-nos de construir relacionamentos reais com nossos clientes e estabelecer parcerias de longo prazo com eles.</p>
                <Link href="/about" passHref>
                    <button className="bg-yellow w-36 rounded-lg font-extrabold py-4 xs:text-sm sm:text-lg lg:text-lg text-black xs:mt-8 md:mt-12 transition duration-300 ease-in-out hover:bg-darkYellow">
                        Saiba Mais
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default About; 