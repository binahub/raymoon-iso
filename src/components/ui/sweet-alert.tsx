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
  if (type === 'error') ButtonClass = 'bg-[#ea5455]';
  else if (type === 'success') ButtonClass = 'bg-[#5cb85c]';
  else ButtonClass = 'bg-[#facea8]';

  const handleSweetAlert = () =>
    MySwal.fire({
      title,
      icon: type,
      text: message,
      showCancelButton: !!cancelButtonText,
      confirmButtonText: confirmButtonText || 'باشه!',
      cancelButtonText,
      focusConfirm: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: `${ButtonClass} p-2 rounded-lg`,
      },
      buttonsStyling: false,
    });

  return handleSweetAlert();
}
