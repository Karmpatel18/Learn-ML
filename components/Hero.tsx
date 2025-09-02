import React from 'react'

function Hero() {
    return (
        <div className="flex w-full max-w-full justify-center flex-col items-center mt-24 mb-64">
            
            <h1 className="text-[68px] font-bold tracking-tighter max-w-6xl leading-20 text-center  bg-gradient-to-r from-neutral-900 to-neutral-800 bg-clip-text text-transparent dark:text-neutral-50">Master Machine Learning, one concept at a time.</h1>
                <p className="text-lg font-normal tracking-normal max-w-2xl text-center mt-0 text-neutral-800 dark:text-neutral-200">From algorithms to deployment - documented for developers.</p>
        </div>
    )
}

export default Hero;
