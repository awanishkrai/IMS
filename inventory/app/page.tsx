import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/reusable mofules/Header";
import Footer from "@/reusable mofules/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Footer />
    </main>
  );
}
