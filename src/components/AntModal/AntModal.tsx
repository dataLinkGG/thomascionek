import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import { ReactNode, useState } from "react";

type AntModalProps = {
  children: ReactNode;
};

const AntModal: React.FC<AntModalProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{
          background: "var(--primary-color)",
          color: "black",
          border: "none",
        }}
        onClick={showModal}
      >
        <div>
          <FontAwesomeIcon icon={faSearch} /> See More
        </div>
      </Button>
      <Modal
        title="Eduction"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Ok"
        cancelText="Close"
        footer
      >
        <div>{children}</div>
      </Modal>
    </>
  );
};

export default AntModal;
