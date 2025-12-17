"use client"
import Styles from "../../Styles/Dashboard/mainsection.module.scss";

const MainSection=()=>{
    return(
        <>
        <div className={Styles.mainsection}>
            <div>
                <p>Total Templates</p>
                <p>8</p>
            </div>
            <div>
                <p>Total Contacts</p>
                <p>350</p>
            </div>
            <div>
                <p>Total Groups</p>
                <p>5</p>
            </div>
        </div>
        </>
    )
}

export default MainSection;