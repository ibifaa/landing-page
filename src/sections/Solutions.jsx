import SolutionCard from "../components/SolutionCard";
import softwareSolutionData from "../data/softwareSolutionData.js";

function Solutions() {
  return (
    <div className="sm:px-[100px] px-[20px] py-[100px] flex flex-col  w-full place-content-center ">
        <div className="flex w-full place-content-center">  <p className='md:text-[32px] text-[28px] leading-[48px] text-center md:w-[45%] sm:[60%] w-full justify-self-center  sm:mb-[20px] mb-[5px]'>Unique Software Solutions for Your Businesses</p></div>
       
        <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 w-full md:gap-[20px] sm:gap-[10px] gap-[5px]">
        {softwareSolutionData.map((item, index) => (
    <div key={index}>
      <SolutionCard item={item} />
    </div>
  ))}
        </div>
      
    </div>
  )
}

export default Solutions;
