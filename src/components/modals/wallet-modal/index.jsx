import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const WalletModal = ({ show, handleModal }) => {
  const { authenticate } = useMoralis();

  const clickMetamask = () => {
    authenticate({
      provider: "metamask",
    });
    handleModal();
  };
  const clickWalletConnect = () => {
    authenticate({
      provider: "walletconnect",
    });
    handleModal();
  };
  return (
    <Modal
      className="rn-popup-modal wallet-modal-wrapper"
      show={show}
      onHide={handleModal}
      centered
    >
      {show && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleModal}
        >
          <i className="feather-x" />
        </button>
      )}

      <Modal.Header className="share-area">
        <h5 className="modal-title">Choose Wallet</h5>
      </Modal.Header>
      <Modal.Body>
        <div className="wallet-group">
          <div className="wallet-item-container" onClick={clickMetamask}>
            <div className="wallet-item">
              <Image src="/images/wallet/MetaMask.png" layout="fill"></Image>
            </div>
          </div>
          <div className="wallet-item-container" onClick={clickWalletConnect}>
            <div className="wallet-item">
              <Image
                src="/images/wallet/WalletConnect.png"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};
export default WalletModal;
