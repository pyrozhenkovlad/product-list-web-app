import React, { useState } from "react";
import { Modal, Button } from "antd";
import CreatingWindow from "./CreatingWindow";

const CreateProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        <h3 style={{ marginTop: "10px", color: "white" }}>Create Product</h3>
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <CreatingWindow />
      </Modal>
    </>
  );
};

export default CreateProduct;
