import React from 'react'

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'font-600 transition-all duration-200 focus:outline-none focus:ring-offset-2 active:scale-95 rounded-md'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary',
    secondary: 'bg-white text-primary border border-primary hover:bg-neutral-50 focus:ring-2 focus:ring-primary',
    outline: 'bg-transparent text-primary border border-neutral-300 hover:bg-neutral-100 focus:ring-2 focus:ring-primary',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
