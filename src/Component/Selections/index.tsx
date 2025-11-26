"use client";
import Image from "next/image";

export default function Selections() {
    return(
        <div className="flex selections justify-between items-center p-4">
            <div className="box">
             <Image
                  src="/cat.webp"
                  alt="/"
                  width={280}
                  height={170}
                />
                <h2>Appetizers</h2>
                <p>Small bites, big flavors — the perfect beginning to your dining experience</p>
            </div>
            <div className="box">
             <Image
                  src="/cat.webp"
                  alt="/"
                  width={280}
                  height={170}
                />
                <h2>Appetizers</h2>
                <p>Small bites, big flavors — the perfect beginning to your dining experience</p>
            </div>
            <div className="box">
             <Image
                  src="/cat.webp"
                  alt="/"
                  width={280}
                  height={170}
                />
                <h2>Appetizers</h2>
                <p>Small bites, big flavors — the perfect beginning to your dining experience</p>
            </div>
        </div>
    )
}