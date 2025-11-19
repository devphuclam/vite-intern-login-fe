/* eslint-disable @typescript-eslint/no-unused-vars */
import './login.scss';
import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
import TextInput from '../../components/common/TextInput/TextInput';
import CustomButton from '../../components/common/CustomButton/CustomButton';
import { useState } from 'react';

const LoginPage = () => {
  const [clientAccountId, setClientAccountId] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-container'>
      {/* LEFT SIDE IMAGE */}
      <div className='illustration'>
        <img src={IMAGES.LOGO} alt='PayDaes Logo' className='login-logo' />
        <img
          src={IMAGES.ILLUSTRATION}
          alt='Login Illustration'
          className='login-illustration'
        />
      </div>
      {/* RIGHT SIDE FORM */}
      <div className='form'>
        <div className='login-header'>
          <h3 className='login-title' style={{ marginTop: '0px' }}>
            Login
          </h3>
          <p className='login-subtitle'>
            Please fill in below information to access the System.
          </p>
        </div>
        <div className='login-input-field'>
          <TextInput
            label='Client Account ID'
            type='text'
            value={clientAccountId}
            placeholder='Eg: PD1234'
            icon={ICONS.USER_LINE}
            onChange={setClientAccountId}
          />
          <TextInput
            label='User ID'
            type='text'
            value={userId}
            placeholder='Eg: PD1234'
            icon={ICONS.USER_LINE}
            onChange={setUserId}
          />
          <TextInput
            label='Password'
            type='password'
            value={password}
            placeholder='• • • • • • • • • •'
            icon={ICONS.LOCK_LINE}
            onChange={setPassword}
          />
        </div>
        <div className='button-section'>
          <a href='#' className='forgot-password-link'>
            Forgot password?
          </a>
          <CustomButton label='Login' isDisabled={true} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
