import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { api } from "./_generated/api";
import type { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    title: v.string(),
    originalImageUrl: v.optional(v.string()),
    currentImageUrl: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    width: v.number(),
    height: v.number(),
    canvasState: v.optional(v.any()),
  },
  handler: async (ctx, args): Promise<Id<"projects">> => {
    const user = await ctx.runQuery(api.users.getCurrentUser);

    const projectId: Id<"projects"> = await ctx.db.insert("projects", {
      title: args.title,
      userId: user._id,
      originalImgUrl: args.originalImageUrl,
      currentImgUrl: args.currentImageUrl,
      thumbnailUrl: args.thumbnailUrl,
      width: args.width,
      height: args.height,
      canvasState: args.canvasState,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return projectId;
  },
});

export const getCurrentProject = query({
  handler: async (ctx): Promise<Doc<"projects">[]> => {
    const user = await ctx.runQuery(api.users.getCurrentUser);

    const projects = await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();

    return projects;
  },
});

export const deleteProject = mutation({
  args: { projectId: v.id("projects") },

  handler: async (ctx, args): Promise<{ success: boolean }> => {
    const user = await ctx.runQuery(api.users.getCurrentUser);
    const project = await ctx.db.get(args.projectId);

    if (!project) {
      throw new Error("Project not found");
    }

    if (!user || project.userId !== user._id) {
      throw new Error("Access denied");
    }

    await ctx.db.delete(args.projectId);

    return { success: true };
  },
});
