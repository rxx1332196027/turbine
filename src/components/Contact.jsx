import React from 'react'
import { Mail, Phone, MapPin, User } from 'lucide-react'

const Contact = ({ t }) => {
  const contacts = [
    {
      name: 'Cyrus Han',
      title: 'Business Development Director',
      phone: '+86-15300640317',
      email: 'han@turbines.cc'
    },
    {
      name: 'Tomika Shi',
      title: 'Chief Executive Officer',
      phone: '+86-18721028815',
      email: 'tomika.shi@turbines.cc'
    },
    {
      name: 'Russell WANG',
      title: 'Business Development',
      phone: '+86-13817181217',
      email: 'russell.wang@turbines.cc'
    },
    {
      name: 'Lily Yin',
      title: 'Chief Engineering Officer',
      phone: '+86-18609863417',
      email: 'lily@turbines.cc'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.contact.general}</h3>
            <a href="mailto:info@turbines.cc" className="text-primary hover:underline text-lg">
              info@turbines.cc
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <User className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
                  <p className="text-gray-600 text-sm">{contact.title}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-3" />
                    <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-primary">
                      {contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-3" />
                    <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-primary text-sm">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
              alt="Gas Turbine Detail"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
              alt="Industrial Facility"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518273922470-a5d2f0b18b15?w=600&h=400&fit=crop"
              alt="Power Plant"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact