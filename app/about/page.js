import Image from "next/image";

const About = () => {
    return (
        <div className=" xs:py-20 bg-white flex xs:flex-col md:flex-row  min-h-screen items-center justify-center text-black">
            <div className="flex justify-center items-center xs:py-20 ">
                <Image src="/logo-dourado.png" width="308" height="285" className="xs:w-40 sm:w-[308px]" />
            </div>
            <div className="max-w-2xl lg:max-w-none lg:pl-20 xs:px-10 lg:px-0 md:w-2/4 xl:w-2xl sm:flex-col sm:justify-center sm:items-center sm:max-w-none sm:w-full">
                <h2 className="lg:text-[44.2px] xs:text-[36px] text-yellow lora-font mb-12" style={{ lineHeight: '56.58px' }}>Quem é ESTRELLA & SUITA?</h2>
                <p className="lg:text-[33.16px] xs:text-[24px] font-light"><span className="lora-font lg:text-[44.2px] xs:text-[24px] font-light">Estrella & Suita</span> é um escritório de advocacia focado em atender suas necessidades. Orgulhamo-nos de construir relacionamentos reais com nossos clientes e estabelecer parcerias de longo prazo com eles.</p>
            </div>
        </div>
    )
}

export default About;