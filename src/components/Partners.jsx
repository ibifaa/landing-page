
function Partners({item}) {
  return (
    <div className='flex gap-[10px] py-[10px] items-center '>
        <div className="bg-white p-2 h-[41px] w-[41px] flex items-center"><img src={item.url} alt="icon" /></div>
        <p className="text-[24px] leading-[30px] text-white">{item.text}</p>
      
    </div>
  )
}

export default Partners;
