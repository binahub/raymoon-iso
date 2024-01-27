import { LineGroup, Skeleton } from '@/components/ui/skeleton';
import { cn } from 'rizzui';

export interface TableSkeletonProps {
  actionButton?: boolean;
}

export const TableSkeleton = ({ actionButton }: TableSkeletonProps) => {
  const TableRowSkeleton = () => actionButton ? (
    <div className='flex justify-between items-center p-4 my-2 h-[2rem]'>
      <LineGroup
        columns={3}
        className='grid-cols-3 gap-8 w-[85%]'
        skeletonClassName='h-8'
      />
        <LineGroup
          skeletonClassName='h-8 w-8'
          columns={3}
          className='grid-cols-3 gap-0.5 w-[10%]'
        />
    </div>
  ) : 
  (
    <div className='flex justify-between items-center p-4 my-2 h-[2rem]'>
      <LineGroup
        columns={4}
        className='grid-cols-4 gap-8 w-full'
        skeletonClassName='h-8'
      />
    </div>
  );
  return (
    <div
      className={cn(
        'h-[88%] rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
      )}
    >
      <div className='flex h-full w-full flex-col p-6 @2xl:p-12 3xl:px-16 4xl:px-28'>
        <Skeleton className='h-10' />
        <br />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
        <TableRowSkeleton />
        <hr />
      </div>
    </div>
  );
};
