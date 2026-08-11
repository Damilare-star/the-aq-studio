interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <hr className={`border-none h-px bg-[rgba(255,255,255,0.07)] ${className}`} />
  )
}
