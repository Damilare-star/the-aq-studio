interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`label-tag ${className}`}>
      {children}
    </span>
  )
}
