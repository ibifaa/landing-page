function TestimonialCard({ item }) {
  return (
    <div className="shadow-lg shadow-[#E6E6E6E5] min-w-[522px] min-h-[212px] p-5 rounded-[20px] overflow-x-clip space-x-5  ">
      <div>
        <div className="flex gap-2">
          {" "}
          <div className="h-[72px] w-[72px] flex justify-center items-center bg-[#00C6C333] p-1 rounded-full">
            {" "}
            <img src={item.url} alt="icon" />
          </div>
        <div>
          {" "}
          <h3 className="text-[18px] leading-[24px] ">
            {item.name}
          </h3>
          <p>{item.position}</p>
        </div>
        </div>
        <p>{item.test}</p>
      </div>

      <p className="text-[16px] font-normal leading-[24px]">{item.text}</p>
    </div>
  );
}

export default TestimonialCard;
