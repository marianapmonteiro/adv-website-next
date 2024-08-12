import Image from "next/image";

const ClientCard = ({ title, img }) => {
    return (
        <div className="relative h-auto border-2 border-black rounded-[36px] max-w-[433px] max-h-[730px] py-8 px-4 flex flex-col items-center" >
            <div className="absolute z-50 top-[-65px] w-[130px] h-[130px]">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-[36px]" // Match border radius on top
                    alt={title}
                />
            </div>
            <div className="absolute overflow-hidden top-[-55px] z-30 left-1/2 transform -translate-x-1/2 w-[150px] h-[130px] bg-white border-2 border-black rounded-b-full" />
            <h3 className="mt-16 text-center font-bold text-xl text-black lora-font text-[33.16px] mb-4">
                {title}
            </h3>
            <p className="mt-2 px-4 text-black text-start text-[18.66px] leading-[22.58px] ">
                “É com imensa satisfação que expresso minha profunda gratidão pelos serviços excepcionais prestados pela equipe de advogados deste escritório. Desde o momento em que me vi enfrentando questões jurídicas complexas, fui acolhido com profissionalismo, expertise e um compromisso inabalável com a busca da justiça.
                <br className="mt-4" />
                <div className="my-4" />
                A competência demonstrada por cada membro da equipe foi notável, proporcionando-me confiança e tranquilidade durante todo o processo. A clareza nas explicações, a atenção aos detalhes e a prontidão para responder às minhas dúvidas foram elementos fundamentais que destacaram o profissionalismo da Estella&Suita.”
            </p>
        </div>
    );
};

export default ClientCard;
