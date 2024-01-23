'use client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AlertProps {
  type: 'error' | 'success' | 'warning';
  title?: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export default function SweetAlert({
  type,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
}: AlertProps) {
  let ButtonClass = '';
  if (type === 'error') ButtonClass = 'bg-[#f27474]';
  else if (type === 'success') ButtonClass = 'bg-[#a5dc86]';
  else ButtonClass = 'bg-[#facea8]';

  const handleSweetAlert = () =>
    MySwal.fire({
      title,
      icon: type,
      text: message,
      showCancelButton: true,
      confirmButtonText: confirmButtonText || 'باشه!',
      cancelButtonText,
      focusConfirm: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: `${ButtonClass} p-2 rounded-lg`,
        cancelButton: cancelButtonText
          ? 'bg-slate-300 mr-2 p-2 rounded-lg'
          : '',
      },
      buttonsStyling: false,
    });

  return handleSweetAlert();
}
