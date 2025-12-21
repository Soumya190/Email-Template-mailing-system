"use client"
import React ,{useState} from 'react';
import Styles from '../../../src/Styles/Emails/mainsection.module.scss'

const MainSection=()=>{
    return(
        <>
        <div className={Styles.mainSection}>
            <div className={Styles.template}>
                <p>Select Template : </p>
                <select name="" id=""></select>
            </div>
            <div className={Styles.groups}>
                <p>Select Groups</p>
                <select name="" id=""></select>
            </div>
            <div className={Styles.preview}>
                <p>Preview</p>

            </div>
            <button>Send Email</button>
        </div>
        </>
    )
}

export default MainSection;