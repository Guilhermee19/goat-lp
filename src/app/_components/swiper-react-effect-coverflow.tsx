import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export default function SwiperCoverflow({
  tabs,
  tabIndex,
  isLoop,
  setTabIndex,
}: {
  tabs: Tab[];
  tabIndex?: number;
  isLoop?: boolean;
  setTabIndex?: (tabIndex: number) => void;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  // Atualiza o slide quando o tabIndex for alterado
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(tabIndex || 0);
    }
  }, [tabIndex]);

  // Atualiza o tabIndex quando o slide mudar
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (!setTabIndex) return;
    setTabIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={isLoop ?? false}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1, // Em telas pequenas (como celulares), exibe 1 slide
            spaceBetween: 10, // Espaço entre os slides
          },
          1024: {
            slidesPerView: 2, // Em telas maiores, exibe 2 slides
            spaceBetween: 20, // Espaço entre os slides
          },
        }}
        pagination={false}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {tabs.map((tab, idx) => (
          <SwiperSlide className="w-full" key={idx}>
            {tab.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
