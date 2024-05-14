import Register from '@pages/Auth/Register';
import RegisterSendEmailVerification from '@pages/Auth/Register/RegisterSendEmailVerification';

const AuthenticationRoute = [
  {
    key: 'register',
    name: 'Register',
    path: '/register',
    element: <Register />
  },
  {
    key: 'register-send-email-verification',
    name: 'Register send email verification',
    path: '/register/send-email-verification',
    element: <RegisterSendEmailVerification />
  }
];

export { AuthenticationRoute };
