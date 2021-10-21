import * as yup from 'yup'



const Schema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .min(5, 'username must be at least 5 characters long!')
    .required('A username must be filled out.'),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('email is required.'),
    password:yup
    .string()
    .min(8, 'password must be at least 8 characters long!')
    .required('a password must be filled out.'),
});

export default Schema