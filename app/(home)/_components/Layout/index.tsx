"use client";
import React, { Fragment } from "react";
import Header from "@/components/UI/Header/page";
import Footer from "@/components/UI/Footer/page";
import { usePathname } from "next/navigation";

type TProps = {
  children: React.ReactNode;
};

function Layout({ children }: TProps) {
  const pathname = usePathname();
  return (
    <Fragment>
      <div className="w-full h-full relative font-poppins overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
