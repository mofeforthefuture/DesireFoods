import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is Required'),
  password: yup.string().required('Password is Required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is Required'),
  password: yup.string().required('Password is Required'),
});
