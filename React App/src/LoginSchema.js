import * as yup from 'yup'

const Schema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('A username must be filled out!'),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('email is required'),
    password:yup
    .string()
    .min(8, 'password must be at least 8 characters long')
    .required('password must be at least 8 characters long'),
});

export default Schema