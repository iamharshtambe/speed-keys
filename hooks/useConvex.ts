import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useConvexQuery(query: any, ...args: any) {
  const result = useQuery(query, ...args);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (result instanceof Error) {
      setError(result);
      toast.error(result.message);
    } else {
      setError(null);
    }
  }, [result]);

  return {
    data: result,
    isLoading: result === undefined,
    error,
  };
}

export function useConvexMutation(mutation: any) {
  const mutationFn = useMutation(mutation);
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const mutate = async (...args: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(...args);
      setData(response);
      return response;
    } catch (err: any) {
      setError(err);
      toast.error(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, isLoading, error };
}
