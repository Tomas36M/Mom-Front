export const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{3,15}$/;
    return regex.test(username);
};

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
};


export const validateBirthdate = (birthdate) => {
    return !isNaN(Date.parse(birthdate));
};

export const validateDni = (nDni) => {
    const regex = /^\d{4,10}$/;
    return regex.test(nDni);
};