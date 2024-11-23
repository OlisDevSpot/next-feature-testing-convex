import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMockData = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("convexGUI").collect();
  },
});

export const getPerson = query({
  args: { id: v.id("convexGUI") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (user === null) {
      return null;
    }

    console.log({ user });
    return await ctx.db.get(args.id);
  },
});

export const createPerson = mutation({
  args: { first_name: v.string(), last_name: v.string(), age: v.number() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (user === null) {
      return null;
    }

    console.log({ user });
    return await ctx.db.insert("convexGUI", {
      first_name: args.first_name,
      last_name: args.last_name,
      age: args.age,
    });
  },
});
