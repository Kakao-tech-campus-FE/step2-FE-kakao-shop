import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product";
import GNB from "../organisms/GNB";
import ProductSection from "../templates/ProductDetailPage/ProductSection";
import PurchaseSection from "../templates/ProductDetailPage/PurchaseSection";
import ProductNotFound from "../molecules/ProductDetailPage/ProductNotFound";
import "../../style/pages/ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await getProduct(productId);
        setProductDetail(res.data.response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [productId]);

  if (loading)
    return (
      <>
        <GNB />
        <div>Loading...</div>
      </>
    );

  if (error)
    return (
      <>
        <GNB />
        <div className="content">
          <ProductNotFound />
        </div>
      </>
    );

  return (
    <>
      <GNB />
      <div className="content">
        <div className="detail-panel">
          <ProductSection productDetail={productDetail} />
          <PurchaseSection options={productDetail.options} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
