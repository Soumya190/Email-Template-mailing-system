import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
// import Dashboard from "@/app/Dashboard";

export default function Home() {
  return (
    redirect('/Dashboard')
    // <>
    // <Dashboard/></>
  );
}
