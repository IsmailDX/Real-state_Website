import { AppProps } from "next/app";
import "../app/globals.css"; // Import your global styles
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HouseContextProvider from "@/components/HouseContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HouseContextProvider>
      <div className="max-w-[1440px] mx-auto bg-white relative">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </HouseContextProvider>
  );
}

export default MyApp;
