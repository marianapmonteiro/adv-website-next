import Image from "next/image";

const Card = ({ title }) => {
    return (
        <div className="w-auto h-auto  max-w-[278px] border-yellow border-[1px] rounded-xl">
            <Image src="/card-img.png" width="276" height="116" />
            <div className="text-black px-8 py-4">
                <h4 className="font-extrabold text-[18.66px]">{title}</h4>
                <p className="mt-2 mb-2 text-[14px] font-normal">Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe altamente qualificada e pronta para defender seus direitos.</p>
                <span className="font-extrabold text-[14px] cursor-pointer hover:text-yellow transition-colors">
                    <a>Leia Mais</a>
                </span>
            </div>
        </div>
    )
}

export default Card;