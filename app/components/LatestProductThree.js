/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import latestbg from "@/assets/images/latest-bg.svg";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDictionary from '../hooks/useDictionary';
import { getAllProduct } from '../utils/getProduct';
import ProductCardThree from './ProductCardThree';
import SectionTitle from './SectionTitle';

const LatestProductThree = () => {
    const { language, dictionary } = useDictionary();
    const { sectionTitle, seeMore } = dictionary.ProductCard;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productsData = await getAllProduct(
                    language,
                    "all",
                    'new_arrival',
                    "",
                    1,
                    4
                );
                setProducts(productsData.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProduct();
    }, [language]);

    return (
        <div
            id="product-section"
            className="product-section"
        >
            <div className="relative pt-10 pb-20 product-area">
                <Image
                    src={latestbg}
                    alt="bg"
                    className="absolute top-0 left-0 z-[-1] w-full h-full object-cover object-center"
                />
                <div className="container">
                    <SectionTitle title={sectionTitle} />
                    {products.length > 0 ? (
                        <div className="product-list grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-[30px] ">
                            {products.map((product) => {
                                return (
                                    <ProductCardThree
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div>No products found</div>
                    )}
                    <div className="flex justify-center pt-10 md:pt-[70px]">
                        <Link
                            href="/collections/all"
                            className="text-base md:text-[20px] text-white font-normal px-6 py-[10px] md:px-[30px] md:py-4 transition duration-150 rounded-full bg-[linear-gradient(87deg,_#D14BF8_-6.96%,_#4C20CD_115.83%)]"
                        >
                            {seeMore}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProductThree;
