import "antd/dist/antd.css";
import { Modal as ModalWindow, Input } from "antd";

const Modal = (props) => {
  const {
    id,
    isModalVisible,
    setIsModalVisible,
    list,
    setList,
    form,
    setForm,
  } = props;

  const handleOk = () => {
    const newData = list.map((el) => {
      if (id == el.id) {
        return {
          id,
          name: form.name,
          count: form.count,
          width: form.width,
          height: form.height,
          weight: form.weight,
        };
      }
      return el;
    });

    localStorage.setItem("data", JSON.stringify(newData));
    setList(newData);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalWindow
      title="Edit"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <center>
        <h1> Edit Product </h1>

        <form>
          <Input
            value={form.name}
            style={{ width: "55%", margin: 10 }}
            placeholder="Name"
            required
            maxLength={20}
            onChange={(event) => {
              setForm({ ...form, name: event.currentTarget.value });
            }}
          />
          <Input
            value={form.count}
            maxLength={20}
            style={{ width: "55%", margin: 10 }}
            placeholder="Count"
            required
            onChange={(event) => {
              setForm({ ...form, count: event.currentTarget.value });
            }}
          />
          <div>Size:</div>
          <Input
            value={form.width}
            maxLength={20}
            style={{ width: "55%", margin: 10 }}
            placeholder="Width"
            required
            onChange={(event) => {
              setForm({ ...form, width: event.currentTarget.value });
            }}
          />
          <Input
            value={form.height}
            maxLength={20}
            style={{ width: "55%", margin: 10 }}
            placeholder="Height"
            required
            onChange={(event) => {
              setForm({ ...form, height: event.currentTarget.value });
            }}
          />
          <Input
            value={form.weight}
            maxLength={20}
            style={{ width: "55%", margin: 10 }}
            placeholder="Width"
            required
            onChange={(event) => {
              setForm({ ...form, weight: event.currentTarget.value });
            }}
          />
        </form>
      </center>
    </ModalWindow>
  );
};

export default Modal;
