
function SolutionCard({item}) {
  return (
    <div className='shadow-lg shadow-[#6E758812] w-[320px] h-[230px] p-5 rounded-[20px] '>
       
        <div className="h-[72px] w-[72px] flex justify-center items-center bg-[#00C6C333] p-1 rounded-full"> <img src={item.url} alt="icon" /></div>
        <h3 className="text-[24px] leading-[38px] font-semibold">{item.title}</h3>
        <p className="text-[16px] font-normal leading-[24px]">{item.text}</p>

      
    </div>
  )
}

export default SolutionCard;
