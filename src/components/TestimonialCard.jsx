function TestimonialCard({ item }) {
  {console.log(item)}
  return (
    <div className="shadow-lg shadow-[#E6E6E6] md:w-[522px] w-full md:h-[100%] h-[100%] p-5 rounded-[20px]">
  <div className="flex gap-4">
    <div className="smh-[72px] w-[72px] flex justify-center items-center bg-[#00C6C333] p-1 rounded-full m-[20px]">
      <img src={item.url} alt="icon" className="h-full w-full object-cover rounded-full" />
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="text-[18px] font-semibold leading-[24px]">
        {item.name}
      </h3>
      <p className="text-[14px] text-gray-600">{item.position}</p>
    </div>
  </div>
  <p className="text-[16px] font-normal leading-[24px] text-ellipsis overflow-hidden">
    {item.test}
  </p>
</div>
  );
}

export default TestimonialCard;
