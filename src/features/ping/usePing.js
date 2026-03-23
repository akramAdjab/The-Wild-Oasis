import { useQuery } from "@tanstack/react-query";
import { getPingMessage } from "../../services/apiPing";

export function usePing() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ping"],
    queryFn: getPingMessage,
  });

  return { isLoading, error, data };
}
