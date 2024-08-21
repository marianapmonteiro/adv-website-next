import AdvCard from "../components/AdvCard.js"


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
        </div>
    )
}

export default Advogados;