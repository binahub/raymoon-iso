import { useMutation } from "@tanstack/react-query";
import Client from "../client";

export const createSample: any = async (params: any) => {
  const client = new Client();
  return await client.post("/categoryFood/list", params);
};

export function useCreateSample() {
  return useMutation({
    mutationFn: async (params: Partial<any>) => createSample(params),
  });
}
