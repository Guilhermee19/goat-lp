'use client';

import StayInTouch from '@/components/sections/stay-in-touch';
import { CarouselPresentation } from './components/carousel-presentation';
import { InfiniteTestimonials } from './components/infinite-testimonials';
import Footer from '@/components/footer';

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
