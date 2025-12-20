import Navbar from "../../components/Contacts/Navbar";
import Sidebar from "../../components/Contacts/Sidebar";
import Styles from '../../Styles/Contacts/layout.module.scss';

export default function DashboardLayout({
  children,
}) {
  return (
    <main>
        {/* <div> */}
            <div className={Styles.DashboardLayout}>
                {/* <div> */}
                    <Sidebar />
                {/* </div> */}
                <div className={Styles.mainContent}>
                    {/* <div className={Styles.navbarContainer}> */}
                        <Navbar />
                    {/* </div> */}
                    {children}
                </div>
            </div>
        {/* </div> */}
    </main>
  );
}