import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({
  children,
  className,
  size = 'medium',
}: Props) {
  const sizeClassNames = {
    small: 'text-xs px-[10px] py-[3px] tracking-normal',
    medium: 'text-sm px-4 py-2 tracking-normal',
    large: 'text-base px-8 py-4 tracking-normal',
  };

  return (
    <button
      className={twMerge(
        'text-textBlack rounded-full bg-gradient-to-b from-white to-neutral-200 border-border border hover:opacity-95',
        sizeClassNames[size],
        className
      )}>
      {children}
    </button>
  );
}
