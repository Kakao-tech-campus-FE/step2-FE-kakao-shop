import { DefaultResDto } from "@/dtos/response.dto";
import { setAuth } from "@/functions/auth";
import { https } from "@/functions/axios";

interface signInData {
  email: string;
  password: string;
}

export const signIn = async (data: signInData) => {
  const signInRes = await https.post<DefaultResDto>("/login", data);

  if (signInRes?.data?.success !== undefined) {
    setAuth(signInRes.headers.authorization.split(" ")[1]);
  }
  return signInRes;
};

export const checkEmail = async (email: string) => {
  return https.post<DefaultResDto>("/check", { email });
};

interface signUpData {
  email: string;
  username: string;
  password: string;
}

export const signUp = async (data: signUpData) => {
  return https.post<DefaultResDto>("/join", data);
};
