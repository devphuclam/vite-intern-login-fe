/* eslint-disable @typescript-eslint/no-unused-vars */
import './login.scss';
import { IMAGES } from '../../assets/images';
import UserLine from '../../assets/icons/user-line.svg?react';
import LockLine from '../../assets/icons/lock-line.svg?react';
import ErrorWarningImage from '../../assets/images/error-warning-fill.svg?react';
import AlertImage from '../../assets/images/alert-fill.svg?react';
import TextInput from '../../components/common/TextInput/TextInput';
import CustomButton from '../../components/common/CustomButton/CustomButton';
import AlertModal from '../../components/common/AlertModal/AlertModal';
import { useState } from 'react';

const correctForm = {
  clientAccountId: 'PD1234',
  userId: 'PD1234',
  password: 'password123',
};

const LoginPage = () => {
  const [clientAccountId, setClientAccountId] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    clientAccountId: '',
    userId: '',
    password: '',
  });

  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordExpiredModalOpen, setIsPasswordExpiredModalOpen] =
    useState(false);

  const isDisabled = !clientAccountId || !userId || !password;

  const validateForm = () => {
    const newErrors = {
      clientAccountId: '',
      userId: '',
      password: '',
    };

    if (clientAccountId !== correctForm.clientAccountId) {
      newErrors.clientAccountId = 'ⓘ Client Account ID is not found.';
    }

    if (userId !== correctForm.userId) {
      newErrors.userId = ' ';
    }

    if (password !== correctForm.password) {
      newErrors.password =
        'ⓘ You have entered the incorrect User ID and/or Password. Please try again.';
    }

    setErrors(newErrors);

    // nếu không có lỗi thì xử lý tiếp login
    const hasError = Object.values(newErrors).some((e) => e !== '');

    if (!hasError) {
      console.log('Login success!');
      alert('Login success!');
    }

    if (hasError) {
      const newCount = count + 1;
      setCount(newCount);
      console.log('Login failed! Attempt count: ', newCount);

      if (newCount >= 3) {
        setIsModalOpen(true);
      }
    }

    if (password === 'expired') {
      setIsPasswordExpiredModalOpen(true);
    }
  };
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
            icon={<UserLine />}
            onChange={(val) => {
              setClientAccountId(val);
              setErrors({ ...errors, clientAccountId: '' });
            }}
            error={errors.clientAccountId}
          />
          <TextInput
            label='User ID'
            type='text'
            value={userId}
            placeholder='Eg: PD1234'
            icon={<UserLine />}
            onChange={(val) => {
              setUserId(val);
              setErrors({ ...errors, userId: '' });
            }}
            error={errors.userId}
          />
          <TextInput
            label='Password'
            type='password'
            value={password}
            placeholder='• • • • • • • • • •'
            icon={<LockLine />}
            onChange={(val) => {
              setPassword(val);
              setErrors({ ...errors, password: '' });
            }}
            error={errors.password}
          />
        </div>
        <div className='button-section'>
          <a href='#' className='forgot-password-link'>
            Forgot password?
          </a>
          <CustomButton
            label='Login'
            isDisabled={isDisabled}
            onClick={validateForm}
          />
        </div>
      </div>
      <AlertModal
        open={isModalOpen}
        title='Failed Login Attempts Exceeded'
        message='Your Account is disabled. Please contact your HR Administrator to enable your Account.'
        icon={<ErrorWarningImage />}
        onClose={() => {
          setIsModalOpen(false);
          setCount(0);
        }}
      />
      <AlertModal
        open={isPasswordExpiredModalOpen}
        title='Temporary Password Expired'
        message='Your temporary password has expired. Please generate a new one.'
        icon={<AlertImage />}
        onClose={() => {
          setIsPasswordExpiredModalOpen(false);
        }}
      />
    </div>
  );
};

export default LoginPage;
