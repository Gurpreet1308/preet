import Image from "next/image";

export default function Banner() {
    return(
        <div className="relative gur min-h-screen ">
           <video
             src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
           />
           <div className="absolute left-1/2 top-50 -translate-x-1/2 -translate-y-1/2">
          <h1> <span className="width-40%">Where Taste Meets</span> elegance </h1>
          <h2></h2>
          <div className="flex gap-10 pl-10">
           </div>
          </div>
          <a href="#reservation" className="tst-scroll-btn tst-res-btn">
        <svg viewBox="0 0 500 500">
          <path
            id="circlePath"
            d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
            fill="none"
          ></path>
          <text className="text-path">
            <textPath href="#circlePath" startOffset="0%">
              Book Now . Book Now . Book Now . Book Now . Book Now . Book Now . Book Now .
            </textPath>
          </text>
        </svg>
 
        <span className="tst-scroll-btn-icon">
          <img src="/dining.png" alt="icon" />
        </span>
      </a>
 
      <svg
        xmlns="http://www.w3.org/2000/svg"

        width="310"
        height="155"
        className="bg-angle-center"
      >
        <path
          fillRule="evenodd"
          fill="#18312e"
          d="M0.428,155.011 C90.619,142.124 142.169,90.688 155.083,0.685 C167.937,90.657 219.455,142.094 309.639,154.903"
        ></path>
      </svg>
        </div>
    );
}