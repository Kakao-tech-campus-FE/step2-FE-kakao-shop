import Header from "./Header";
import BreadCrumb from "./BreadCrumb";

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <BreadCrumb></BreadCrumb>
      {children}
    </div>
  );
};
export default Layout;
