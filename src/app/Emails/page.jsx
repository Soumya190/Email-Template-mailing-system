// import MainSection from '../../components/Dashboard/MainSection';
// import React from 'react'
// import Navbar from "@/components/Dashboard/Navbar"
// import Styles from '@/Styles/Dashboard/navbar.module.scss'

const page = () => {
  const handleSendEmail = async () => {
    const response = await fetch("/api/send-email", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
    const data = await response.json();
    console.log(data);
  }

  handleSendEmail();
  return (
    // <MainSection/>
    <>
      {/* <MainSection/> */}
      hello
      {/* <div className={Styles.navbar}>Dashboard Home Page</div> */}
    </>
  )
}

export default page