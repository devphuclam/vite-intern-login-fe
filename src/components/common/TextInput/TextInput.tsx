/* eslint-disable @typescript-eslint/no-unused-vars */
import './TextInput.scss';
import { ICONS } from '../../../assets/icons';
import { useState } from 'react';

type TextInputProps = {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  icon?: string;
  onChange: (value: string) => void;
};

const TextInput = ({
  label,
  type = 'text',
  value,
  placeholder,
  icon,
  onChange,
}: TextInputProps) => {
  const [visible, setVisible] = useState(false);
  const inputType = type === 'password' && !visible ? 'password' : 'text';

  return (
    <div className='text-input-container'>
      <div className='text-input-label'>
        <p>
          {label} <span style={{ color: 'red' }}>*</span>
        </p>
      </div>
      <div className='text-input-content'>
        <img src={icon || ICONS.USER_LINE} alt='input-icon' />
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {/* toggle visibility only for password */}
        {type === 'password' && (
          <img
            src={visible ? ICONS.EYE_LINE : ICONS.EYE_OFF_LINE}
            alt='toggle-password-visibility'
            className='password-toggle-icon'
            onClick={() => setVisible(!visible)}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
