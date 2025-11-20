import Image from "next/image";

export default function Header() {
    return(
        <div className=" flex justify-between items-center py-4 px-8 shadow-lg ">
            <Image 
             src={"/logos.png"}
             alt="logo"
             height={300}
             width={300}
             />
             <div className="flex gap-10">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">Service</a>
                <a href="#">Contact</a>
             </div>
             <button className="btn">Submit</button>
        </div>
    );
}