import ApiInstance from "./index";

const staticServerUri = process.env.REACT_APP_PATH || "";
class AuthInstance extends ApiInstance {
  checkEmail = (email) => {
    return this.instance.post("/check", { email });
  };

  signUp = (data) => {
    const { email, username, password } = data;

    return this.instance.post("/join", {
      email,
      username,
      password,
    });
  };

  login = (data) => {
    const { email, password } = data;

    return this.instance.post("/login", {
      email,
      password,
    });
  };
}

const authInstance = new AuthInstance(
  staticServerUri + "/api",
  "application/json"
);

export default authInstance;
