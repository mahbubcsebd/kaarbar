import { getHeroImage } from '../../utils/getHeroImage';
import { getTestimonials } from '../../utils/getTestimonial';
import Categories from '../Categories';
import HeroSlider from '../HeroSlider';
import LatestProductThree from '../LatestProductThree';
import ProductListThree from '../ProductListThree';
import RecentlyViewedThree from '../RecentlyViewedThree';
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
            <ProductListThree />
            <Accordion bg={true} />
            <Testimonials
                testimonials={testimonials.data}
                bg={true}
            />
            <RecentlyViewedThree />
        </>
    );
};

export default DaaribHomePage;
