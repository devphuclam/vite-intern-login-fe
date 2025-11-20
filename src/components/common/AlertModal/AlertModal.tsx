/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './AlertModal.scss';
import CustomButton from '../CustomButton/CustomButton';

type AlertModalProps = {
  open: boolean;
  title: string;
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
};

const AlertModal = ({
  open,
  title,
  message,
  icon,
  onClose,
}: AlertModalProps) => {
  if (!open) return null;
  return (
    <div className='alert-modal-overlay'>
      <div className='alert-modal'>
        {icon && <div className='alert-icon'>{icon}</div>}

        <h2 className='alert-title'>{title}</h2>
        <p className='alert-message'>{message}</p>

        <div className='alert-divider'></div>

        <CustomButton label='OK' onClick={onClose} />
      </div>
    </div>
  );
};
export default AlertModal;
