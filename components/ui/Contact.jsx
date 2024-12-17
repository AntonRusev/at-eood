"use client";

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

import { useSectionInView } from '@/lib/hooks';
import {
    contactFadeInAnimationVariant,
    formFadeInAnimationVariant,
} from '@/lib/animation-variants';

export default function Contact() {
    const { ref } = useSectionInView("Контакти", 0.75); // Ref for nav bar highlight(custom hook)

    return (
        <motion.section
            id="contact"
            ref={ref}
            className='relative mb-28 max-w-[45rem] w-full text-center leading-8 sm:mb-40 scroll-mt-10 md:scroll-mt-28'
            variants={formFadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
        >

            {/* Heading */}
            <SectionHeading>Контакти</SectionHeading>

            {/* Email link */}
            <motion.div
                variants={contactFadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                className='mt-2 md:my-10'
            >
                <p className='text-gray-100 text-3xl tracking-wide my-36'>
                    Можете да се свържете с нас на телефон 0896677778
                </p>
            </motion.div>
        </motion.section>
    );
};