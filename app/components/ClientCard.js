import Image from "next/image";

const ClientCard = ({ title, img }) => {
    return (
        <div className="relative max-w-[433px] w-full border-2 border-black rounded-[36px] py-8 px-4 flex flex-col items-center bg-white ">
            {/* Background Image */}
            <div className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 w-[130px] h-[130px] z-10">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-[36px]" // Match border radius on top
                    alt={title}
                />
            </div>

            {/* Decorative Element */}
            <div
                className="absolute overflow-hidden top-[-55px] left-1/2 transform -translate-x-1/2 w-[150px] h-[130px] bg-white border-2 border-black rounded-b-full"
                style={{ clipPath: "inset(41% 0 0 0)" }}
            />

            {/* Title */}
            <h3 className="mt-16 text-center font-bold text-xl text-black lora-font lg:text-[33.16px] mb-4 text-[33.16px] xs:text-[24px]">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-2 px-4 text-black text-start md:text-[18.66px] leading-[22.58px] sm:text-[16px]">
                “É com imensa satisfação que expresso minha profunda gratidão pelos serviços excepcionais prestados pela equipe de advogados deste escritório. Desde o momento em que me vi enfrentando questões jurídicas complexas, fui acolhido com profissionalismo, expertise e um compromisso inabalável com a busca da justiça.
                <br className="mt-4" />
                <div className="my-4" />
                A competência demonstrada por cada membro da equipe foi notável, proporcionando-me confiança e tranquilidade durante todo o processo. A clareza nas explicações, a atenção aos detalhes e a prontidão para responder às minhas dúvidas foram elementos fundamentais que destacaram o profissionalismo da Estella&Suita.”
            </p>
        </div>
    );
};

export default ClientCard;
