'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-5xl font-medium mb-8">Contactez-nous</h1>
        <p className="text-gray-400 text-lg mb-16">
          Discutons de votre projet et comment nous pouvons vous aider.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: 'Email', value: 'contact@ad-glowhub.fr' },
            { title: 'Localisation', value: '29 rue Tronchet, 75008 Paris' },
          ].map((contact, idx) => (
            <div key={idx} className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">{contact.title}</p>
              <p className="text-xl font-semibold">{contact.value}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg border border-gray-700 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary outline-none transition text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary outline-none transition text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Sujet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary outline-none transition text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary outline-none transition text-white"
              required
            />
          </div>

          <button type="submit" className="w-full btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}
