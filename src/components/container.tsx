import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={twMerge(
        'mx-auto max-w-5xl px-6',
        className
      )}>
      {children}
    </div>
  );
}
