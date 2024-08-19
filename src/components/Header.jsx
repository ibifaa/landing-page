import "../index.css";
import hamburger from "../assets/svg/hamburger-menu.svg"
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
    <div className="relative flex w-full items-center justify-between shadow-sm px-2 sm:px-[60px] py-2 bg-[#070527] text-white ">
      <div> <h3 className="text-[24px]">Appnovia</h3></div>
       

       <div className="relative">
       <ul
    className={`absolute flex flex-col sm:flex-row sm:gap-5 items-center left-0 sm:top-[50px] sm:mr-[0px] mt-[0px] sm:mt-[0px] ${isOpen ? "block" : "hidden"}`}
  >
    <li className="list-none text-white">Home</li>
    <li className="list-none text-white">Products</li>
    <li className="list-none text-white">Solutions</li>
    <li className="list-none text-white">Testimonials</li>
    <li className="list-none text-white">Contact Us</li>
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
