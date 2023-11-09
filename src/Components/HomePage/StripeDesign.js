import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'

import { LazyLoadImage } from "react-lazy-load-image-component";


import hover1 from "../../assets/imgs/hover1.jpg"
import hover2 from "../../assets/imgs/hover2.jpg"
import hover3 from "../../assets/imgs/hover3.jpg"

export const persons = [



    {
        img: hover1.src,

    },
    {
        img: hover2.src,

    },

    {
        img: hover3.src,

    },



];


export default function StripeDesign() {
    const [activeItem, setActiveItem] = useState(1);
    const wrapperRef = useRef(null);
    const timeoutRef = useRef(null);

    const duration = 3

    const goToSlide = (slideIndex) => {
        setActiveItem(slideIndex);
    };


    useEffect(() => {


        function cycle(index) {


            setTimeout(function () {

                index++;

                goToSlide(index)

                if (index >= persons.length - 1) {
                    index = -1;
                }

                cycle(index);

            }, duration * 1000);
        }

        cycle(1);


    }, [persons.length])



    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: .3, scale: .85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7, delay: 0 }}
        >
            <div className="flex h-full w-full items-center justify-center w-[100vw] bg-bg">
                <div className="md:w-[80vw] w-[100vw]  ">
                    <ul
                        ref={wrapperRef}
                        className="group flex flex-row gap-[1.5%]"
                    >
                        {persons.map((person, index) => (
                            <li
                                onMouseEnter={() => setActiveItem(index)}
                                aria-current={activeItem === index}
                                className={classNames(

                                    "relative cursor-pointer md:w-[20%]   [&[aria-current='true']]:w-[100%]",
                                    "[transition:width_var(--transition,500ms_ease-in)]",
                                    "before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-bg",
                                    // "[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[8%] hover:w-[12%]",
                                    // "first:pointer-events-none last:pointer-events-none [&_img]:first:opacity-0 [&_img]:last:opacity-0"
                                )}
                                key={index}
                            >
                                <div className={`relative  ${activeItem === index ? 'h-[70vh]' : 'h-[70vh] '} w-full overflow-hidden rounded bg-[#c9c6c7] `}>
                                    <LazyLoadImage
                                        className="absolute right-0 top-1/2 object-cover  -translate-y-1/2  grayscal left-1/2 h-[100%] w-[100%] -translate-x-1/2"
                                        src={person.img}

                                        width="590px"
                                        height="680px"
                                    />
                                    <div
                                        className={classNames(
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-navBg  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-navBg absolute transition-opacity",
                                            activeItem === index ? "opacity-0 " : "opacity-50"
                                        )}
                                    />
                                    <div
                                        className={classNames(
                                            "top-[100px] md:left-5  w-[90%] text-center transition-[transform,opacity] absolute p-0",
                                            activeItem !== index
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-4 opacity-0"
                                        )}
                                    >
                                       <div className="flex space-x-2 items-center text-[#9f1010] font-semibold bg-[#d6d5d5] bg-opacity-50 px-2 py-1 rounded w-[130px]">
                                       <p className="text-sm   md:text-lg ">
                                            See More
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                       </div>

                                    </div>
                                    <div
                                        className={classNames(
                                            "bottom-[20px] md:left-10  w-[90%] text-center transition-[transform,opacity] absolute p-0",
                                            activeItem == index
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-4 opacity-0"
                                        )}
                                    >
                                       <div className="flex space-x-2 items-center text-[white] font-semibold">
                                       <p className="text-sm   md:text-lg ">
                                            See More
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                       </div>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>

    );
}


