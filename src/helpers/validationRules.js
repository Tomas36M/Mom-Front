import { validateUsername, validatePassword, validateEmail, validateBirthdate, validateDni } from './userValidations';
export const validationRules = {
    name: {
        required: true,
        message: 'Name is required',
    },
    email: {
        required: true,
        message: 'Email is required',
        validate: validateEmail,
        invalidMessage: 'Invalid email address',
    },
    username: {
        required: true,
        message: 'Username is required',
        validate: validateUsername,
        invalidMessage: 'Invalid username',
    },
    password: {
        required: true,
        message: 'Password is required',
        validate: validatePassword,
        invalidMessage: 'Password must contain at least one uppercase letter, one number, and one special character',
    },
    birthdate: {
        required: true,
        message: 'Birthdate is required',
        validate: validateBirthdate,
        invalidMessage: 'Invalid birthdate',
    },
    nDni: {
        required: true,
        message: 'DNI is required',
        validate: validateDni,
        invalidMessage: 'Invalid DNI',
    },
};