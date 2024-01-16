'use client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AlertProps {
  type: 'error' | 'success';
  title: string;
  message: string;
  confirmButtonText: string;
  cancelButtonText?: string;
}

export default function SweetAlert({
  type,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
}: AlertProps) {
  const handleSweetAlert = () =>
    MySwal.fire({
      title,
      icon: type,
      text: message,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      focusConfirm: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: 'bg-yellow-400 p-2 rounded-lg',
        cancelButton: 'bg-slate-200 mr-2',
      },
      buttonsStyling: false,
    });

  return handleSweetAlert();
}
