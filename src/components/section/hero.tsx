import Container from '../container';
import Button from '../button';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.7, 0]
  );

  return (
    <section className='relative h-[300vh] bg-background text-white'>
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className='absolute -top-[--height-height] left-0 w-full h-[200vh]'>
        <img
          src='/public/img/napoleon.webp'
          alt=''
          className='sticky top-0 w-full h-screen object-cover'
        />
      </motion.div>
      <Container className='relative z-10 pb-7 h-[--hero-height]'>
        <motion.div
          className='flex flex-col justify-end items-start h-full'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView='visible'
          exit='hidden'
          animate='hidden'
          viewport={{ amount: 0.98 }}>
          <h1 className='text-5xl font-bold mb-10'>
            所有 Apple Origins，
            <br />
            原创作品, 只在 Apple TV+。
          </h1>
          <Button className='mb-16'>立即串流播放</Button>
          <p className='font-semibold'>以 📺 App 观看。</p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
