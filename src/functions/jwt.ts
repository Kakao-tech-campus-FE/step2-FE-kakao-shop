export const jwtDecode = (token: string): JwtPayload => {
  try {
    const decoded = token.split(".")[1];
    return JSON.parse(atob(decoded));
  } catch (error) {
    return { exp: 0, id: 0, role: "", sub: "" };
  }
};
