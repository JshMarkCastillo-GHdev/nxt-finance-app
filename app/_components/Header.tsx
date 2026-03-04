"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./finance_logo.svg"} alt="logo" height={200} width={140} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button className="cursor-pointer">Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
