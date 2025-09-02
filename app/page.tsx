import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-inter w-full min-h-screen max-w-full ">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
