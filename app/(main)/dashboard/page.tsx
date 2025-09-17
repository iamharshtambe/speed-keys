"use client";

import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/useConvex";

export default function Dashboard() {
  const { data: projects, isLoading } = useConvexQuery(
    api.projects.getCurrentProject,
  );

  console.log(projects);
  return <div>Dashboard</div>;
}
