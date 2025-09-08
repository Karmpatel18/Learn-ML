'use client'

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-inter w-full min-h-screen max-w-full justify-center">
      <Navbar />
      <div className="relative flex flex-col items-center w-full max-w-full min-h-screen justify-center">
        <Hero />
        <Footer />
        <div
        className="absolute inset-0 
        bg-[radial-gradient(#9CA3AF_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30
        [mask-image:radial-gradient(circle,rgba(0,0,0,1),transparent)]
        [-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1),transparent)] -z-10"
        />
        <div className="bg-neutral-200 border-8 rounded-2xl border-neutral-900 h-auto w-full max-w-7xl justify-center flex mb-20">
          <Image src="/ml1.png" alt="ml illustration" width={700} height={400} className="object-cover w-full max-w-full rounded-2xl" />
        </div>

      </div>
      
    </div>
  );
}
