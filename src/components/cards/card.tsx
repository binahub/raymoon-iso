import cn from '@/utils/class-names';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-50 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]',
        className
      )}
    >
      {children}
    </div>
  );
}
