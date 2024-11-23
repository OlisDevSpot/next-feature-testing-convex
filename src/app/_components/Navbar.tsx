"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-100 p-4 flex">
      <div className="container mx-auto">
        <Link
          href="/"
          className="cursor-pointer hover:opacity-80 font-mono text-2xl"
        >
          Peoplify
        </Link>
      </div>
      <div className="min-w-max">
        <Unauthenticated>
          <Button asChild>
            <SignInButton mode="modal" />
          </Button>
        </Unauthenticated>
        <Authenticated>
          <UserButton />
        </Authenticated>
      </div>
    </nav>
  );
}
