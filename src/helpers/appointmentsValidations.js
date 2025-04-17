// validations.js

// Función para validar si la fecha es un día de semana
export function isWeekday(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDay();
    return day !== 0 && day !== 6;
}

// Función para validar el rango de fechas
export function isValidDateRange(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const oneYearFromNow = new Date(today);
    oneYearFromNow.setFullYear(today.getFullYear() + 1);
    return date >= today && date <= oneYearFromNow;
}

// Función para validar la hora
export function isValidTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours >= 7 && hours < 17;
}

// Función para validar la longitud de la descripción
export function isValidDescription(description) {
    return description.length <= 100;
}

// Función para validar todo el formulario
export function validateForm(date, time, description) {
    const errors = {};

    if (!isWeekday(date)) {
        errors.date = "La fecha debe ser un día de lunes a viernes.";
    }
    if (!isValidDateRange(date)) {
        errors.date = "La fecha debe estar entre hoy y un año desde ahora.";
    }
    if (!isValidTime(time)) {
        errors.time = "La hora debe estar entre las 7:00 AM y las 5:00 PM.";
    }
    if (!isValidDescription(description)) {
        errors.description = "La descripción debe ser corta y concisa.";
    }
    return errors;
}