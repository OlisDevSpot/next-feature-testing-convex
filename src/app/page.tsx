"use client";

import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormEvent, useRef } from "react";

export default function Home() {
  const myData = useQuery(api.convexGUI.getMockData);
  const router = useRouter();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const createPerson = useMutation(api.convexGUI.createPerson);
  const firstInput = useRef<HTMLInputElement>(null);

  console.log({ isLoading, isAuthenticated });

  if (!myData || isLoading) {
    return <div>Loading...</div>;
  }

  const handleClick = (id: string) => {
    router.push(`/person/${id}`);
  };

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const age = Number(formData.get("age"));

    createPerson({ first_name, last_name, age });

    e.currentTarget.reset();

    firstInput.current?.focus();
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="flex gap-4 h-full">
          <div className="w-1/4 bg-neutral-100 p-4 h-ful space-y-4 rounded-lg">
            <h4>Input New Person</h4>
            <form
              className="flex flex-col gap-4 rounded-lg"
              onSubmit={(e) => handleCreate(e)}
            >
              <div className="flex flex-col">
                <input
                  name="first_name"
                  id="first_name"
                  type="text"
                  className="rounded-lg p-2"
                  ref={firstInput}
                />
                <label
                  htmlFor="first_name"
                  className="text-sm text-neutral-500"
                >
                  First Name
                </label>
              </div>
              <div className="flex flex-col">
                <input
                  name="last_name"
                  id="last_name"
                  type="text"
                  className="rounded-lg p-2"
                />
                <label htmlFor="last_name" className="text-sm text-neutral-500">
                  Last Name
                </label>
              </div>
              <div className="flex flex-col">
                <input
                  name="age"
                  id="age"
                  type="number"
                  className="rounded-lg p-2"
                />
                <label htmlFor="age" className="text-sm text-neutral-500">
                  Age
                </label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="grid md:grid-cols-2 gap-4 w-full place-content-start h-full overflow-y-scroll overflow-x-hidden rounded-lg">
            {myData.map(({ _id, first_name, last_name, age }) => (
              <div
                key={_id}
                className="p-4 text-center border rounded-lg bg-neutral-100 shadow-md shadow-black/10 cursor-pointer h-20"
                onClick={() => handleClick(_id)}
              >
                <p className="capitalize">
                  Name: {first_name} {last_name}
                </p>
                <p>Age: {age}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Not Authenticated. Please log in</div>
      )}
    </>
  );
}
