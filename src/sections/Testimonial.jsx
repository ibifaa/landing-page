import TestimonialCard from "../components/TestimonialCard";
import testimonialData from "../data/testimonialData.js";


function Testimonial() {
  return (
    <div className="sm:px-[100px] px-[20px] py-[50px] flex flex-col  w-full place-content-center ">
        <div className="flex w-full place-content-center">  <p className='text-[32px] leading-[48px] text-center md:w-[45%] sm:[60%] w-full justify-self-center '>What Our Users Say About Us</p></div>
        <p className="text-center">These testimonials showcase Appnovia dedication to clients </p>
       
        <div className="flex flex-wrap w-[100%] gap-5">
        {testimonialData.map((item, index) => (
    <div key={index}>
      <TestimonialCard item={item} />
    </div>
  ))}
        </div>
      
    </div>
  )
}

export default Testimonial; 
