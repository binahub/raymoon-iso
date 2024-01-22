import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { ForwardedRef, forwardRef } from 'react';

const widgetCardClasses = {
  base: ' h-[88%]  bg-gray-0 p-5 dark:bg-gray-50 lg:p-7 rounded-3xl  ',
  // base:'h-[88%] rounded-2xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]',
  rounded: {
    sm: 'rounded-sm',
    // DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  },
};

type WidgetCardTypes = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  rounded?: keyof typeof widgetCardClasses.rounded;
  headerClassName?: string;
  titleClassName?: string;
  actionClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

function WidgetCard(
  {
    title,
    action,
    description,
    // rounded = 'DEFAULT',
    className,
    headerClassName,
    actionClassName,
    titleClassName,
    descriptionClassName,
    children,
  }: React.PropsWithChildren<WidgetCardTypes>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cn(
        widgetCardClasses.base,
        // widgetCardClasses.rounded[rounded],
        className
      )}
      ref={ref}
    >
      <div
        className={cn(
          action && 'flex items-start justify-between',
          headerClassName
        )}
      >
        <div>
          <Title
            as="h3"
            className={cn('text-base font-semibold sm:text-lg', titleClassName)}
          >
            {title}
          </Title>
          {description && (
            <div className={descriptionClassName}>{description}</div>
          )}
        </div>
        {action && <div className={cn('ps-2', actionClassName)}>{action}</div>}
      </div>
      {children}
    </div>
  );
}

export default forwardRef(WidgetCard);
WidgetCard.displayName = 'WidgetCard';
