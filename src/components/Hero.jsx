import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = ({ t }) => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">{t.hero.title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.hero.subtitle}</p>
            <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors">
              <span>{t.hero.cta}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
              alt="Gas Turbine"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
              alt="Power Plant"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero