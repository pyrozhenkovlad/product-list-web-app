import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderContainer from "../components/Header";
import ProductList from "../components/ProductList";

const ProductPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const productArr = data.filter((el) => el.id === id);
    setProduct(...productArr);
    setData(data);
  }, []);

  return (
    <>
      <HeaderContainer />
      <center>
        <ProductList list={data} data={product} mode={"productPage"} />
      </center>
    </>
  );
};

export default ProductPage;
