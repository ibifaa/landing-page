import "../index.css";
import hamburger from "../assets/svg/hamburger-menu.svg";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("harmburger is clicked")
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  

  return (
    <div className="relative z-2 flex w-full justify-between shadow-sm px-5 sm:px-[100px] py-2 bg-[#070527] text-white items-center">
      <div> <h3 className="text-[24px]">Appnovia</h3></div>
       

       <div className=" w-[100%] sm:w-[60%]">
       <ul
    className={`absolute sm:flex z-1 w-[100%] sm:w-[60%]  h-[100vh] sm:h-1 sm:p-0 p-5 bg-white sm:bg-transparent gap-[30px] justify-center right-0 sm:right-[20%] top-[50px] sm:top-[15px] ${isOpen ? "block" : "hidden"}`}
  >
    <li className="list-none text-black sm:text-white text-[20px] sm:text-[16px] m-3 sm:m-0">Home</li>
    <li className="list-none text-black sm:text-white text-[20px] sm:text-[16px] m-3 sm:m-0">Products</li>
    <li className="list-none text-black sm:text-white text-[20px] sm:text-[16px] m-3 sm:m-0">Solutions</li>
    <li className="list-none text-black sm:text-white text-[20px] sm:text-[16px] m-3 sm:m-0">Testimonials</li>
    <li className="list-none text-black sm:text-white text-[20px] sm:text-[16px] m-3 sm:m-0">Contact Us</li>
  </ul>
       </div>

       <div>
        <div className="hidden sm:flex"> <button className="border-[2px] border-[#00C6C3] text-white text-[18px] leading-[24px] py-2 px-[20px] rounded ">Get Started</button></div>    
       
       <div>
         <div className="sm:hidden" onClick={toggleMenu}>
           <img src={hamburger} alt="harmburger" />
          </div>
         
        </div>
       </div>
  
     

    </div>
  );
}

export default Header;
