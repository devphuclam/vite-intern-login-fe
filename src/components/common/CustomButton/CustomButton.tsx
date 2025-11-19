/* eslint-disable @typescript-eslint/no-unused-vars */
import './CustomButton.scss';
import { ICONS } from '../../../assets/icons';

type CustomButtonProps = {
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const CustomButton = ({
  label,
  isDisabled = false,
  onClick,
  className = '',
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-button-container ${className} ${
        isDisabled ? 'disabled' : 'active'
      }`}
      onClick={onClick}
    >
      <span className=''>{label}</span>
    </button>
  );
};

export default CustomButton;
