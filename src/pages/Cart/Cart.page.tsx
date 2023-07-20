import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import Cart from "@/components/Cart/Cart.component";

const CartPage = () => {
  return (
    <>
      <GlobalNavbar isSmall={true} />
      <div className="m-auto max-w-7xl">
        <Cart />
      </div>
    </>
  );
};

export default CartPage;
