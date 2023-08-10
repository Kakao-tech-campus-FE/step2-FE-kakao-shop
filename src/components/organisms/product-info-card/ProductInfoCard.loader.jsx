import ContentLoader from "react-content-loader";

function ProductInfoCardLoader(props) {
  return (
    <ContentLoader
      speed={4}
      width={300}
      height={230}
      viewBox="0 0 300 230"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="6" ry="6" width="300" height="169" />
      <rect x="0" y="180" rx="4" ry="4" width="300" height="14" />
      <rect x="0" y="200" rx="4" ry="4" width="100" height="24" />
    </ContentLoader>
  );
}

export default ProductInfoCardLoader;
