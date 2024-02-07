import { LineGroup, Skeleton } from '@/components/ui/skeleton';
import rangeMap from '@/utils/range-map';

export interface TableSkeletonProps {
  actionButton?: boolean;
  rowsNumber?: number;
}

export const TableSkeleton = ({ actionButton, rowsNumber }: TableSkeletonProps) => {
  const TableRowSkeleton = () =>
    actionButton ? (
      <>
        <div className='flex justify-between items-center p-4 my-2 h-[2rem]'>
          <LineGroup columns={3} className='grid-cols-3 gap-8 w-[85%]' skeletonClassName='h-8' />
          <LineGroup
            skeletonClassName='h-8 w-8'
            columns={3}
            className='grid-cols-3 gap-0.5 w-[10%]'
          />
        </div>
        <hr />
      </>
    ) : (
      <>
        <div className='flex justify-between items-center p-4 my-2 h-[2rem]'>
          <LineGroup columns={4} className='grid-cols-4 gap-8 w-full' skeletonClassName='h-8' />
        </div>
        <hr />
      </>
    );

  return (
    <>
      <Skeleton className='h-10' />
      <br />
      {rangeMap(rowsNumber || 7, (i) => (
        <TableRowSkeleton key={i} />
      ))}
    </>
  );
};
