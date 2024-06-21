// src/components/Modal.jsx
import React from 'react';

const Modal = ({ onClose, onAction, position }) => {
  return (
    <div className="modal">
      <div className='modal-btns'>
        <button className='m-b1' onClick={() => onAction('markAsUnread')}>Mark as Unread</button>
        <button className='m-b2' onClick={() => onAction('delete')}>Delete</button>
        <button className='m-b3' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
