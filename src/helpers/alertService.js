import Swal from 'sweetalert2';

export const showSuccessAlert = (title, text) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
    });
};

export const showErrorAlert = (title, text) => {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
    });
};