import React from 'react'
import Image from "next/image";
import dashboard from "../public/dashboard.svg";
import Link from "next/link";


const Dashboard = () => {
  return (
    <div className=".container-dashboard">
      <Image src={dashboard} alt="dashboard" />
    </div>
  )
}

export default Dashboard;
