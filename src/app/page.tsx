import Aboutus from "@/Component/Aboutus";
import Banner from "@/Component/Banner";
import Form from "@/Component/Form";
import Header from "@/Component/Header";
import Selections from "@/Component/Selections";
import Service from "@/Component/Service";
import Story from "@/Component/Story";
import Testimonials from "@/Component/Testinomials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Service/>
      <Aboutus/>
      <Selections/>
      <Story/>
      <Testimonials/>
      <Form/>
   </>
  );
}
