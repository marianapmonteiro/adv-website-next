import ClientCard from "../ClientCard";


const Depoimentos = () => {
    const cards = [
        'Joise da Silva',
        'Joise da Silva',
        'Joise da Silva',
        'Joise da Silva',
    ]
    return (
        <div className="relative bg-white min-h-screen w-full pt-14 flex flex-col justify-center items-center">
            <div className="text-black text-center md:text-[44.2px] font-extrabold w-full xs:text-[24px]">
                <h3>Depoimentos de nossos <span className="border-b-[4px] h-36 border-yellow rounded-[3px] mt-2">clientes</span></h3>
            </div>
            <div className="md:mt-28 xs:mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20 p-4 justify-items-center max-w-[80%] mx-auto ">
                {cards.map((item, index) => {
                    return (
                        <ClientCard title={item} key={index} img="/woman-img.png" />
                    )
                })}
            </div>
        </div>
    )
}

export default Depoimentos;