import React, { Children, ReactNode } from 'react'

export default function Pages ({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
  return (
    <div>
        {children}
    </div>
  )
}
