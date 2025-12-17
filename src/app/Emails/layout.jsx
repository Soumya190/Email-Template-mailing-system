import Navbar from "../../components/Emails/Navbar";
import Sidebar from "../../components/Emails/Sidebar";
import Styles from '../../Styles/Emails/layout.module.scss';

export default function DashboardLayout({
  children,
}) {
  return (
    <main>
        <div>
            <div className={Styles.DashboardLayout}>
                <div>
                    <Sidebar />
                </div>
                <div className={Styles.mainContent}>
                    <div className={Styles.navbarContainer}>
                        <Navbar />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </main>
  );
}