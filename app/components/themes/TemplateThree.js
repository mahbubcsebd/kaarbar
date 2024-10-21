import { getHeroImage } from '../../utils/getHeroImage';
import { getTestimonials } from '../../utils/getTestimonial';
import Categories from '../Categories';
import HeroSlider from '../HeroSlider';
import HomeCategories from '../HomeCategories';
import LatestProductThree from '../LatestProductThree';
import RecentlyViewed from '../RecentlyViewed';
import Testimonials from '../Testimonials';
import Accordion from '../accordion/Accordion';

const DaaribHomePage = async () => {
    const heroImages = await getHeroImage();
    const testimonials = await getTestimonials();
    return (
        <>
            <Categories />
            <HeroSlider images={heroImages.data} />
            <LatestProductThree />
            <HomeCategories />
            <Accordion />
            <Testimonials testimonials={testimonials.data} />
            <RecentlyViewed />
        </>
    );
};

export default DaaribHomePage;
