import "antd/dist/antd.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined, MenuOutlined } from "@ant-design/icons";
import Modal from "./Modal";
import { useState } from "react";

const ProductList = (props) => {
  const navigate = useNavigate();
  const { data, list, setList, mode } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    imageUrl: "",
    name: "",
    count: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleDelete = (event) => {
    const id = event.currentTarget.id;

    setId(id);
    const newData = list.filter((el) => id != el.id);

    localStorage.setItem("data", JSON.stringify(newData));
    setList(newData);
  };

  const handleEdit = (event) => {
    setIsModalVisible(true);
    const id = event.currentTarget.id;
    setId(id);
    const product = list.filter((el) => id == el.id)[0];
    setForm({
      id: product.id,
      name: product.name,
      count: product.count,
      width: product.width,
      height: product.height,
      weight: product.weight,
    });
  };

  return (
    <center>
      <Card
        style={{ margin: 40, width: 300 }}
        id={`${data.id}`}
        key={Date.now()}
        hoverable
        title={data.name}
        actions={
          mode === "homePage"
            ? [
                <DeleteOutlined
                  key="delete"
                  id={`${data.id}`}
                  onClick={handleDelete}
                />,
                <EditOutlined
                  key="edit"
                  id={`${data.id}`}
                  onClick={handleEdit}
                />,
                <MenuOutlined
                  key="edit"
                  id={`${data.id}`}
                  onClick={(event) => {
                    if (mode === "homePage") {
                      navigate(`/product/${event.currentTarget.id}`);
                    }
                  }}
                />,
              ]
            : null
        }
      >
        <p>Count: {data.count} </p>
        <p>
          Size: width - {data.width} <br /> height - {data.height}
        </p>
        <p>Weight: {data.weight}</p>
      </Card>
      <Modal
        id={id}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        list={list}
        setList={setList}
        form={form}
        setForm={setForm}
      />
    </center>
  );
};

export default ProductList;
