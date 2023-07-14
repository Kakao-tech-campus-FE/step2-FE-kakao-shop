// AuthContext.jsx
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(() => {
      const user = localStorage.getItem('loggedInUser');
      return user ? JSON.parse(user) : null;
    });

const login = (user) => {
setLoggedInUser(user);
localStorage.setItem('loggedInUser', JSON.stringify(user));
};

const logout = () => {
setLoggedInUser(null);
localStorage.removeItem('loggedInUser');
};

return (
<AuthContext.Provider value={{ loggedInUser, login, logout }}>
{children}
</AuthContext.Provider>
);
};

export default AuthContext;