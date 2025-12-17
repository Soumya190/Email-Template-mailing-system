"use client";
import React,{useState} from 'react';
import Styles from  '../../Styles/Dashboard/navbar.module.scss';

const Navbar=()=>{
    return(
        <>
        <div className={Styles.navbarContainer}>
            <h1>Dashboard</h1>
        </div>
        </>
    )
}

export default Navbar;