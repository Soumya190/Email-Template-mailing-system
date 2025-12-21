import Navbar from "../../components/Templates/Navbar";
import Sidebar from "../../components/Templates/Sidebar";
import Styles from '../../Styles/Templates/layout.module.scss';

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