import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AlertProps {
  type: any;
  title: string;
  message: string;
}

export default function SweetAlert({
  type,
  title,
  message,
}: AlertProps) {
  let ButtonClass = '';
  if (type === 'error') ButtonClass = 'danger';
  else if (type === 'success') ButtonClass = 'success';
  else ButtonClass = 'primary';

  const handleSweetAlert = () =>
    MySwal.fire({
      title,
      icon: type,
      text: message,
      showCancelButton: true,
      confirmButtonText: 'بله، مطمئن هستم',
      cancelButtonText: 'لغو عملیات',
      focusConfirm: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: ButtonClass,
      },
      buttonsStyling: false,
    })

  return <div>
    </div>;
}
