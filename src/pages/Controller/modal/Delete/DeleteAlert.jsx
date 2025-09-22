import React from 'react';
import PropTypes from 'prop-types';
import './DeleteAlert.scss';
import Caution from "../../../../assets/iotimages/Caution.jpeg"

const DeleteAlert = ({
  isOpen = false,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item?",
  itemName = "",
  deleteButtonText = "Delete",
  cancelButtonText = "Cancel",
  isDangerous = true,
  isLoading = false
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCancel = () => {
    if (!isLoading) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (!isLoading && onConfirm) {
      onConfirm();
    }
  };

  return (
    <div className="delete-alert-overlay" onClick={handleOverlayClick}>
      <div className="delete-alert-modal">
        {/* Warning Icon */}
        <div className="alert-icon">
         <img src={Caution} alt="Caution Icon"  style={{ width: '68px', height: '68px' }} />
        </div>

        {/* Alert Content */}
        <div className="alert-content">
          <h3 className="alert-title">{title}</h3>
          <p className="alert-message">
            {message}
            {itemName && (
              <span className="item-name"> {itemName}</span>
            )}
          </p>
          <p className="alert-warning">
            This action cannot be undone.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="alert-actions">
          <button 
            type='button'
            className="btn btn-secondary"
            onClick={handleCancel}
            disabled={isLoading}
          >
            {cancelButtonText}
          </button>
          <button 
            type='button'
            className={`btn ${isDangerous ? 'btn-danger' : 'btn-primary'}`}
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Deleting...
              </>
            ) : (
              deleteButtonText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  itemName: PropTypes.string,
  deleteButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  isDangerous: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default DeleteAlert;