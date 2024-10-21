'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './hero.css';

// import required modules
import { Autoplay, Pagination, Thumbs } from 'swiper/modules';
import useDictionary from '../hooks/useDictionary';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

const Testimonials = ({ testimonials }) => {
    const {dictionary} = useDictionary();

    if (testimonials.length < 1) {
        return null
    }
        return (
            <div className="mb-10 review-section">
                <div className="review-area">
                    <div className="container">
                        <SectionTitle
                            title={dictionary.Testimonial.testimonialTitle}
                        />
                        <div className="flex items-stretch review-slider-wrapper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    375: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Pagination, Autoplay, Thumbs]}
                                className="testimonialsSwiper"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="h-full"
                                    >
                                        <div className="h-full pb-12">
                                            <TestimonialCard
                                                testimonial={testimonial}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Testimonials;
