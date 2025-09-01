import React from 'react'

const Banner = () => {
    return (
        <section className="bg-gray-100 py-16 flex justify-center items-center">
            <div className='max-w-[1400px] mx-auto'>
                <h1 className="text-3xl flex  flex-wrap gap-2 md:text-5xl font-bold text-gray-800 text-center">
                    India’s most loved
                    <span className="text-pink-600">fashion</span> platform for
                    <span className="text-blue-600">coders</span>
                </h1>
            </div>
        </section>
    )
}

export default Banner