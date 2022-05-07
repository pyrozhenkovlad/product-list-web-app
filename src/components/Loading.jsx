import "antd/dist/antd.css";
import { useEffect } from "react";

const Loading = (props) => {
  const { newItem } = props;

  useEffect(() => {
    const currentData = JSON.parse(localStorage.getItem("data"));
    const newData = currentData ? [newItem, ...currentData] : [newItem];
    localStorage.setItem("data", JSON.stringify(newData));
    window.location.reload(false);
  }, []);
};
export default Loading;
