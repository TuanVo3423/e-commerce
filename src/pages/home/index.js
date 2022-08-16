import React from 'react';
import CarouselBanner from '../../components/Banner';
import SlideProducts from './components/Slider';
import FeaturedProducts from './components/FeaturedProducts';
import CommonProduct from './components/CommonProducts';
// import DonateHome from '../../components/DonateHome';
import DonationSection from '../../components/Donation';
import { dataHome } from '../../services';

export default function Home() {
    return (
        // Khung cua Carousel
        <React.Fragment>
            <div>
                <CarouselBanner data={dataHome} />
            </div>
            <div className="w-full h-full">
                <SlideProducts />
            </div>
            <div>
                <FeaturedProducts />
            </div>
            <div className="w-full h-full">
                <CommonProduct />
            </div>
            <div className="w-full h-full">
                <DonationSection isAtHome />
            </div>
        </React.Fragment>
    );
}
