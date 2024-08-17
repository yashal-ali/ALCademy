"use client";
import React, { Fragment } from "react";
import { usePathname } from "next/navigation";

type TProps = {
  children: React.ReactNode;
};

function Layout({ children }: TProps) {
  const pathname = usePathname();
  return (
    <Fragment>
      <div className="w-full h-full relative font-poppins overflow-x-hidden">
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
