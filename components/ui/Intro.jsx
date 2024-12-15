"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCaretDown } from "react-icons/fa";

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Начало", 0.5); // Ref for nav bar highlight(custom hook)

    return (
        <section
            id='intro'
            ref={ref}
            className='max-w-[45rem] text-center sm:mb-0 scroll-mt-[100rem]'
        >

            <div className='flex flex-col items-center justify-center md:gap-8'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.4,
                    }}
                >
                </motion.div>

                <motion.div
                    className='py-4 mb-10 text-xl font-light leading-[1.5] whitespace-pre-wrap'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Short intro text */}
                    <p className='mb-12 text-gray-100 text-5xl'>АРГИРОВ ТРАНС ЕООД</p>

                    <Image
                        src="/intro.jpg"
                        alt="Machine image"
                        width={800}
                        height={800}
                        quality={95}
                        priority={true}
                        className='object-cover rounded-lg border-[0.1rem] border-white shadow-xl my-12 mx-auto'
                    />
                    
                    <p className='mt-4 text-gray-200'>Предлагаме цялостна услуга - Изкоп с багер със собствен оператор, гориво и включен транспорт до адрес посочен от клиента.</p>

                </motion.div>

                {/* Arrow down */}
                <div className='hidden md:flex text-white animate-bounce mb-12'>
                    <FaCaretDown />
                </div>
            </div>
        </section>
    );
};