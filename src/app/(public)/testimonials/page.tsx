'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { CarouselPresentation } from './components/carousel-presentation';
import { InfiniteTestimonials } from './components/infinite-testimonials';

const TestimonialsPage = () => {
  return (
    <>
      <CarouselPresentation></CarouselPresentation>
      <InfiniteTestimonials></InfiniteTestimonials>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default TestimonialsPage;
