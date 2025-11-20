import Image from "next/image";

export default function Aboutus() {
    return(
        <div className="flex ">
            <div className="about">
                <h3>Authentic Flavours</h3>
                <h2>A True Taste of Punjab Right Here in Saskatoon</h2>
                <p>At Lucky’s Indian À La Carte, we don’t just serve food — we serve memories. Indulge in bold Punjabi flavours, aromatic spices, and handcrafted dishes that celebrate India’s rich culinary heritage, all in a warm and contemporary Saskatoon setting.</p>
                 <button className="btn">
                Order Now
            </button>
            </div>
            <div className="pt-30">
                <Image
                src={"/burger.png"}
                alt="image"
                height={500}
                width={500}
                />
            </div>
        </div>
    );
}