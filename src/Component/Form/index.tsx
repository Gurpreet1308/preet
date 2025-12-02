"use client"
export default function Form() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/form-banner.webp')" }}
    >
      <div className="bg-[#0f3b34]/95 border-2 border-[#d4a552] form rounded-xl max-w-3xl w-full p-10 text-center shadow-xl">
        
        <p className="text-[#d4a552] mb-2 tracking-widest font-semibold">
          ONLINE RESERVATION
        </p>

        <h1 className="text-3xl font-bold text-white mb-3">Book A Table</h1>
        <p className="text-gray-300 mb-8">
          Booking request <span className="text-[#d4a552] font-semibold">+1-800-852-9001</span> or fill out the order form
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="text" placeholder="Phone Number" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <select className="input">
            <option>Number of Guests</option>
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
          </select>
          <input type="date" className="input" />
          <select className="input">
            <option>Select Time</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
          </select>
          <textarea placeholder="Message" className="input md:col-span-2 h-32"></textarea>
        </form>

        <button className="mt-7 bg-[#d4a552] text-black font-semibold py-3 rounded-md w-full hover:opacity-80">
          SEND MESSAGE
        </button>

      </div>
    </div>
  );
}
