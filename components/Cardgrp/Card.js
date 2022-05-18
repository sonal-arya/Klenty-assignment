import React from "react";
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <>
      <div className="card">
        <Image src={image} width="41px" height="41px" className="cardLogo" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
