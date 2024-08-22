import bullet from "../assets/svg/bullet.svg";
import healthData from "../healthData";
import Card from "../components/Card";
import ChartDesign from "../components/ChartDesign";
import media from "../assets/png/media.png"

function Products() {

    const patientData = [9670, 1274, 16908];
    const patientLabels = ['Patients', 'Doctors', 'Nurses'];
    const chartTitle = 'Healthcare Staff Statistics';

  return (
    <div>
    <div className="flex sm:flex-row flex-col sm:px-[100px] px-[20px] py-[40px] gap-[20px] ">
      <div className="sm:w-[40%] w-[100%]">
        <h3 className="text-[32px] leading-[48px] font-semibold">
          Transform Your Healthcare experience with Our Smart EMR Solutions
        </h3>
        <p className="font-normal text-[18px] leading-[27px]">
          Have full control of your hospital and manage all your patients and
          staff records and activities with our Electronic Management System
          (EMR)
        </p>
        <div className="mt-[20px]">
          <div className="flex gap-[10px]">
            <div>
              <img src={bullet} alt="bullet" />
            </div>
            <p>
              Enhance data accuracy, and improve clinical outcomes with our
              advanced EMR software
            </p>
          </div>
          <div className="flex gap-[10px]">
            <div className="flex gap-[10px]">
              <img src={bullet} alt="bullet" />
            </div>
            <p>
              Experience real-time updates, and comprehensive patient management
              all in one platform
            </p>
          </div>
        </div>

        <button className="text-[18px] px-[32px] py-[5px] bg-[#020024] w-[192px] h-[56px] mt-[20px] text-white">
          Learn More
        </button>
      </div>
      <div className=" w-[60%]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            {" "}
            <div className="h-[20px] w-[20px] rounded-full bg-[#FD1919]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#FBC60D]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#95FB13]"></div>
          </div>
          <div className="w-[324px] h-[22px] bg-[#1212121A] rounded-[40px]"></div>
          <div className="w-[93px] h-[22px] bg-[#020024] rounded-[40px]"></div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <div className="flex flex-col gap-[10px] bg-[#020024] p-5 mt-[20px] pb-[40px]">
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            {healthData.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div> <ChartDesign chartData={patientData} chartLabels={patientLabels} chartTitle={chartTitle}/></div>
      </div>
    </div>

    
    <div className="flex sm:flex-row-reverse flex-col sm:px-[100px] px-[20px] py-[40px] gap-[20px] ">
      <div className="sm:w-[40%] w-[100%]">
        <h3 className="text-[32px] leading-[48px] font-semibold">
        Intuitive technology to navigate financial complexity with ease
        </h3>
        <p className="font-normal text-[18px] leading-[27px]">
        Leverage advanced analytics and real-time data to make informed financial decisions and drive business growth. Our software simplifies budgeting, forecasting, and reporting, making financial management straightforward and reliable.
        </p>
       
        <button className="text-[18px] px-[32px] py-[5px] bg-[#020024] w-[192px] h-[56px] mt-[20px] text-white">
          Learn More
        </button>
      </div>
      <div className=" w-[60%]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            {" "}
            <div className="h-[20px] w-[20px] rounded-full bg-[#FD1919]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#FBC60D]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#95FB13]"></div>
          </div>
          <div className="w-[324px] h-[22px] bg-[#1212121A] rounded-[40px]"></div>
          <div className="w-[93px] h-[22px] bg-[#020024] rounded-[40px]"></div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <div className="flex flex-col gap-[10px] bg-[#020024] p-5 mt-[20px] pb-[40px]">
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            {healthData.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div> <ChartDesign chartData={patientData} chartLabels={patientLabels} chartTitle={chartTitle}/></div>
      </div>
    </div>


    <div className="flex sm:flex-row flex-col sm:px-[100px] px-[20px] py-[40px] gap-[20px] ">
      <div className="sm:w-[40%] w-[100%]">
        <h3 className="text-[32px] leading-[48px] font-semibold">
        Enhance your operations and drive efficiency with our integrated ERP
        </h3>
        <p className="font-normal text-[18px] leading-[27px]">
        From finance and HR to supply chain management and CRM, our ERP systems integrate seamlessly across departments, providing real-time insights and facilitating informed decision-making.
        </p>
       
        <button className="text-[18px] px-[32px] py-[5px] bg-[#020024] w-[192px] h-[56px] mt-[20px] text-white">
          Learn More
        </button>
      </div>
      <div className=" w-[60%]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            {" "}
            <div className="h-[20px] w-[20px] rounded-full bg-[#FD1919]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#FBC60D]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#95FB13]"></div>
          </div>
          <div className="w-[324px] h-[22px] bg-[#1212121A] rounded-[40px]"></div>
          <div className="w-[93px] h-[22px] bg-[#020024] rounded-[40px]"></div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <div className="flex flex-col gap-[10px] bg-[#020024] p-5 mt-[20px] pb-[40px]">
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            {healthData.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div> <ChartDesign chartData={patientData} chartLabels={patientLabels} chartTitle={chartTitle}/></div>
      </div>
    </div>



    <div className="flex sm:flex-row-reverse flex-col sm:px-[100px] px-[20px] py-[40px] gap-[20px] ">
      <div className="sm:w-[40%] w-[100%]">
        <h3 className="text-[32px] leading-[48px] font-semibold">
        Seamless solution for school management
        </h3>
        <p className="font-normal text-[18px] leading-[27px]">
        Streamline administrative tasks and enhance communication within your educational institution with our comprehensive school management solutions.
        </p>
       
        <button className="text-[18px] px-[32px] py-[5px] bg-[#020024] w-[192px] h-[56px] mt-[20px] text-white">
          Learn More
        </button>
      </div>
      <div className=" w-[60%]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            {" "}
            <div className="h-[20px] w-[20px] rounded-full bg-[#FD1919]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#FBC60D]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#95FB13]"></div>
          </div>
          <div className="w-[324px] h-[22px] bg-[#1212121A] rounded-[40px]"></div>
          <div className="w-[93px] h-[22px] bg-[#020024] rounded-[40px]"></div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <div className="flex flex-col gap-[10px] bg-[#020024] p-5 mt-[20px] pb-[40px]">
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px]">
                {" "}
                <div className="h-[20px] w-[20px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[102px] h-[22px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            {healthData.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div> <ChartDesign/></div>
        {console.log(<ChartDesign/>)}
      </div>
    </div>


    <div className="flex sm:flex-row flex-col sm:px-[100px] px-[20px] py-[50px] sm:gap-[20px] gap-[30px] bg-[#00C6C31A] items-center ">
      <div className="sm:w-[40%] w-[100%]">
        <h3 className="text-[32px] leading-[48px] font-semibold">
        Experience Advance EMR Through Our Lens
        </h3>
        <p className="font-normal text-[18px] leading-[27px]">
        Get a closer look at how our EMR solution transforms patient care and streamlines medical workflows in real-time for better healthcare outcomes.
        </p>
       
        <button className="text-[18px] px-[32px] py-[5px] bg-[#020024] w-[192px] h-[56px] mt-[20px] text-white">
          Learn More
        </button>
      </div>
      <div className=" sm:w-[60%] w-full">
       <img className="w-[100%]" src={media} alt="media" />
      </div>
    </div>
      
    </div>
  );
}

export default Products;
