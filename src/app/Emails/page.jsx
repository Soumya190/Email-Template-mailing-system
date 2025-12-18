// import MainSection from '../../components/Dashboard/MainSection';
// import React from 'react'
// import Navbar from "@/components/Dashboard/Navbar"
// import Styles from '@/Styles/Dashboard/navbar.module.scss'
"use client"
import { useState } from 'react';
import MainSection from '../../components/Emails/MainSection';

const page = () => {
  // handleSendEmail();
  return (
    // <MainSection/>
    <>
      <MainSection/>
      {/* <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" value={values.name} onChange={handleEmailName} placeholder='Enter your name ' />
        <button>Send Email</button>
      </form> */}
      {/* <div className={Styles.navbar}>Dashboard Home Page</div> */}
    </>
  )
}

export default page