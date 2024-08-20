
function Partners({item}) {
  return (
    <div className='flex gap-[10px] py-[10px] items-center '>
        <div className="bg-white px-[0.5px] w-[30px] h-[30px]  flex items-center justify-center"><img className="w-[60%]" src={item.url} alt="icon" /></div>
        <p className="sm:text-[20px] text-[18px] leading-[30px]  text-white">{item.text}</p>
      
    </div>
  )
}

export default Partners;
