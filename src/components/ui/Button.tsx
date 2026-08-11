import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({
  children,
  variant = 'outline',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-medium transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-[#8B5CF6] text-white px-6 py-3 hover:bg-[#7c3aed]',
    outline: 'border border-[rgba(255,255,255,0.14)] text-white px-6 py-3 hover:border-[#8B5CF6] hover:text-[#8B5CF6]',
    ghost: 'text-[rgba(255,255,255,0.55)] hover:text-white py-1',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
