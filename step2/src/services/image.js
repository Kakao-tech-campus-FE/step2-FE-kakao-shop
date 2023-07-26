import instance from "./index";

export const getImage = (imagePath) => {
  return instance.get(imagePath);
};
