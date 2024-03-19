import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const Link = ({ children }: Props) => {
  return (
    <motion.li
      whileHover={{
        color: 'white',
        transition: { duration: 0.32, ease: 'easeOut' },
      }}
      className='px-2 text-xs text-[--globalnav-color] hover:cursor-pointer'
    >
      {children}
    </motion.li>
  );
};

export default Link;
