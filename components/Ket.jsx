import React from 'react'
import Image from "next/image";
import ket from "../public/ket.svg";
import Link from "next/link";


const Ket = () => {
  return (
    <div>
      <Image src={ket} alt="ket" />
    </div>
  )
}

export default Ket;
