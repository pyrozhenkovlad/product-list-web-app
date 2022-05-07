import "antd/dist/antd.css";
import HeaderContainer from "../components/Header";
import React, { useState, useEffect } from "react";
import { Row } from "antd";
import ProductList from "../components/ProductList";

const List = () => {
  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setViewData([...data]);
    }
  }, []);

  return (
    <>
      <HeaderContainer/>
      <Row>
        {viewData.map((el) => (
          <ProductList
            data={el}
            list={viewData}
            setList={setViewData}
            mode={"homePage"}
          />
        ))}
      </Row>
    </>
  );
};

export default List;
