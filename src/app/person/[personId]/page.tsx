"use client";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";

export default function PersonPage({
  params,
}: {
  params: { personId: string };
}) {
  const person = useQuery(api.convexGUI.getPerson, {
    id: params.personId as Id<"convexGUI">,
  });
  console.log(person);

  const { first_name, last_name, age } = person || {};

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h5>
        {first_name} {last_name}
      </h5>
      <p>Age: {age}</p>
    </div>
  );
}
