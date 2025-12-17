import Styles from '../../Styles/Emails/sidebar.module.scss';
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
                    <Link href="../../Emails"><p>Emails</p></Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;