import "antd/dist/antd.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const HeaderContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "black", opacity: 0.7, height: "60px" }}>
        <Button
          type="link"
          onClick={() => {
            navigate("/");
          }}
        >
          <h3 style={{ marginTop: "10px", color: "white" }}>Home</h3>
        </Button>
        <CreateProduct />
      </div>
    </>
  );
};

export default HeaderContainer;
