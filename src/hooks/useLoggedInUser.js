// hooks/useLoggedInUser.js
import { useEffect, useState } from 'react';

function useLoggedInUser() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return { loggedInUser, login, logout };
}

export default useLoggedInUser;
