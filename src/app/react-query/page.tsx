"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./_components/Posts";

const queryClient = new QueryClient();

export default function page() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h3>React Query Examples</h3>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
