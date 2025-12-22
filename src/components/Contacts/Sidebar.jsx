import Styles from '../../Styles/Contacts/sidebar.module.scss';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <div className={Styles.sidebarContainer}>
                    <Link href="../../Dashboard" className={Styles.sidebarItems}><p>Dashboard</p></Link>
                    <Link href="../../Templates" className={Styles.sidebarItems}><p>Templates</p></Link>
                    <Link href="../../Contacts" className={Styles.sidebarItems}><p>Contacts</p></Link>
                    <Link href="../../Emails" className={Styles.sidebarItems}><p>Send Email</p></Link>
            </div>
        </>
    )
}

export default Sidebar;