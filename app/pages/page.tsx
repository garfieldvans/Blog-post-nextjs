import React, { Children } from 'react'

export default function Pages ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {children}
    </div>
  )
}
