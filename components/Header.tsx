import React from "react";
import Link from "next/link";
import Logo from "../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b px-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <Image src={Logo} alt="" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" href="">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            href=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
