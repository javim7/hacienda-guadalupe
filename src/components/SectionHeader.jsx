// src/components/SectionHeader.jsx
export default function SectionHeader({ 
  title, 
  className = '',
  titleClassName = '',
  backgroundColor = 'var(--brand-corinto-light)',
  textColor = 'var(--brand-contrast)'
}) {
  return (
    <section 
      className={`w-full py-6 md:py-10 ${className}`}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px] text-center">
        <h1 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${titleClassName}`}>
          {title}
        </h1>
      </div>
    </section>
  )
}
