// src/features/contact/ContactForm.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_h8c7bfc' // Replace with your EmailJS service ID
      const templateId = 'template_ias8h4g' // Replace with your EmailJS template ID
      const publicKey = 'gyeVtwXWbjuQyo7Ef' // Replace with your EmailJS public key

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: formData.message,
        page_name: 'Hacienda Guadalupe',
        to_email: 'jmmombielah@gmail.com',
        to_name: 'Jose Mombiela',
        subject: t('emailSubject')
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* LEFT: Contact Information */}
            <div className="order-1 md:order-1">
              <div className="max-w-[500px]">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
                  {t('title')}
                </h2>
                
                <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
                  <p className="mb-6">{t('intro')}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {t('emailTitle')}
                    </h3>
                    <a 
                      href="mailto:jmmombielah@gmail.com"
                      className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      jmmombielah@gmail.com
                    </a>
                    <br />
                    <a 
                      href="mailto:mrmombiela@gmail.com"
                      className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      mrmombiela@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {t('phoneTitle')}
                    </h3>
                    <a 
                      href="tel:+50230059357"
                      className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      +502 3005-9357
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {t('whatsappTitle')}
                    </h3>
                    <div className="flex space-x-4">
                      {/* <a 
                        href="#" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a> */}
                      <a 
                        href="https://wa.me/50230059357" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="order-2 md:order-2">
              <div className="max-w-[500px]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('nameLabel')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder={t('firstNamePlaceholder')}
                      />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder={t('lastNamePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                      placeholder={t('messagePlaceholder')}
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      {t('successMessage')}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                      {t('errorMessage')}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 rounded-md font-medium transition-opacity disabled:opacity-50"
                      style={{ backgroundColor: 'var(--brand-corinto)', color: 'var(--brand-contrast)' }}
                    >
                      {isSubmitting ? t('sending') : t('send')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
