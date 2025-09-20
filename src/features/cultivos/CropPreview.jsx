// src/features/cultivos/CropPreview.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function CropPreview({
  title,
  description,
  benefits,
  imageSrc,
  imageAlt,
  linkHref,
  buttonText = 'Conoce Más',
  reverse = false,
  backgroundColor = 'white',
  textColor = 'gray-900',
  buttonStyle = 'red'
}) {
  const sectionStyle = backgroundColor === 'red' ? { backgroundColor: 'var(--brand-corinto-light)' } : {}
  const titleColor = backgroundColor === 'red' ? 'text-white' : `text-${textColor}`
  const textColorClass = backgroundColor === 'red' ? 'text-white' : `text-${textColor}`
  const benefitTitleColor = backgroundColor === 'red' ? 'text-white' : 'text-gray-900'
  const benefitTextColor = backgroundColor === 'red' ? 'text-gray-200' : 'text-gray-700'

  return (
    <section className="w-full -mb-px" style={sectionStyle}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* Text Content */}
        <div className={`order-1 ${reverse ? 'md:order-2' : 'md:order-1'} flex items-start md:items-center`}>
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl mb-6 ${titleColor}`}>
              {title}
            </h2>

            <div className={`text-base md:text-lg ${textColorClass} leading-relaxed max-w-[620px] mb-8`}>
              <p className="mb-4">
                {description}
              </p>
              
              {benefits && (
                <div className="mb-4">
                  <h3 className={`font-semibold text-lg ${benefitTitleColor} mb-2`}>
                    Características principales:
                  </h3>
                  <ul className={`list-disc list-inside space-y-1 ${benefitTextColor}`}>
                    {benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 md:mt-8">
              <Link
                href={linkHref}
                className={`inline-block px-6 py-3 rounded-md shadow-sm transition ${
                  backgroundColor === 'red' 
                    ? 'bg-white text-red-600 hover:bg-gray-100' 
                    : ''
                }`}
                style={backgroundColor !== 'red' ? { backgroundColor: 'var(--brand-corinto-light)', color: 'var(--brand-contrast)' } : {}}
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
