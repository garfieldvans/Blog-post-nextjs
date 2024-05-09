import React, { Children, ReactNode } from 'react'

export default function Pages ({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
    
  return (
    <div className='md:px-28'>
        {children}
    </div>
  )
}
