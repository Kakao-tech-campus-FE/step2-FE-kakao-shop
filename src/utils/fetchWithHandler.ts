import { AxiosResponse } from 'axios';

export const fetchWithHandler = async (
  fetchFn: (...args: any[]) => Promise<AxiosResponse>,
  {
    onSuccess,
    onError,
  }: {
    onSuccess: (response?: AxiosResponse) => void;
    onError: (error?: unknown) => void;
  },
) => {
  try {
    const response = await fetchFn();
    onSuccess(response);
  } catch (error) {
    onError(error);
  }
};
