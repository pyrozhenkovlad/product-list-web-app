import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { Input, Button } from "antd";
import { useState, useEffect } from "react";

const CreatingWindow = () => {
  const [step, setStep] = useState(1);

  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    imageUrl: "",
    name: "",
    count: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewItem({ ...newItem });
    const currentData = JSON.parse(localStorage.getItem("data"));
    const newData = currentData ? [newItem, ...currentData] : [newItem];
    localStorage.setItem("data", JSON.stringify(newData));

    window.location.reload(false);
  };

  switch (step) {
    case 1:
      return (
        <>
          <center>
            <h1> Create Product </h1>

            <form onSubmit={handleSubmit}>
              <Input
                style={{ width: "55%", margin: 10 }}
                placeholder="Name"
                required
                maxLength={20}
                onChange={(event) => {
                  setNewItem({ ...newItem, name: event.currentTarget.value });
                }}
              />
              <Input
                maxLength={20}
                style={{ width: "55%", margin: 10 }}
                placeholder="Count"
                required
                onChange={(event) => {
                  setNewItem({ ...newItem, count: event.currentTarget.value });
                }}
              />
              <div>Size:</div>
              <Input
                maxLength={20}
                style={{ width: "55%", margin: 10 }}
                placeholder="Width"
                required
                onChange={(event) => {
                  setNewItem({ ...newItem, width: event.currentTarget.value });
                }}
              />
              <Input
                maxLength={20}
                style={{ width: "55%", margin: 10 }}
                placeholder="Height"
                required
                onChange={(event) => {
                  setNewItem({ ...newItem, height: event.currentTarget.value });
                }}
              />
              <Input
                maxLength={20}
                style={{ width: "55%", margin: 10 }}
                placeholder="Width"
                required
                onChange={(event) => {
                  setNewItem({ ...newItem, weight: event.currentTarget.value });
                }}
              />

              <br />
              <Button
                htmlType="submit"
                type="primary"
                style={{
                  width: 150,
                  margin: "0 auto",
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                Done
              </Button>
            </form>
          </center>
        </>
      );
  }
};

export default CreatingWindow;
