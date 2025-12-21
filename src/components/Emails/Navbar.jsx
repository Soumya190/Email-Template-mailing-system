"use client";
import React,{useState} from 'react';
import Styles from  '../../Styles/Emails/navbar.module.scss';

const Navbar=()=>{
    return(
        <>
        <div className={Styles.navbarContainer}>
            <h1>Send Email</h1>
        </div>
        </>
    )
}

export default Navbar;