import Container from '../container';
import Button from '../button';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

  return (
    <section className='h-[300vh] bg-background text-white'>
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className='absolute -top-[--header-height] left-0 h-[200vh] w-full'
      >
        <img
          src='/public/img/napoleon.webp'
          alt=''
          className='sticky top-0 h-screen w-full object-cover'
        />
      </motion.div>
      <Container className='relative z-10 h-[--hero-height] pb-11'>
        <motion.div
          className='flex h-full flex-col items-start justify-end'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView='visible'
          exit='hidden'
          animate='hidden'
          viewport={{ amount: 0.98 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.99, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className='mb-10 text-5xl font-bold'
          >
            所有 Apple&nbsp;Origins，
            <br />
            原创作品, 只在 Apple&nbsp;TV+。
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.99, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            <Button size='large' className='mb-16'>
              立即串流播放
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.99, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            className='font-semibold'
          >
            以 📺 App 观看。
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
