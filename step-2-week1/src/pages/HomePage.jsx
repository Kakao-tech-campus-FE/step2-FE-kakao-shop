// import ProductGrid from "../component/organisms/ProductGrid";

import ProductGrid from "../component/organisms/ProductGrid";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductGrid products={[{id:1}, {id:2}]} />
    </div>
  )
};

// const LoginPage = () => {
//   return <LoginForm />;
// };

export default HomePage;