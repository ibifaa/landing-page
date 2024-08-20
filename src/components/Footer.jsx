import facebook from "../assets/svg/facebook.svg"
import x from "../assets/svg/x.svg";
import linkedin from "../assets/svg/linkedin.svg";

function Footer() {
  return (
    <div className="bg-[#020024] px-[100px] text-white py-[20px]"> 
      <div className="2fr">
        <h3 className="text-[40px] leading-[60px]">Appnovia</h3>
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-1">
        {" "}
        <div className="col-span-2">
          <p className="text-[16px] leading-[24px] mb-[20px] w-[80%]">Creating cutting edge & future-proof digital solutions for you.</p>
          <p className="text-[16px] leading-[24px] mb-[20px] w-[80%]">
            4A Etim Okpoyo Close, Furniture Square, after Total Filling Station
            By Aba Express Road, Port Harcourt, Rivers
          </p>

          <div className="col-span-1 flex gap-[10px]">
            <div className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><img src={linkedin} alt="linkedin" /></div>
            <div className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><img src={x} alt="x" /></div>
            <div className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><img src={facebook} alt="facebook" /></div>
           
          </div>
        </div>
        <div className="col-span-1">
          <h4 className="text-[20px] leading-[30px] font-bold mb-[20px]">Products</h4>
          <ul>
            <li className="text-[16px] leacing-[24px]">Novia Care</li>
            <li className="text-[16px] leacing-[24px]">Novia Book</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-[20px] leading-[30px] font-bold mb-[20px]">Services</h4>
          <ul>
            <li className="text-[16px] leacing-[24px]">Enterprise Resource Planning</li>
            <li className="text-[16px] leacing-[24px]">Human Resource</li>
            <li className="text-[16px] leacing-[24px]">Inventory Management</li>
            <li className="text-[16px] leacing-[24px]">Ecommerce</li>
            <li className="text-[16px] leacing-[24px]">Electronic Medical Record</li>
            <li className="text-[16px] leacing-[24px]">Learning Management System</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-[20px] leading-[30px] font-bold mb-[20px]">Company</h4>
          <ul>
            <li className="text-[16px] leacing-[24px]">About Us</li>
            <li className="text-[16px] leacing-[24px]"> Contact Us</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-[20px] leading-[30px] font-bold mb-[20px]">Legal</h4>
          <ul>
            <li className="text-[16px] leacing-[24px]">Privacy Policy</li>
            <li className="text-[16px] leacing-[24px]"> Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
