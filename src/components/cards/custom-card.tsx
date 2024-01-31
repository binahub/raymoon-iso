interface CardProps {
  children: React.ReactNode;
  height?: string;
}

export default function CustomCard({ children, height }: CardProps) {
  return (
    <div
      className={`h-${
        height || '[88%]'
      } rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-50 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]`}
    >
      {children}
    </div>
  );
}
