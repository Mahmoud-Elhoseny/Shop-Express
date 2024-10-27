import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'User name is too short!')
    .max(50, 'User name is too long!')
    .required('User name is required!'),

  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters long.'),
});
