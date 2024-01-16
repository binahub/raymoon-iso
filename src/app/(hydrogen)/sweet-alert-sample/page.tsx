'use client';
import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { Button } from 'rizzui';

function page() {
  return (
    <div>
      <WidgetCard title="component using">
        <Button
          onClick={() =>
            SweetAlert({
              title: 'danger',
              type: 'success',
              message: 'please confirm',
              confirmButtonText: 'done',
            })
          }
        >
          click to see sweet alert
        </Button>
      </WidgetCard>
    </div>
  );
}

export default page;
