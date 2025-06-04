import { cn } from '@/lib/utils';

const tempStyle1 = {
  border: '3px solid blue',
};
const tempStyle2 = { border: '3px solid red' };

export function MainContentLayout({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <main className={cn(`grid grid-rows-[auto_1fr] h-full items-start content-start`, className)} style={tempStyle1}>
      {children}
    </main>
  );
}

export function MainContentContent({
  children,
  className,
  isCentered = false,
  divided = false,
  hasLeftServiceColumn = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // content is centered in the middle of the page e.g. for empty state
  isCentered?: boolean;
  // content is split into two columns equal width columns
  divided?: boolean;
  // used when the left column is a service column (e.g. agent history nav)
  hasLeftServiceColumn?: boolean;
}) {
  return (
    <div
      className={cn(
        `grid overflow-y-auto h-full `,
        `overflow-x-auto min-w-[min-content]`,
        {
          'items-start content-start': !isCentered && !divided && !hasLeftServiceColumn,
          '': divided || hasLeftServiceColumn,
          'grid place-items-center': isCentered,
          'grid-cols-[1fr_1fr]': divided && !hasLeftServiceColumn,
          'grid-cols-[auto_1fr_1fr]': divided && hasLeftServiceColumn,
          'grid-cols-[auto_1fr]': !divided && hasLeftServiceColumn,
        },
        className,
      )}
      style={tempStyle2}
    >
      {children}
    </div>
  );
}
