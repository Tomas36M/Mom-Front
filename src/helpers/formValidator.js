import { validationRules } from './validationRules';

export const validateFormData = (formData) => {
    const errors = {};

    Object.keys(validationRules).forEach((field) => {
        const rule = validationRules[field];

        if (rule.required && !formData[field]) {
            errors[field] = rule.message;
        } else if (rule.validate && !rule.validate(formData[field])) {
            errors[field] = rule.invalidMessage;
        } else if (rule.customValidation && !rule.customValidation(formData[field], formData)) {
            errors[field] = rule.invalidMessage;
        }
    });

    return errors;
};