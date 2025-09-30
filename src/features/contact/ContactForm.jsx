// src/features/contact/ContactForm.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
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
        to_email: 'rjmombiela@gmail.com',
        to_name: 'Jose Mombiela',
        subject: 'Mensaje de contacto de Hacienda Guadalupe'
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
                  Contáctanos
                </h2>
                
                <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
                  <p className="mb-6">
                    Establecer una conexión directa con nosotros es fundamental para conocer 
                    mejor nuestros productos y servicios. Estamos siempre disponibles para 
                    responder sus preguntas y conocer a nuestros clientes.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Envíanos un correo electrónico
                    </h3>
                    <a 
                      href="mailto:jmmombielah@gmail.com"
                      className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      jmmombielah@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Llámanos
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
                      Síguenos en redes sociales
                    </h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                      Nombre (requerido)
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
                        placeholder="Nombre"
                      />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico (requerido)
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
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
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
                      {isSubmitting ? 'Enviando...' : 'Enviar'}
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
