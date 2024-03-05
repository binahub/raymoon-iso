import { useQuery } from '@tanstack/react-query';

import Client from '@/common/apis/client';

import { ShaparakErrorItems } from '@/common/apis/test-api/shaparak.model';

export type ShaparakErrorListType = (params?: any) => Promise<ShaparakErrorItems[]>;

export const ShaparakErrorList: ShaparakErrorListType = async (params) => {
  const client = new Client();
  return await client.get('/ShaparakErrors/messages', params);
};

export function GetShaparakErrorList({ enabled, query }: { enabled?: boolean; query?: any }) {
  return useQuery<ShaparakErrorItems[], Error>({
    queryFn: () => ShaparakErrorList(query),
    queryKey: ['shapark-error-list', query],
    enabled,
  });
}
