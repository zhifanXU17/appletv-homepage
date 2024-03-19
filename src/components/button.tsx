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
    small:
      'text-xs px-[10px] py-[3px] tracking-normal bg-gradient-to-b from-white to-neutral-200 hover:opacity-95',
    medium: 'text-sm px-4 py-2 tracking-normal',
    large:
      'text-base font-semibold px-8 py-4 tracking-normal bg-white hover:opacity-80',
  };

  return (
    <button
      className={twMerge(
        'rounded-full border border-border  text-textBlack ',
        sizeClassNames[size],
        className,
      )}
    >
      {children}
    </button>
  );
}
