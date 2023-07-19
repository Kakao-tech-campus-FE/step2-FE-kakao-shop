import instance from "./index";

export const signUp = ( {email, username, password} ) => {
  return instance.post("/join", {
     "email": email,
    "username": username,
    "password": password 
});
};

export const signIn = ( {email, password }) => {
  return instance.post("/login", { 
    "email": email,
    "password": password
});
};