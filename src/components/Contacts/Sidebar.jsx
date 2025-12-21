import Styles from '../../Styles/Contacts/sidebar.module.scss';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <div className={Styles.sidebarContainer}>
                <div className={Styles.sidebarItems}>
                    <Link href="../../Dashboard"><p>Dashboard</p></Link>
                </div>
                <div className={Styles.sidebarItems}>
                    <Link href="../../Templates"><p>Templates</p></Link>
                </div >
                <div className={Styles.sidebarItems}>
                    <Link href="../../Contacts"><p>Contacts</p></Link>
                </div>
                <div className={Styles.sidebarItems}>
                    <Link href="../../Emails"><p>Send Email</p></Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;