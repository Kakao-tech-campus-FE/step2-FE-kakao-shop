import AxiosInstance from "@utils/Instance";

export const getProducts = async ({
  pageParam = 0,
}: {
  pageParam?: number;
}) => {
  const response = await AxiosInstance.get("/products", {
    params: {
      page: pageParam,
    },
  });
  return response.data;
};
