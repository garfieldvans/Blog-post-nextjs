import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-white px-10 py-10 md:px-24 lg:px-36 flex justify-center h-auto relative bottom-0'>
      <h1 className='text-xs md:text-sm text-slate-400'>&copy; dibuat menggunakan 🤞 by <Link href={'https://github.com/garfieldvans'}>Garfieldvans</Link></h1>

    </div>
  )
}

export default Footer
