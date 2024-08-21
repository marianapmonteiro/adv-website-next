const Footer = () => {
    return (
        <footer className="md:h-[359px] w-full bg-black text-white ">
            <div className=" w-full flex md:flex-row items-start justify-center xs:gap-10 md:gap-20  py-10 text-[14px] xs:flex-col xs:h-auto xs:pl-4">
                <div className="flex flex-col justify-start w-auto">
                    <h4 className="font-extrabold">Atendimento</h4>
                    <ul className="list-none py-2 space-y-2">
                        <li >
                            <a href="#"> Apoio à pessoa com deficiência</a>
                        </li>
                        <li>
                            <a href="#">Reporte um problema </a>
                        </li>
                        <li>
                            <a href="#">Entre em contato conosco</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-extrabold">Serviços</h4>
                    <ul className="list-none py-2 space-y-2">
                        <li>
                            <a href="#">Direito Civil</a>
                        </li>
                        <li>
                            <a href="#">Direito Penal</a>
                        </li>
                        <li>
                            <a href="#">Direito Administrativo</a>
                        </li>
                        <li>
                            <a href="#">Direito do Trabalho</a>
                        </li>
                        <li>
                            <a href="#">Direito Empresarial</a>
                        </li>
                        <li>
                            <a href="#">Direito Internacional</a>
                        </li>
                        <li>
                            <a href="#">Direito da Propriedade Intelectual</a>
                        </li>
                        <li>
                            <a href="#">Direito do Consumidor</a>
                        </li>
                        <li>
                            <a href="#">Direito da Família e Sucessões</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-extrabold">Como funcionamos
                    </h4>
                    <ul className="list-none py-2 space-y-2">
                        <li>
                            <a href="#">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="#">Advogados</a>
                        </li>
                        <li>
                            <a href="#">Guias</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Políticas da Estella&Suita</a>
                        </li>
                        <li>
                            <a href="#">Política de privacidade</a>
                        </li>
                        <li>
                            <a href="#">LGPD</a>
                        </li>
                        <li>
                            <a href="#">Termos de serviço</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[100%] bg-yellow h-[1px] mt-2 mx-auto"></div>
            <div className="w-full md:flex-row flex xs:flex-col  xs:items-start md:justify-center md:items-center px-4 xs:gap-4 md:gap-96 py-4">
                <div className="flex gap-2">
                    <img src="/language.png" alt="ícone de linguagem" />
                    <p className="text-[14px]">Português (BR)</p>
                </div>
                <div className="flex md:flex-row gap-2 xs:flex-col xs:items-start justify-center md:items-center">
                    <p className="text-[14px]">Siga-nos em nossas redes:</p>
                    <div className="flex gap-4 xs:py-2 justify-center items-center">
                        <img src="/twitter.png" alt="ícone de twitter" />
                        <img src="/instagram.png" alt="ícone de instagram" />
                        <img src="/linkedin.png" alt="ícone de linedIn" />
                        <img src="/youtube.png" alt="ícone de youtube" />
                        <img src="/tiktok.png" alt="ícone tiktok" />
                        <img src="/facebook.png" alt="ícone facebook" />
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;