import { useMutation } from '@tanstack/react-query';
import Client from '../client';
import { ShaparkErrorQueryParam } from '@/common/apis/test-api/shaparak.model';

export const addShaparakError: any = async (params: ShaparkErrorQueryParam) => {
  const client = new Client();
  return await client.post('/ShaparakErrors/messages', params);
};

export function useAddShaparkError() {
  return useMutation({
    mutationFn: async (params: Partial<any>) => addShaparakError(params),
  });
}
