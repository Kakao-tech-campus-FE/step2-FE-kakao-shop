// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// export const PrivateRoute = ({ element: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem("access_token") ? (
//         <Component {...props} />
//       ) : (
//         <Route path="/" element={<Navigate replace to="/login" />} />
//       )
//     }
//   />
// );
