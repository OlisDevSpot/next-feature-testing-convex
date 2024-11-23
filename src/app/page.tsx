"use client";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const myData = useQuery(api.convexGUI.getMockData);
  const router = useRouter();
  const { isLoading, isAuthenticated } = useConvexAuth();

  console.log({ isLoading, isAuthenticated });

  if (!myData || isLoading) {
    return <div>Loading...</div>;
  }

  const handleClick = (id: string) => {
    router.push(`/person/${id}`);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="grid md:grid-cols-2 gap-4">
          {myData.map(({ _id, first_name, last_name, age }) => (
            <div
              key={_id}
              className="p-4 text-center border rounded-lg bg-neutral-100 shadow-md shadow-black/10 cursor-pointer"
              onClick={() => handleClick(_id)}
            >
              <p className="capitalize">
                Name: {first_name} {last_name}
              </p>
              <p>Age: {age}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Not Authenticated. Please log in</div>
      )}
    </>
  );
}
