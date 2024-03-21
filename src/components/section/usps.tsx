import Container from '../container';
import FadeIn from '../fade-in';

export default function Usps() {
  return (
    <Container className='relative z-10 mx-auto w-[61.25rem] space-y-12 pb-80 text-4xl font-bold text-white'>
      <FadeIn>
        <p>每月推出全新 Apple Originals 節目，全無廣告。</p>
      </FadeIn>
      <FadeIn>
        <p>
          透過各款 Apple 裝置、智能電視、遊戲機或串流手指，即可串流播放 Apple TV
          App 的精彩節目。
        </p>
      </FadeIn>
      <FadeIn>
        <p>觀看 4K HDR 影片，體驗空間音訊的逼真震撼1。</p>
      </FadeIn>
      <FadeIn>
        <p>一個訂閱計劃，可與多達五人共享。</p>
      </FadeIn>
    </Container>
  );
}
