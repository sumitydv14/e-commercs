import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md w-full'>
        <div className='max-w-[1400px] mx-auto py-4 flex justify-between items-center'>
        <span className='text-xl font-bold text-gray-800'>YOUR LOGO</span>
        <div className='flex items-center space-x-2 cursor-pointer'>
                      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m5-8v8m4-8v8m5-8l2 8"
            />
          </svg>
           <span className="bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
            0
          </span>
        </div>
        </div>

    </nav>
  )
}

export default Navbar