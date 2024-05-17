import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import { useState } from "react";

const AntModal = () => {
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
      <Button className="modalButton" type="text" onClick={showModal}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
      <Modal
        title="Eduction"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Ok"
        cancelText="Close"
      >
        <div>
          Solid foundation in Linux, having used various distributions for
          nearly 10 years, with a keen interest in experimenting with commands,
          customization, and troubleshooting. Gained international exposure
          during a 4-year stint in Poland, where he studied Computer Science and
          interacted with exchange students from around the world.
        </div>
      </Modal>
    </>
  );
};

export default AntModal;
