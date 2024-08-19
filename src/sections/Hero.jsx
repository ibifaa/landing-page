import partners from "../partner.js";
import Partners from "../components/Partners";

function Hero() {
    // style={{'background-image': `url(${heroImage})`}}

    console.log(partners)
  return (
    <section   className="h-[100%] sm:h-[100vh] hero">
        <div className="flex-wrap ">
            <div className="w-[50%] py-20 px-[50px]">
                <h1 className="text-[45px] font-extrabold text-white leading-[72px]">Empower Your Business With Our <span className="text-[#00C6C3]">Software</span>  Solutions</h1>
                <p className="text-white text-[18px] leading-[27px] mb-[10px]">Simplify your operations with custom software designed to solve your unique business challenges</p>
                <button className="text-[18px] px-[32px] py-[20px] bg-[#00C6C3] w-[226px] h-[60px] rounded-[4px] mt-[10px]">Learn More</button>
            </div>
            <div></div>
        </div>
        <div className="bg-[#52516580] px-[60px] pb-[10px]">
            <p className="text-white text-center pt-[10px]">Trusted by <span className="text-[#00C6C3]">50+ </span> Partners & Customers</p>
            <div className="flex justify-between mb-2">
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

export default Hero
