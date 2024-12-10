"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-100 p-4 flex fixed top-0 h-14 w-full items-center z-50">
      <div className="container mx-auto flex justify-between p-4 items-center">
        <Link
          href="/"
          className="cursor-pointer hover:opacity-80 font-mono text-2xl"
        >
          Peoplify
        </Link>
        <div>
          <Link href="/react-query">React Query Demo</Link>
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
      </div>
    </nav>
  );
}
