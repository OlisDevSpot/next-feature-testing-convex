import { v } from "convex/values";
import { query } from "./_generated/server";

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
