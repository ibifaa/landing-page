import partners from "../partner.js";
import Partners from "../components/Partners";
import { useEffect } from "react";
import hero from "../assets/png/hero.png"

function Hero() {
 
  return (
    <section  className="
  
  "
  style={{
    backgroundImage: `linear-gradient(90deg, #020024CC 25%, rgba(188, 189, 190, 0.1) 40%), url(${hero})`,
    // backgroundPosition: 'top left, -292px -199.998px',
    // backgroundSize: 'cover, 120.893% 228.667%',
  }}>
        <div className="flex-wrap ">
            <div className="w-[100%] sm:w-[50%] sm:py-20 py-[20px]  px-5 sm:px-[100px]">
                <h1 className="sm:text-[45px] text-[35px] font-extrabold text-white sm:leading-[72px] leading-[55px]">Empower Your Business With Our <span className="text-[#00C6C3]">Software</span>  Solutions</h1>
                <p className="text-white text-[18px] leading-[27px] sm:my-[10px] my-[30px]">Simplify your operations with custom software designed to solve your unique business challenges</p>
                <button className="text-[18px] px-[32px] py-[20px] my-[20px]  bg-[#00C6C3] w-[226px] h-[60px] rounded-[4px] sm:my-[10px] smy-[20px]">Learn More</button>
            </div>
            <div className="hidden sm:block"></div>
        </div>
        <div className="bg-[#52516580] sm:px-[100px] pb-[10px] px-[20px]">
            <p className="text-white text-center py-[20px]">Trusted by <span className="text-[#00C6C3]">50+ </span> Partners & Customers</p>
            <div className="grid sm:grid-cols-5 grid-cols-2 sm:mb-2 mb-[20px] ">
  {partners.map((item, index) => (
    <div key={index}>
      <Partners item={item} />
    </div>
  ))}
</div>
        </div>
      
    </section>
  )
}

export default Hero;
