import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { ReactNode, useState } from "react";
import AntButton from "../AntButton/AntButton";

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
      <AntButton onClick={showModal}>
        <FontAwesomeIcon icon={faSearch} />
      </AntButton>
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
