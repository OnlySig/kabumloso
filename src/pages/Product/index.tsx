import { useParams } from "react-router-dom";

const Product = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <div>coisa linda</div>
    </>
  );
};

export default Product;
