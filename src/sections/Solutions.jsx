import SolutionCard from "../components/SolutionCard";
import softwareSolutionData from "../data/softwareSolutionData.js";

function Solutions() {
  return (
    <div className="px-[100px] py-[100px] flex flex-col  w-full place-content-center ">
        <div className="flex w-full place-content-center">  <p className='text-[32px] leading-[48px] text-center w-[45%] justify-self-center '>Unique Software Solutions for Your Businesses</p></div>
       
        <div className="grid sm:grid-cols-3 grid-cols-1 w-full gap-[20px]">
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
