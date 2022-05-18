import Navbar from "../components/Navbar";
import Image from "next/image";
import Cards from "../components/Cardgrp/Cardgrp";
import Member from "../components/CardMemb";



export default function Home() {
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="banner">
          <div>
            <h1 className="heading1"> Dont just integrate</h1>
            <h1 className="heading2"> Accelerate your CRM</h1>
            <p>
              Propel your sales team into a state of floe with CRM <br />
              Accelerations. Switch out boring hours of repetitive work with{" "}
              <br /> high-impact activities. Build a repeatable sales process.{" "}
            </p>
            <button className="btn">GET STARTED</button>
          </div>
          <div>
            <Image src="/Group 1006.png" width="520" height="500" className="img"/>
          </div>
        </div>
        <div className="banner2">
          <h1 className="heading">CRM Acceleration</h1>
          <p>Everything CRM Integrations was supposed to be. And more.</p>
         <Cards/>
        </div>
        <div className="banner3">
          <h1 className="heading">What our customers have to say</h1>
          <Member/>
        </div>
      </div>
    </>
  );
}
