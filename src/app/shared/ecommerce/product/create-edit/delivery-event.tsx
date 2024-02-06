import FormGroup from '@/app/shared/form-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Datepicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import cn from '@/utils/class-names';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // Import the Persian (Farsi) locale
import 'dayjs/'; // Import the Persian (Farsi) locale

export default function DeliveryEvent({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup
      title="Delivery / Event Date"
      description="Add delivery or vent Date here"
      className={cn(className)}
    >
      <Controller
        name="isPurchaseSpecifyDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            value={value}
            checked={value}
            onChange={onChange}
            label="Yes, customers must specify a date to purchase this product"
            className="col-span-full"
          />
        )}
      />
      <Input
        label="Date Field Name"
        placeholder="Date Field Name"
        className="col-span-full"
        {...register('dateFieldName')}
        error={errors.dateFieldName?.message as string}
      />
      <Controller
        name="isLimitDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            value={value}
            checked={value}
            onChange={onChange}
            label="I want to limit the date range"
            className="col-span-full"
          />
        )}
      />
      <Controller
        name="availableDate"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Datepicker
            label="Available date"
            placeholder="Select Date"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="endDate"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Datepicker
            label="End date"
            placeholder="Select Date"
            onChange={onChange}
            value={value}
          />
        )}
      />
    </FormGroup>
  );
}
