"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCaretDown } from "react-icons/fa";

import SectionHeading from './SectionHeading';

import { useSectionInView } from '@/lib/hooks';
import {
    pictureFadeInAnimationVariant,
    textFadeInAnimationVariant,
} from '@/lib/animation-variants';

export default function About() {
    const { ref } = useSectionInView("За нас", 0.2); // Ref for nav bar highlight(custom hook)

    return (
        <section
            id='about'
            ref={ref}
            className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-10 md:scroll-mt-28"
        >

            {/* Heading */}
            <SectionHeading>За нас</SectionHeading>

            {/* Text */}
            <div className='flex flex-col gap-4 text-start text-gray-300'>
                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    Нашите багери са в постоянна готовност за работа и в отлично работно състояние. Нашите професионални багеристи са с дългогодишен опит.
                </motion.p>

                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    Машиносмяната с багер включва от 6 до 8 часа работа с багера за един ден.
                </motion.p>

                {/* Top picture */}
                <motion.div
                    variants={pictureFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    className="relative"
                >
                    <Image
                        src="/IMG-3f832f6c96954074a6eb74f09966eef8-V.jpg"
                        alt="Machine image"
                        width={400}
                        height={400}
                        quality={95}
                        priority={true}
                        className='object-cover rounded-lg border-[0.05rem] border-white shadow-xl my-12 mx-auto'
                    />
                </motion.div>


                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    Разполагаме с различни видове багери: Верижни багери, Колесни багери, Комбинирани багери и Мини багери. Имаме голямо разнообразие от багери с различни размери - с тегло от 1 до 30 тона и мощност от 10 до 200 конски сили.
                </motion.p>

                {/* Middle picture */}
                <motion.div
                    variants={pictureFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    className="relative"
                >
                    <Image
                        src="/IMG-bc9b9dced7010ba3a18b17b7e2ce8f75-V.jpg"
                        alt="Machine image"
                        width={400}
                        height={400}
                        quality={95}
                        priority={true}
                        className='object-cover rounded-lg  mr-auto border-[0.05rem] border-white shadow-xl my-12 mx-auto'
                    />
                </motion.div>


                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    Багер услугите включват дейности като: масов изкоп за сграда, траншеен изкоп на ограда, ивични фундаменти, изкоп на шахти и изгребни ями, изкоп за полагане на кабели, разрушаване на къщи и постройки, разчистване и подравняване на парцели, разтоварване на материали, почистване на корита на реки и много други дейности.
                </motion.p>

                {/* Bottom picture */}
                <motion.div
                    variants={pictureFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    className="relative"
                >
                    <Image
                        src="/IMG-f3a779f3b5985b0928d2d2d7fec087ea-V.jpg"
                        alt="Machine image"
                        width={400}
                        height={400}
                        quality={95}
                        priority={true}
                        className='object-cover rounded-lg border-[0.05rem] border-white shadow-xl my-12 mx-auto'
                    />
                </motion.div>

            </div>
            <div className='flex flex-col items-center justify-center md:gap-8'>
                {/* Arrow down */}
                <div className='hidden md:flex text-white animate-bounce mt-12'>
                    <FaCaretDown />
                </div>
            </div>
        </section>
    );
};