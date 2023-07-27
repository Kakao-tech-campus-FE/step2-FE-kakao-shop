import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import Cart from "@/components/Cart/Cart.component";

const CartPage = () => (
  <>
    <GlobalNavbar isSmall={true} />
    <div className="m-auto max-w-7xl bg-slate-50 p-2">
      <Cart />
    </div>
  </>
);

export default CartPage;
