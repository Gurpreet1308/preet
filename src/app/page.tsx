import Aboutus from "@/Component/Aboutus";
import Banner from "@/Component/Banner";
import Header from "@/Component/Header";
import Service from "@/Component/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Service/>
      <Aboutus/>
   </>
  );
}
