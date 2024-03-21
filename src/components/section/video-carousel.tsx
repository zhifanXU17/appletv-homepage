import { motion } from 'framer-motion';
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from '../../movie';

export default function VideoCarousel() {
  return (
    <div className='bg-background pb-5'>
      <div className='overflow-clip'>
        <div className='left-1/2 my-5 flex -translate-x-1/2 gap-2.5'>
          <div className='w-[60vw] shrink-0 overflow-clip rounded-2xl '>
            <img
              className='aspect-video h-full w-full object-cover'
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className='w-[60vw] shrink-0 overflow-clip rounded-2xl '>
            <img
              className='aspect-video h-full w-full object-cover'
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className='w-[60vw] shrink-0 overflow-clip rounded-2xl '>
            <img
              className='aspect-video h-full w-full object-cover'
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <SmallVideoCarousel movies={randomMoviesSet1} />

        <div className=''>
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
}

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          ease: 'easeOut',
          duration: 80,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <ul className='flex gap-2.5'>
          {movies.map((movie, index) => (
            <li className='h-[13.25rem] w-[23.625rem] shrink-0' key={index}>
              <img
                src={movie.poster}
                alt={movie.name}
                className='aspect-video h-full w-full rounded-lg object-cover'
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
