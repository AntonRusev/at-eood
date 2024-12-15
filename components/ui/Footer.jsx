import React from 'react';
import Link from 'next/link';

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>

            {/* Social links */}
            <div className='flex justify-center items-center gap-2 my-2'>
                {/* Github */}
                {/* <Link
                    href="#"
                    target="_blank"
                >
                    <FaGithubSquare className='h-6 w-6 hover:text-white transition' />
                </Link> */}

                {/* LinkedIn */}
                {/* <Link
                    href="#"
                    target="_blank"
                >
                    <FaLinkedin className='h-6 w-6 hover:text-white transition' />
                </Link> */}
            </div>

            {/* Copyright */}
            <p className='mb-2 text-xs'>2025</p>

            {/* App tech-stack */}
            <p className='semibold'>
                АРГИРОВ ТРАНС ЕООД
            </p>
        </footer>
    );
};