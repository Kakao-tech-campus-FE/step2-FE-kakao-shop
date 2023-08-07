import React, { Suspense } from "react";
import Cart from "components/organisms/Cart";
import Section from "components/atoms/Section";
import PageTitleBox from "components/atoms/PageTitleBox";

const CartPage = () => {
  return (
    <Section>
      <PageTitleBox title="장바구니" />
      <Suspense fallback={<p>loading cart...</p>}>
        <Cart />
      </Suspense>
    </Section>
  );
};

export default CartPage;
