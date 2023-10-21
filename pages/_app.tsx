import { AppProps } from "next/app";
import "../app/globals.css"; // Import your global styles
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
