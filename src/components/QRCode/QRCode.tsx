import { Button, Tooltip } from "antd";
import { WHATSAPP } from "../../constants";
import qr_code from "../../assets/qr_black_white_rounded.png";

const QRCode: React.FC = () => {
  return (
    <Tooltip placement="right" title={"📱 Click or scan!"}>
      <Button
        type="text"
        target="_blank"
        onClick={() => {
          window.open(WHATSAPP, "_blank");
        }}
      >
        <div>
          <img className="qr-code" src={qr_code} alt="" />
        </div>
      </Button>
      <br />
    </Tooltip>
  );
};

export default QRCode;
