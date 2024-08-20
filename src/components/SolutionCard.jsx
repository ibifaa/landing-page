
function SolutionCard({item}) {
  return (
    <div className='shadow-lg shadow-[#6E758812] h-[250px] w-full p-5 rounded-[20px] gap-4 '>
       
        <div className="md:h-[72px] md:w-[72px] sm:w-[60px] sm:h-[60px] flex justify-center items-center bg-[#00C6C333] p-1 rounded-full md:mb-[20px] sm:mb-[10px] mb-[5px]"> <img className="w-[60%]" src={item.url} alt="icon" /></div>
        <h3 className="md:text-[24px] leading-[38px] sm:text-[18px] font-semibold md:mb-[20px] sm:[10px] mb-[5px]">{item.title}</h3>
        <p className="text-[16px] font-normal leading-[24px]">{item.text}</p>

      
    </div>
  )
}

export default SolutionCard;
