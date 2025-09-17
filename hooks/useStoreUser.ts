import { useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import { toast } from "sonner";

export function useStoreUser() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const [userId, setUserId] = useState<Id<"users"> | null>(null);

  const { user } = useUser();

  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    async function createUser() {
      try {
        const id = await storeUser();
        setUserId(id);
        toast.success("Welcome to Editopia 🚀");
      } catch (err) {
        toast.error("Failed to store user");
      }
    }
    createUser();

    return () => setUserId(null);
  }, [isAuthenticated, storeUser, user?.id]);
  return {
    isLoading: isLoading || (isAuthenticated && userId === null),
    isAuthenticated: isAuthenticated && userId !== null,
  };
}
