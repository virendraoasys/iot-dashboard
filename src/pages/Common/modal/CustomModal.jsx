import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CustomModal = ({
  isOpen,
  toggle,
  title,
  children,
  footer,
  size = "md",
  centered = true,
  className = "",
  backdrop = true,
  ...rest
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size={size}
      centered={centered}
      backdrop={backdrop}
      className={className}
      {...rest}
    >
      {title && <ModalHeader toggle={toggle} className="custom-modal-header">{title}</ModalHeader>}

      <ModalBody>{children}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired, 
  title: PropTypes.string,               
  children: PropTypes.node,              
  footer: PropTypes.node,                 
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  centered: PropTypes.bool,
  className: PropTypes.string,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])])
};

export default CustomModal;
