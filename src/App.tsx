import './index.css';
import Header from './components/header';
import Hero from './components/section/hero';
import Usps from './components/section/usps';
import VideoCarousel from './components/section/video-carousel';

function App() {
  return (
    <main className='font-sans'>
      <Header />
      <div className='bg-background'>
        <Hero />
        <Usps />
      </div>
      <VideoCarousel />
    </main>
  );
}

export default App;
