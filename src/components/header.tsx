import Container from './container';
import Button from './button';
import Link from './link';
import { Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <>
      <header className='relative z-10 bg-backgroundContrast text-white'>
        <Container
          className='flex min-h-[--header-nav-height] items-center 
        justify-between'
        >
          <ul className='flex h-[--header-nav-height] w-full items-center justify-between'>
            <li>
              <a
                href='/'
                className='mr-4 text-xl text-[--globalnav-color] hover:text-white'
              >
                <span className='sr-only'>Apple</span>
              </a>
            </li>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>Store</Link>
            <Link>
              <Search size={15} />
            </Link>
            <Link>
              <ShoppingBag size={15} />
            </Link>
          </ul>
        </Container>
      </header>
      <div className='sticky top-0 z-20 bg-backgroundContrast text-white'>
        <Container className='flex min-h-[--header-row-height] items-center justify-between'>
          <span className='text-xl font-semibold'>Apple TV+</span>
          <Button size='small'>立即串流播放</Button>
        </Container>
      </div>
    </>
  );
}
