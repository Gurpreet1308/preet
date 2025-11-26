import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-[#0f3b30] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE CONTENT */}
        <div className="md:w-1/2">
          <p className="text-center md:text-left font-semibold tracking-widest text-yellow-400 mb-3">
            our story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-center md:text-left">
            Enjoy Every Moment with<br />Tasty Breakfast, Hearty Mains & Drinks
          </h2>

          <p className="mt-6 text-gray-300 leading-7 text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-10 mt-10">
            <div className="text-center">
              <div className="text-4xl text-yellow-500">🍃</div>
              <h3 className="font-bold italic mt-2">HYGIENIC FOOD</h3>
              <p className="text-gray-400 text-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-yellow-500">🏛</div>
              <h3 className="font-bold italic mt-2">FRESH AMBIENCE</h3>
              <p className="text-gray-400 text-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="flex justify-center md:justify-start mt-10 gap-10">
            <div>
              <p className="font-bold italic">Booking Request :</p>
              <p className="text-yellow-300 mt-1">+80 (400) 123 4567</p>
            </div>

            <div>
              <p className="font-bold italic">Email :</p>
              <p className="text-yellow-300 mt-1">booking@jaicafe.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-t-full border-4 border-yellow-500">
            <Image
              src="/burger.png"
              alt="Restaurant"
              width={500}
              height={600}
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
