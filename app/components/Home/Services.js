import Card from "../Card";

const Services = () => {
    const list = [
        'Direito Empresarial ',
        'Direito Empresarial ',
        'Direito Empresarial ',
        'Direito Empresarial ',
        'Direito Empresarial ',
        'Direito Empresarial ',
    ];
    return (
        <div className="w-full h-auto bg-white flex flex-col justify-center pt-10">
            <div className="text-black text-center md:text-[44.2px] font-extrabold w-full xs:text-[24px]">
                <h3>Como podemos te ajudar?</h3>
                <div className="w-[80%] bg-yellow h-2 mt-2 mx-auto rounded-2xl"></div>
            </div>
            <div className="md:mt-20 xs:mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-4 justify-items-center max-w-[80%] mx-auto ">
                {list.map((item, index) => (
                    <Card title={item} key={index} />
                ))}
                <div className="w-full flex items-center justify-end text-black font-extrabold text-[18.66px] gap-4 py-8 col-span-full">
                    <p className="hover:text-yellow transition-colors cursor-pointer">Mais serviços</p>
                    <svg width="167" height="24" viewBox="0 0 167 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM166.061 13.0607C166.646 12.4749 166.646 11.5251 166.061 10.9393L156.515 1.3934C155.929 0.807611 154.979 0.807611 154.393 1.3934C153.808 1.97919 153.808 2.92893 154.393 3.51472L162.879 12L154.393 20.4853C153.808 21.0711 153.808 22.0208 154.393 22.6066C154.979 23.1924 155.929 23.1924 156.515 22.6066L166.061 13.0607ZM2 13.5L165 13.5V10.5L2 10.5L2 13.5Z" fill="#D4B99E" />
                    </svg>
                </div>
            </div>


        </div>
    );
};

export default Services;
