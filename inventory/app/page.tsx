import Header from "@/reusable mofules/Header";
import Footer from "@/reusable mofules/Footer";
import LandingPage from "@/reusable mofules/LandingPage";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  );
}
