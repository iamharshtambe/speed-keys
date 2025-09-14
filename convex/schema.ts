import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),

    email: v.string(),

    tokenIdentifier: v.string(),

    plan: v.union(v.literal("free"), v.literal("pro")),

    projectsUsed: v.number(),

    exportsThisMonth: v.number(),

    createdAt: v.number(),

    lastActiveAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  projects: defineTable({
    title: v.string(),

    userId: v.id("users"),

    canvasState: v.any(),

    width: v.number(),

    height: v.number(),

    originalImgUrl: v.optional(v.string()),

    currentImgUrl: v.optional(v.string()),

    thumbnailUrl: v.optional(v.string()),

    activeTransformations: v.optional(v.string()),

    folderId: v.optional(v.id("folder")),

    backgroundRemoved: v.optional(v.boolean()),

    createdAt: v.number(),

    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_updated", ["updatedAt"])
    .index("by_folder", ["folderId"]),

  folders: defineTable({
    name: v.string(),

    userId: v.id("users"),

    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});
