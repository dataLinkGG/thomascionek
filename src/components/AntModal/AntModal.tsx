import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import { ReactNode } from "react";

type AntModalProps = {
  children: ReactNode;
  isModalOpen: boolean;
  handleOk: VoidFunction;
  handleCancel: VoidFunction;
};

const AntModal: React.FC<AntModalProps> = ({ children, isModalOpen }) => {
  return (
    <>
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
