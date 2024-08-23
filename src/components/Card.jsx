import React from 'react'

function Card({item}) {
  return (
    <div className='py-[10px] items-center border border-dashed rounded-[20px] border-[#1212121A] p-[10px] my-[20px]'
>
   <p className='text-[14px] leading-[24px] font-normal'>{item.name}</p>
    <div className="w-[110px] h-[22px] bg-[#1212121A] rounded-[40px]"></div>
    <div className='flex'> <p className="text-[24px] leading-[30px] text-black">{item.price}</p>
    <div className="bg-white p-2 h-[41px] w-[41px] flex items-center"><img src={item.url} alt="icon" /></div></div>
    
</div>
  )
}

export default Card
