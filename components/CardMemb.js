import Image from "next/image";

const Member = ({ image, description }) => {
  return (
    <>
      {/* <div className="member">
        <div>
          <Image src="/Vector.png" width="57" height="65" className="memLogo"/>
          <p>
            Klenty has helped us engage a far greater <br /> number of leads per
            week, resulting in an <br /> outbound revenue jump of 93%,
          </p>
          <div>
            <Image src="/Group 992.png" width="359" height="48" className="company" />
          </div>
        </div>
        <div>
          <Image src="/gavin.png" width="293px" height="281px" className="memberImg" />
        </div>
      </div> */}
          
      <div className="member">
        <div>
          <Image src="/Vector.png" width="57" height="65" className="memLogo"/>
          <p>
          It changed our business. Klenty allowed <br/> our outbounds sales team to<br/> leverage their time and skills 
          </p>
          <div>
            <Image src="/Group 992.png" width="359" height="48" className="company" />
          </div>
        </div>
        <div>
          <Image src="/Group 1007.png" width="293px" height="281px" className="memberImg" />
        </div>
      </div>

     

    </>
  );
};

export default Member;
