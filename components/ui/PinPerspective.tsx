'use client';
import { motion } from 'framer-motion';

const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className='pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500'>
      <div className='w-full h-full -mt-7 flex-none inset-0'>
        <div className='absolute top-0 inset-x-0 flex justify-center'>
          <a
            href={href}
            target='_blank'
            className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10'
          >
            <span className='relative z-20 text-white text-xs font-bold inline-block py-0.5'>
              {title}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PinPerspective;
