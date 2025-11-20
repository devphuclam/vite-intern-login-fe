/* eslint-disable @typescript-eslint/no-unused-vars */
import './TextInput.scss';
// import { ICONS } from '../../../assets/icons';
import EyeLine from '../../../assets/icons/eye-line.svg?react';
import EyeOffLine from '../../../assets/icons/eye-off-line.svg?react';
import UserLine from '../../../assets/icons/user-line.svg?react';
import { useState } from 'react';

type TextInputProps = {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  onChange: (value: string) => void;
};

const TextInput = ({
  label,
  type = 'text',
  value,
  placeholder,
  icon,
  error,
  onChange,
}: TextInputProps) => {
  const [visible, setVisible] = useState(false);
  const inputType =
    type === 'password' ? (visible ? 'text' : 'password') : type;

  return (
    <div className='text-input-container'>
      <div className='text-input-label'>
        <p>
          {label} <span style={{ color: 'red' }}>*</span>
        </p>
      </div>
      <div className={`text-input-content ${error ? 'error' : ''}`}>
        {icon && <div className='input-icon'>{icon}</div>}
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {/* toggle visibility only for password */}
        {type === 'password' && (
          <div
            className='password-toggle-icon'
            onClick={() => setVisible(!visible)}
            style={{ cursor: 'pointer' }}
          >
            {visible ? <EyeLine /> : <EyeOffLine />}
          </div>
        )}
      </div>
      {/* Error Message */}
      <div className='error-place-holder'>
        {error && <p className='text-input-error'>{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
