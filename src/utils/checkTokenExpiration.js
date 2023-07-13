const checkTokenExpiration = () => {
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    const { expiration } = JSON.parse(tokenData);
    if (expiration && new Date().getTime() > expiration) {
      localStorage.removeItem("token");
    }
  }
};

export default checkTokenExpiration;
