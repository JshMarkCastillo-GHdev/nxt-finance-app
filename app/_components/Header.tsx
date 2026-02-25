import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./finance_logo.svg"} alt="logo" height={200} width={140} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
