'use client'
import WidgetCard from '@/components/cards/widget-card';
import { Button } from 'rizzui';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function page() {
  const MySwal = withReactContent(Swal);

  const confirmationHandler = (e: any) => {
    MySwal.fire({
      title: 'آیا مطمئن هستید؟',
      text: 'انجام این عملیات غیرقابل بازگشت می باشد.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، مطمئن هستم',
      cancelButtonText: 'لغو عملیات',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        console.log(e);
      }
    });
  };

  return (
    <div>
      <WidgetCard title="sweet alert">
        <Button onClick={(e) => confirmationHandler(e)}>
          sweet alert bbin
        </Button>
      </WidgetCard>
    </div>
  );
}

export default page;
