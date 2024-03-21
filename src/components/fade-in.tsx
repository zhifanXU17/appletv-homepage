import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '100% 0px -300px 0px' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
