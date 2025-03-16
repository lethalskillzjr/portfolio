'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Dynamically import PinPerspective to prevent hydration issues
const PinPerspective = dynamic(() => import('./PinPerspective'), { ssr: false });

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    'translate(-50%,-50%) rotateX(0deg)'
  );

  const onMouseEnter = () => {
    setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
  };
  const onMouseLeave = () => {
    setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
  };

  return (
    <Link
      className={cn('relative group/pin z-50 cursor-pointer', containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || '/'}
    >
      <div
        style={{ perspective: '1000px', transform: 'rotateX(70deg) translateZ(0deg)' }}
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <div
          style={{ transform }}
          className='absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-lg border border-white/10 group-hover/pin:border-white/20 transition duration-700 overflow-hidden'
        >
          <div className={cn('relative z-50', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};
