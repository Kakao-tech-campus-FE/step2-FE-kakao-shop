const removeTokenByExpiration = () => {
  const tokenData = localStorage.getItem("token");
  if (!tokenData) {
    return;
  }
  const { expiration } = JSON.parse(tokenData);
  if (expiration && new Date().getTime() > expiration) {
    localStorage.removeItem("token");
  }
};

export default removeTokenByExpiration;
