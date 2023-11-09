"use client"; // This is a client component 👈🏽

import img6 from "../../assets/imgs/page-6.jpg"
import battery from "../../assets/imgs/Battery.png"
import energy from "../../assets/imgs/energy.png"
import foodie from "../../assets/imgs/Foodie.png"

import React from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";



import * as Unicons from "@iconscout/react-unicons";

const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr:false});
import 'tiny-slider/dist/tiny-slider.css';


export const propertiesDetails = [
    {
        id: 1,
        image: "/images/property/1.jpg",
        name: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 2,
        image: "/images/property/2.jpg",
        name: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 3,
        image: "/images/property/3.jpg",
        name: '3723 SANDBAR DR, Addis, LA 70710, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 4,
        image: "/images/property/4.jpg",
        name: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 5,
        image: "/images/property/5.jpg",
        name: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 6,
        image: "/images/property/6.jpg",
        name: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
    },
    {
        id: 7,
        image: "/images/property/7.jpg",
        name: '2141 Fiero Street, Baton Rouge, LA 70808',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    },
    {
        id: 8,
        image: "/images/property/8.jpg",
        name: '9714 Inniswold Estates Ave, Baton Rouge, LA 70809',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    },
    {
        id: 9,
        image: "/images/property/9.jpg",
        name: '1433 Beckenham Dr, Baton Rouge, LA 70808, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    },
    {
        id: 10,
        image:"/images/property/10.jpg",
        name: '1574 Sharlo Ave, Baton Rouge, LA 70820, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    },
    {
        id: 11,
        image: "/images/property/11.jpg",
        name: '2528 BOCAGE LAKE DR, Baton Rouge, LA 70809, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    },
    {
        id: 11,
        image: "/images/property/12.jpg",
        name: '1533 NICHOLSON DR, Baton Rouge, LA 70802, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5
    }
];

const settings = {
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}

export default function Delight() {
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 relative">
                    <div className="tiny-home-slide-three">
                        <TinySlider settings={settings} >
                            {propertiesDetails.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
                                        <div className="relative">
                                            <Image src={item.image} alt=""  width={0} height={0} sizes="100vw" style={{width:"100%" , height:"100%"}} priority />

                                            <div className="absolute top-4 end-4">
                                                <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="pb-6">
                                                <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>

                                            </div>

                                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <Unicons.UilCompressArrows className="me-2 text-green-600" width={20}/>
                                                    <span>8000sqf</span>
                                                </li>

                                                <li className="flex items-center me-4">
                                                    <Unicons.UilBedDouble className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                                                    <span>4 Beds</span>
                                                </li>

                                                <li className="flex items-center">
                                                    <Unicons.UilBath className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                                                    <span>4 Baths</span>
                                                </li>
                                            </ul>

                                            <ul className="pt-6 flex justify-between items-center list-none">
                                                <li>
                                                    <span className="text-slate-400">Price</span>
                                                    <p className="text-lg font-medium">$5000</p>
                                                </li>

                                                <li>
                                                    <span className="text-slate-400">Rating</span>
                                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1 text-black dark:text-white">5.0(30)</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* end property content */}
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                </div>


                <div className="grid grid-cols-1 mt-8 relative">
                    <div className="tiny-home-slide-three">
                        <TinySlider settings={settings} >
                            {propertiesDetails.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
                                        <div className="relative">
                                            <Image src={item.image} alt=""  width={0} height={0} sizes="100vw" style={{width:"100%" , height:"100%"}} priority />

                                            <div className="absolute top-4 end-4">
                                                <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="pb-6">
                                                <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>

                                            </div>

                                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <Unicons.UilCompressArrows className="me-2 text-green-600" width={20}/>
                                                    <span>8000sqf</span>
                                                </li>

                                                <li className="flex items-center me-4">
                                                    <Unicons.UilBedDouble className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                                                    <span>4 Beds</span>
                                                </li>

                                                <li className="flex items-center">
                                                    <Unicons.UilBath className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                                                    <span>4 Baths</span>
                                                </li>
                                            </ul>

                                            <ul className="pt-6 flex justify-between items-center list-none">
                                                <li>
                                                    <span className="text-slate-400">Price</span>
                                                    <p className="text-lg font-medium">$5000</p>
                                                </li>

                                                <li>
                                                    <span className="text-slate-400">Rating</span>
                                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1 text-black dark:text-white">5.0(30)</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* end property content */}
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 mt-8 relative">
                    <div className="tiny-home-slide-three">
                        <TinySlider settings={settings} >
                            {propertiesDetails.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
                                        <div className="relative">
                                            <Image src={item.image} alt=""  width={0} height={0} sizes="100vw" style={{width:"100%" , height:"100%"}} priority />

                                            <div className="absolute top-4 end-4">
                                                <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="pb-6">
                                                <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>

                                            </div>

                                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <Unicons.UilCompressArrows className="me-2 text-green-600" width={20}/>
                                                    <span>8000sqf</span>
                                                </li>

                                                <li className="flex items-center me-4">
                                                    <Unicons.UilBedDouble className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                                                    <span>4 Beds</span>
                                                </li>

                                                <li className="flex items-center">
                                                    <Unicons.UilBath className="me-2 text-green-600" width={20}/>
                                                    <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                                                    <span>4 Baths</span>
                                                </li>
                                            </ul>

                                            <ul className="pt-6 flex justify-between items-center list-none">
                                                <li>
                                                    <span className="text-slate-400">Price</span>
                                                    <p className="text-lg font-medium">$5000</p>
                                                </li>

                                                <li>
                                                    <span className="text-slate-400">Rating</span>
                                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1 text-black dark:text-white">5.0(30)</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* end property content */}
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                </div>


            </div>


        </>
    );
}
