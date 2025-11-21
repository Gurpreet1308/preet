"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-[#18312e] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        
        <Link href="/">
          <Image 
            src="/logos.png"
            alt="logo"
            width={140}
            height={60}
            priority
          />
        </Link>

        <nav className="flex gap-8 text-[17px] font-medium">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="bg-orange-500 text-white py-2 px-5 rounded-md hover:bg-orange-600 transition">
          Submit
        </button>

      </div>
    </header>
  );
}
