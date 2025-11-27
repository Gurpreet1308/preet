import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-[#11332F] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">

        {/* Left Side Content */}
        <div className="bg-[#11332F] border border-yellow-500 rounded-tl-[200px] p-10 w-full md:w-1/2 text-center text-white">
          <p className="italic text-yellow-400 mb-4">Reviews</p>
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <span className="text-4xl text-yellow-400">“</span>

          <p className="mt-4 leading-relaxed">
            An unforgettable dining experience! Every dish was a masterpiece, and
            the ambiance was simply perfect. From the first bite to the last,
            every moment was pure culinary bliss. Highly recommended!
          </p>

          {/* Reviewers images */}
          <div className="flex justify-center gap-5 mt-6">
            <Image src="/p1.jpg" alt="reviewer" width={60} height={60} className="rounded-full border-2 border-yellow-500" />
            <Image src="/p2.jpg" alt="reviewer" width={60} height={60} className="rounded-full border-2 border-yellow-500" />
            <Image src="/p3.jpg" alt="reviewer" width={60} height={60} className="rounded-full border-2 border-yellow-500" />
          </div>

          <p className="italic mt-4 text-yellow-400">Victoria F.</p>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-tr-[300px] rounded-bl-[300px]">
          <Image
            src="/food.jpg"
            alt="Dining"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
