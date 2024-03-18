import Container from './container';
import Button from './button';

export default function Header() {
  return (
    <>
      <header className='bg-backgroundContrast text-white'>
        <Container className='flex items-center justify-between min-h-[--header-row-height]'>
          <a
            href='/'
            className='flex items-center h-[--header-row-height] px-6 text-xl'>
            <span className='sr-only'>Apple</span>
          </a>
        </Container>
      </header>
      <div className='sticky top-0 z-20 bg-backgroundContrast text-white'>
        <Container className='flex items-center justify-between min-h-[--header-row-height]'>
          <span className='text-xl font-semibold'>
            Apple TV+
          </span>
          <Button size='small'>立即串流播放</Button>
        </Container>
      </div>
    </>
  );
}
