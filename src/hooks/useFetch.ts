import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export function useFetch<T>(key: any[], route: string) {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: async () => {
      const { data } = await axiosInstance.get<T>(`/${route}`);
      return data;
    },
    retry: 0,
  });
}
