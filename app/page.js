import Image from "next/image";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Depoimentos from "./components/Home/Depoimentos";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Depoimentos />
    </main>
  );
}

// sm:w-[80%] md:w-[50%] xl:w-[35%] md:mt-20
