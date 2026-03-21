import React from 'react'
import { Factory, Wrench, Cog, Building } from 'lucide-react'

const About = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.about.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
            alt="Industrial Manufacturing"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t.about.engagement}</h3>
            <p className="text-gray-600 mb-6">{t.about.engagementDesc}</p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop"
                alt="Raw Materials"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7f09?w=300&h=200&fit=crop"
                alt="Precision Parts"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About