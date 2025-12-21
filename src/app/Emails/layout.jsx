import Navbar from "../../components/Emails/Navbar";
import Sidebar from "../../components/Emails/Sidebar";
import Styles from '../../Styles/Emails/layout.module.scss';

export default function DashboardLayout({
  children,
}) {
  return (
    <main>
      <div className={Styles.DashboardLayout}>
          <Sidebar />
        <div className={Styles.mainContent}>
            <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
}