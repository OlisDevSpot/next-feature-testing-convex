"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import Navbar from "../app/_components/Navbar";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <main className="">
        <Navbar />
        <div className="container mx-auto p-4">
          <h1>People</h1>
          <p>This is my mock realtime data</p>
          {children}
        </div>
      </main>
    </ConvexProvider>
  );
}
