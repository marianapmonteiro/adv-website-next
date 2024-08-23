import AdvCard from "../components/AdvCard.js"
import Link from 'next/link';


const Advogados = () => {
    const advogados = ['Jose da Silva', 'Joisy da Silva', 'Marianne Souza', 'Gustavo de Oliveira', 'Carla Machado']
    const imgs = ['/lawyer.png', '/lawyer2.png', '/lawyer3.png', '/lawyer4.png', '/lawyer5.png',]
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-white pt-36 pb-36 xs:px-8 md:px-24">
            <div className="text-black text-center sm:text-[36px] font-extrabold w-full xs:text-[24px] xs:mb-0 ">
                <span className="border-b-[4px] h-36 border-yellow rounded-[3px] mt-2">Nossos Advogados</span>
            </div>
            <div className="w-full flex flex-col items-center justify-center xs:gap-24 md:gap-16 xs:mt-28 lg:mt-16 ">
                {advogados.map((item, index) => {
                    return (
                        <AdvCard name={item} funcao="Especialista em Direito Civil" img={imgs[index]} />
                    )
                })}
            </div>
            <div className="lg:max-w-[780px] mt-24 md:mt-36 text-black flex flex-col items-center justify-center gap-4 md:gap-10">
                <h3 className="text-black text-start sm:text-[36px] font-extrabold w-full xs:text-[24px] xs:mb-0 ">
                    Você gostaria de requisitar um dos nossos advogados?
                </h3>
                <Link href="/contact" passHref>
                    <button
                        type="button"
                        className="bg-yellow w-36 rounded-lg font-extrabold py-4 xs:text-sm sm:text-xs lg:text-lg text-black xs:mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
                    >
                        Contate-nos
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Advogados;