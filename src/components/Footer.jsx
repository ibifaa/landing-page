import React from "react";

function Footer() {
  return (
    <div className="bg-[#020024] px-[100px] text-white"> 
      <div className="2fr">
        <h3 className="text-[40px] leading-[60px]">Appnovia</h3>
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-1">
        {" "}
        <div className="col-span-2">
          <p>Creating cutting edge & future-proof digital solutions for you.</p>
          <p>
            4A Etim Okpoyo Close, Furniture Square, after Total Filling Station
            By Aba Express Road, Port Harcourt, Rivers
          </p>

          <div className="col-span-1">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <h4>Products</h4>
          <ul>
            <li>Novia Care</li>
            <li>Novia Book</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4>Services</h4>
          <ul>
            <li>Enterprise Resource Planning</li>
            <li>Human Resource</li>
            <li>Inventory Management</li>
            <li>Ecommerce</li>
            <li>Electronic Medical Record</li>
            <li>Learning Management System</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li> Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
