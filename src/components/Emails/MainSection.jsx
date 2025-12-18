"use client"
import Styles from "../../Styles/Emails/mainsection.module.scss";
import { useState } from 'react';

const MainSection = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleEmailName = (e) => {
        setValues({ ...values, name: e.target.value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <div className={Styles.mainContent}>
                <div className={Styles.templateDetails}>
                    <p>Hello</p>
                </div>
                <form onSubmit={handleFormSubmit} className={Styles.emailtemplate}>
                    <h1>Create/Edit Template</h1>
                    <label >Name:</label>
                    <input type="text" value={values.name} onChange={handleEmailName} placeholder='Enter your name ' />
                    <button>Send Email</button>
                </form>
            </div></>
    )
}

export default MainSection;