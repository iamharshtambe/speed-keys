import { mutation, query } from "./_generated/server";

async function requireAuth(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Not authenticated");
  }
  return identity;
}

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await requireAuth(ctx);

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();

    if (user !== null) {
      if (user.name !== identity.name) {
        await ctx.db.patch(user._id, {
          name: identity.name ?? "Anonyamous",
          lastActiveAt: Date.now(),
        });
      }
      return user._id;
    }

    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonyamous",
      email: identity.email ?? "",
      tokenIdentifier: identity.tokenIdentifier,
      plan: "free",
      projectsUsed: 0,
      exportsThisMonth: 0,
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    });
  },
});

export const getCurrentUser = query({
  handler: async (ctx) => {
    const identity = await requireAuth(ctx);

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});
