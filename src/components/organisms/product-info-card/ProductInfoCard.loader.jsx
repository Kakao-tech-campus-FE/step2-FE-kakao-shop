import ContentLoader from "react-content-loader";

function ProductInfoCardLoader(props) {
  return (
    <ContentLoader
      speed={4}
      width={300}
      height={284}
      viewBox="0 0 300 284"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="0" rx="8" ry="8" width="284" height="160" />
      <rect x="10" y="170" rx="4" ry="4" width="284" height="14" />
      <rect x="10" y="190" rx="4" ry="4" width="284" height="14" />
      <rect x="10" y="212" rx="4" ry="4" width="100" height="24" />
    </ContentLoader>
  );
}

export default ProductInfoCardLoader;
