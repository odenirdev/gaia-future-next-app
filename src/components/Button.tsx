import React, { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`border-4 border-[#292929] bg-[#292929] px-8 py-3 rounded flex gap-2 items-center`}>
      {children}
    </button>
  )
}
