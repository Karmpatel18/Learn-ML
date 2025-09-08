'use client'

import React from 'react'
import Button from './ui/Button';
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
function Hero() {
    const { isSignedIn } = useUser();
    const router = useRouter();

    const handleClick = () => {
        if (isSignedIn) {
            router.push("/machine-learning");
        } else {
            router.push("/login");
        }
    };



    return (
        <div className="flex w-full max-w-full justify-center flex-col items-center pt-36 pb-20 z-40">

            <h1 className="text-[68px] font-bold tracking-tighter max-w-6xl leading-20 text-center  bg-gradient-to-r from-neutral-900 to-neutral-800 bg-clip-text text-transparent dark:text-neutral-50">Master Machine Learning, one concept at a time.</h1>
            <p className="text-lg font-normal tracking-normal max-w-2xl text-center mt-0 text-neutral-800 dark:text-neutral-200">From algorithms to deployment - documented for developers.</p>
            <div className="flex gap-2.5 mt-4">
                <Button onClick={handleClick} label="Get Started" variant="primary" size="md" />
                <Button label="Machine Learning" variant="secondary" size="md" />
            </div>
        </div>
    )
}

export default Hero;
