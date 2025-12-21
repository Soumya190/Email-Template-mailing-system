import Navbar from "../../components/Contacts/Navbar";
import Sidebar from "../../components/Contacts/Sidebar";
import Styles from '../../Styles/Contacts/layout.module.scss';

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