"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Definição do esquema de validação com Yup
const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    topico: Yup.string().required("Tópico é obrigatório"),
    message: Yup.string().required("Mensagem é obrigatória"),
});


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode enviar os dados do formulário para uma API ou backend
    };
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-white pt-36">
            <div className="w-full h-auto  bg-white flex flex-col items-center pt-10 text-black pb-14">
                <div className="text-black text-center sm:text-[36px] font-extrabold w-full xs:text-[24px] mb-20 xs:mb-12 ">
                    <span className="border-b-[4px] h-36 border-yellow rounded-[3px] mt-2">Entre em contato conosco</span>
                </div>
                <div className="w-full h-auto max-w-[779px] xs:px-8 sm:px-8 md:px-0 md:pt-4 flex justify-center items-center xs:text-[16px] sm:text-[20px] md:text-[24px] pb-20">
                    <p>
                        Estrella & Suita é um escritório de advocacia focado em atender suas necessidades.
                        <br />
                        <br />
                        Para entrar em contato conosco preencha esse formulário abaixo ou envie-nos um e-mail para: <span className="font-extrabold">estrellasuita.adv@gmail.com</span> ou entre em contato por via whatsapp:<span className="font-extrabold">+33 6 46 812204</span>  teremos o prazer de atendê-lo bem.
                    </p>
                </div>
                <div className="md:w-[75%] xl:w-[50%] xs:w-full xs:px-10 md:px-0 justify-self-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex md:flex-row xs:flex-col gap-3 w-full mb-[50px] justify-center xs:items-start md:items-center">
                            <label htmlFor="name" className="xs:text-[18px] md:text-[20px]">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name")}
                                className={`rounded-[10px] border w-full h-[50px] px-4 py-2 ${errors.name ? "border-red-500" : "border-black"
                                    } focus:border-yellow-500 focus:outline-none transition duration-300`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="flex md:flex-row xs:flex-col gap-3 w-full mb-[50px] justify-center xs:items-start md:items-center">
                            <label htmlFor="email" className="xs:text-[18px] md:text-[20px] flex-shrink-0">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`rounded-[10px] border w-full h-[50px] px-4 py-2 ${errors.email ? "border-red-500" : "border-black"
                                    } focus:border-yellow-500 focus:outline-none transition duration-300`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="flex md:flex-row xs:flex-col gap-3 w-full mb-[50px] justify-center xs:items-start md:items-center">
                            <label htmlFor="topico" className="xs:text-[18px] md:text-[20px]">Tópico:</label>
                            <input
                                type="text"
                                id="topico"
                                {...register("topico")}
                                className={`rounded-[10px] border w-full h-[50px] px-4 py-2 ${errors.topico ? "border-red-500" : "border-black"
                                    } focus:border-yellow-500 focus:outline-none transition duration-300`}
                            />
                            {errors.topico && (
                                <p className="text-red-500 text-sm mt-2">{errors.topico.message}</p>
                            )}
                        </div>
                        <div className="flex md:flex-row xs:flex-col gap-3 w-full mb-[50px] justify-center xs:items-start">
                            <label htmlFor="message" className="xs:text-[18px] md:text-[20px]">Mensagem:</label>
                            <textarea
                                id="message"
                                {...register("message")}
                                className={`rounded-[10px] border w-full max-h-[357px] px-4 py-2 xl:h-[357px] xs:h-[150px] ${errors.message ? "border-red-500" : "border-black"
                                    } focus:border-yellow-500 focus:outline-none transition duration-300`}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                            )}
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                type="submit"
                                className="bg-yellow w-36 rounded-lg font-extrabold py-4 xs:text-sm sm:text-xs lg:text-lg text-black mt-4 transition duration-300 ease-in-out transform hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
                            >
                                Enviar
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;