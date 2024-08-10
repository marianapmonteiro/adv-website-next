import Image from "next/image";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}

// sm:w-[80%] md:w-[50%] xl:w-[35%] md:mt-20
