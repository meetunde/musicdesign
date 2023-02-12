import React, { useState } from "react";
import musicLogo from "./assets/icon-music.svg";

const Footer = () => {
  const [Datas, setDatas] = useState({
    plan: "Annual Plan",
    year: "$59.99/year",
  });
  function clicktoChange() {
    if (Datas.plan === "Annual Plan") {
      setDatas({
        plan: "Monthly Plan",
        year: "$4.99/month",
      });
    }else{
      setDatas({
        plan: "Annual Plan",
        year: "$59.99/year"
    });
  }
  }

  function clicktoCancel (){
    setDatas('')
  }
  return (
    <div>
      <div className="logologo">
        <img src={musicLogo} alt="" />
        <h3 className="annual">
          {Datas.plan}
          <br />
          {Datas.year}
        </h3>
        <p onClick={clicktoChange} className="changed">
          Change
        </p>
      </div>
      <div>
        <button className="btn">Proceed to Payment</button>
        <p onClick={clicktoCancel} className="classplan">Cancel Order</p>
      </div>
    </div>
  );
}

export default Footer
