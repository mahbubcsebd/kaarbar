"use client"

import bkash from "@/assets/icons/bkash.svg";
import cod from '@/assets/icons/cod.svg';
import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import logo from "@/assets/icons/logo.svg";
import nagad from '@/assets/icons/nagad.svg';
import youtube from '@/assets/icons/youtube.svg';
import useDictionary from '@/hooks/useDictionary';
import { getPaymentMethod } from '@/utils/getPaymentMethod';
import { getSiteSettings } from '@/utils/getSiteSettings';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const AbayaFooter = () => {
    const { language, dictionary } = useDictionary();
    const [siteSetting, setSiteSetting] = useState('');
    const [paymentMethod, setPaymentMethod] = useState([]);

    useEffect(() => {
        const fetchSiteSettings = async () => {
            const siteSettings = await getSiteSettings(language);
            const paymentMethodData = await getPaymentMethod();

            setPaymentMethod(paymentMethodData.data);
            setSiteSetting(siteSettings.data);
        };

        fetchSiteSettings();
    }, [language]);

    const {
        contact,
        footerDesc,
        company,
        aboutUs,
        privacyPolicy,
        returnPolicy,
        termsAndConditions,
        copyRight,
        payment,
        socialMedia,
        developBy,
    } = dictionary.Footer;

    const {
        footer_logo,
        phone,
        email,
        footer_address,
        facebook_url,
        instagram_url,
        youtube_url,
        tiktok_url,
    } = siteSetting;

    return (
        <footer
            id="footer"
            className="bg-gray-900 footer"
        >
            <div className="footer-area">
                <div className="container">
                    <div className="py-10 lg:py-[100px]">
                        <div className="flex justify-center mb-6 lg:mb-16">
                            <Link href="/">
                                <Image
                                    src={footer_logo ? footer_logo : logo}
                                    alt="footer logo"
                                    height={115}
                                    width={115}
                                    className="max-w-[115px] lg:max-w-[200px] md:w-auto h-auto max-h-[56px]"
                                />
                            </Link>
                        </div>
                        <div>
                            <p className="text-[20px] font-normal text-gray-400 flex flex-col gap-1 justify-center items-center mb-3 lg:hidden">
                                {contact} :{' '}
                                <span className="w-9 h-[1px] bg-[#FF9E2C] "></span>
                            </p>
                            <div className="grid items-center justify-between gap-3 lg:grid-cols-3 lg:flex-row lg:gap-4">
                                <div>
                                    <ul className="grid gap-3">
                                        <li>
                                            <Link
                                                href="/terms-and-conditions"
                                                className="text-base font-normal text-gray-300 lg:text-lg"
                                            >
                                                {termsAndConditions}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/privacy-policy"
                                                className="text-base font-normal text-gray-300 lg:text-lg"
                                            >
                                                {privacyPolicy}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center gap-2 text-base font-normal text-gray-300 lg:text-lg">
                                        <p>
                                            <span className="w-[34px] h-[34px] rounded-full bg-gray-200 flex justify-center items-center text-gray-900">
                                                <FiPhoneCall />
                                            </span>
                                        </p>
                                        {phone ? phone : '01896-088855'}
                                    </div>
                                    <div className="flex items-center gap-2 text-base font-normal text-gray-300 lg:text-lg">
                                        <p>
                                            <span className="w-[34px] h-[34px] rounded-full bg-gray-200 flex justify-center items-center text-gray-900">
                                                <CiMail />
                                            </span>
                                        </p>
                                        {email ? email : 'info@abaya.com'}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-base font-normal text-gray-300 lg:text-lg">
                                    {' '}
                                    <p>
                                        <span className="w-[34px] h-[34px] rounded-full bg-gray-200 flex justify-center items-center text-gray-900">
                                            <CiLocationOn />
                                        </span>{' '}
                                    </p>
                                    {footer_address
                                        ? footer_address
                                        : 'Block #K, Road #18, House #195, Floor #2nd (lift), South Banasree, Rampura, Dhaka'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-600" />
                <div className="container">
                    <div className="lg:flex justify-between items-center py-[30px] hidden">
                        <div>
                            <p className="text-lg font-normal text-gray-500">
                                {/* © {copyRight} */}
                                Powered by{' '}
                                <Link
                                    className="text-gray-400"
                                    href="https://karbar.shop"
                                    target="_blank"
                                >
                                    Karbar
                                </Link>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-[20px] font-normal text-gray-400 relative">
                                {payment} :
                            </p>
                            {paymentMethod && (
                                <ul className="flex items-center gap-2">
                                    {paymentMethod.map((method) => {
                                        const icon =
                                            method.name === 'nagad'
                                                ? nagad
                                                : method.name === 'bkash'
                                                ? bkash
                                                : cod;

                                        return (
                                            <li key={method.id}>
                                                <Image
                                                    src={icon}
                                                    alt={method.name}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                        <ul className="flex items-center gap-[18px]">
                            {facebook_url && (
                                <li>
                                    <Link
                                        href={`${
                                            facebook_url
                                                ? facebook_url
                                                : 'https://facebook.com'
                                        }`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition duration-150 border-2 border-white rounded-full hover:bg-gray-600 hover:border-gray-600">
                                            <FaFacebookF />
                                        </div>
                                    </Link>
                                </li>
                            )}
                            {instagram_url && (
                                <li>
                                    <Link
                                        href={`${
                                            instagram_url
                                                ? instagram_url
                                                : 'https://instagram.com'
                                        }`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition duration-150 border-2 border-white rounded-full hover:bg-gray-600 hover:border-gray-600">
                                            <FaInstagram />
                                        </div>
                                    </Link>
                                </li>
                            )}
                            {youtube_url && (
                                <li>
                                    <Link
                                        href={`${
                                            youtube_url
                                                ? youtube_url
                                                : 'https://youtube.com'
                                        }`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition duration-150 border-2 border-white rounded-full hover:bg-gray-600 hover:border-gray-600">
                                            <FaYoutube />
                                        </div>
                                    </Link>
                                </li>
                            )}
                            {tiktok_url && (
                                <li>
                                    <Link
                                        href={`${
                                            tiktok_url
                                                ? tiktok_url
                                                : 'https://www.tiktok.com/'
                                        }`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition duration-150 border-2 border-white rounded-full hover:bg-gray-600 hover:border-gray-600">
                                            <FaTiktok />
                                        </div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="border-b border-gray-600 py-[18px]">
                        <div className="flex flex-col items-center gap-4 lg:flex-row">
                            <p className="text-[20px] font-normal text-gray-400 flex flex-col gap-1 justify-center items-center lg:hidden">
                                {payment} :
                                <span className="w-9 h-[1px] bg-[#FF9E2C] "></span>
                            </p>
                            <ul className="flex items-center gap-2 w-[300px] overflow-hidden">
                                <li>
                                    <Image
                                        src={nagad}
                                        alt="nagad"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={bkash}
                                        alt="bkash"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={cod}
                                        alt="cash on delivery"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="container">
                            <div className="flex items-center justify-center gap-2">
                                <p className="text-base font-medium text-[#F4F4F4] lg:hidden">
                                    {socialMedia} :
                                </p>
                                <ul className="flex items-center gap-[18px]">
                                    <li>
                                        <Link href="https://facebook.com">
                                            <Image
                                                src={facebook}
                                                alt="facebook"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com">
                                            <Image
                                                src={instagram}
                                                alt="instagram"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://youtube.com">
                                            <Image
                                                src={youtube}
                                                alt="youtube"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-5 bg-gray-700 lg:hidden">
                        <p className="text-lg font-normal text-gray-500">
                            Powered by{' '}
                            <Link
                                className="text-gray-400"
                                href="https://karbar.shop"
                                target="_blank"
                            >
                                Karbar
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AbayaFooter