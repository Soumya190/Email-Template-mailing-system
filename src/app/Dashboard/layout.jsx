import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Styles from '../../Styles/Dashboard/layout.module.scss';

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