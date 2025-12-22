"use client"
import Styles from "../../Styles/Dashboard/mainsection.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainSection = () => {
    const [templatesCount, setTemplatesCount] = useState(0);
    const [contactsCount, setContactsCount] = useState(0);
    const [groupsCount, setGroupsCount] = useState(0);

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("/api/dashboard")
            .then(res => res.json())
            .then(data => {
                setTemplatesCount(data.templates);
                setContactsCount(data.contacts);
                setGroupsCount(data.groups);
            });
    }, []);

    useEffect(() => {
        fetch("/api/activity")
            .then(res => res.json())
            .then(data => {
                console.log("ACTIVITY API RESPONSE:", data);
                setActivities(data);
            });
    }, []);


    return (
        <>
            <div className={Styles.mainSection}>
                <div className={Styles.dashboard}>
                    <div className={Styles.template}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={55} width={55} viewBox="0 0 640 640"><path fill="#203963" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                        <div className={Styles.templateCount}>
                            <p className={Styles.templateHeading}>Total Templates</p>
                            <p>{templatesCount}</p>
                        </div>
                    </div>
                    <div className={Styles.contact}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={55} width={55} viewBox="0 0 640 640"><path fill="#203963" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                        <div className={Styles.contactCount}>
                            <p className={Styles.contactHeading}>Total Contacts</p>
                            <p>{contactsCount}</p>
                        </div>
                    </div>
                    <div className={Styles.groups}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={55} width={55} viewBox="0 0 640 640"><path fill="#203963" d="M96.5 160L96.5 309.5C96.5 326.5 103.2 342.8 115.2 354.8L307.2 546.8C332.2 571.8 372.7 571.8 397.7 546.8L547.2 397.3C572.2 372.3 572.2 331.8 547.2 306.8L355.2 114.8C343.2 102.7 327 96 310 96L160.5 96C125.2 96 96.5 124.7 96.5 160zM208.5 176C226.2 176 240.5 190.3 240.5 208C240.5 225.7 226.2 240 208.5 240C190.8 240 176.5 225.7 176.5 208C176.5 190.3 190.8 176 208.5 176z" /></svg>
                        <div className={Styles.totalGroups}>
                            <p className={Styles.groupHeading}>Total Groups</p>
                            <p>{groupsCount}</p>
                        </div>
                    </div>

                </div>

                <div className={Styles.buttonContainer}>
                        <Link href="/Templates" className={Styles.templateButton}>Create Template</Link>
                        <Link href="/Contacts" className={Styles.contactButton}>Add Contacts</Link>
                        <Link href="/Emails" className={Styles.emailButton} >Send Bulk Emails</Link>
                </div>

            </div>
        </>
    )
}

export default MainSection;