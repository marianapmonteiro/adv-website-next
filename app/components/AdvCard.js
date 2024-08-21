import Image from "next/image";

const AdvCard = ({ name, funcao, img }) => {
    return (
        <div className="relative border-black border-2 rounded-[36px] text-black px-4 w-auto h-auto xl:max-w-[50%] py-6 flex flex-col items-center justify-center">
            <div className="absolute xs:top-[-65px] md:top-[0] md:left-[-65px] mx-0">
                <Image
                    src={img}
                    width="134"
                    height="134"
                    className="rounded-t-[36px]" // Match border radius on top
                    alt={name}
                />
            </div>
            <div className="flex xs:flex-col md:flex-row justify-between items-center pb-4 w-[80%] xs:pt-16 md:pt-0">
                <h4 className="lora-font xs:text-[24px] md:text-[28px] font-extrabold xs:mb-2 md:mb-0 flex-shrink-0 bg-yellow py-1 px-4 rounded-[8px]">{name}</h4>
                <p >{funcao}</p>
            </div>
            <div className="xs:px-4 md:px-20 text-[18px] xs:mt-4 md:mt-0 text-justify">
                <p>
                    “É com imensa satisfação que expresso minha profunda gratidão pelos serviços excepcionais prestados pela equipe de advogados deste escritório. Desde o momento em que me vi enfrentando questões jurídicas complexas, fui acolhido com profissionalismo, expertise e um compromisso inabalável com a busca da justiça.
                </p>
            </div>
        </div>
    );
};

export default AdvCard;
