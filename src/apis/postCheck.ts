import Axiosinstance from "@utils/Instance";

type SetEmailErrorFunction = React.Dispatch<
  React.SetStateAction<{
    isError: boolean;
    message: string;
  }>
>;

export const postCheck = async (
  email: string,
  setEmailError: SetEmailErrorFunction
) => {
  try {
    await Axiosinstance.post("check", {
      email,
    });
    setEmailError((prev) => ({ ...prev, isError: false }));
  } catch (err) {
    setEmailError((prev) => ({
      ...prev,
      isError: true,
      message: err as string,
    }));
  }
};
