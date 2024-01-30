'use client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info';
  title?: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmFlow?: () => void;
  dismissFlow?: () => void;
}

export default function SweetAlert({
  type,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
  confirmFlow,
  dismissFlow,
}: AlertProps) {
  let ButtonClass = '';
  let color = '';
  if (type === 'error') ButtonClass = 'bg-[#ea5455]';
  else if (type === 'success') ButtonClass = 'bg-[#5cb85c]';
  else if (type === 'info') {
    ButtonClass = 'bg-primary';
    color = 'rgb(56 114 250)';
  } else {
    ButtonClass = 'bg-[#FBBA00]';
    color = '#FBBA00';
  }

  const handleSweetAlert = () =>
    MySwal.fire({
      title,
      icon: type,
      iconColor: color,
      text: message,
      showCancelButton: !!cancelButtonText,
      confirmButtonText: confirmButtonText || 'باشه!',
      cancelButtonText,
      focusConfirm: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: `${ButtonClass} p-2 rounded-lg text-white`,
      },
      buttonsStyling: false,
    }).then((result) => {
      if (confirmFlow && result.isConfirmed) {
        confirmFlow();
      } else if (dismissFlow && result.isDismissed) {
        dismissFlow();
      }
    });

  return handleSweetAlert();
}
