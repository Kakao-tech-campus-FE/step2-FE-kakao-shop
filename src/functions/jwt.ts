import { JwtPayload } from "@/dtos/jwt.dto";

export const jwtDecode = (token: string): JwtPayload => {
  try {
    const decoded = token.split(".")[1];
    return JSON.parse(atob(decoded));
  } catch (error) {
    return { exp: 0, id: 0, role: "", sub: "" };
  }
};

export const isExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (error) {
    return true;
  }
};
