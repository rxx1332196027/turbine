import React from 'react'
import { Package, Wrench, Building, RotateCcw } from 'lucide-react'

const Services = ({ t }) => {
  const services = [
    {
      icon: Package,
      title: t.services.materialsDesc,
      description: t.services.materialsDesc,
      color: 'bg-blue-500'
    },
    {
      icon: Wrench,
      title: t.services.perfManufacturing,
      description: t.services.perfManufacturingDesc,
      color: 'bg-orange-500'
    },
    {
      icon: Building,
      title: t.services.mwInstallation,
      description: t.services.mwInstallationDesc,
      color: 'bg-green-500'
    },
    {
      icon: RotateCcw,
      title: t.services.erservice,
      description: t.services.erserviceDesc,
      color: 'bg-blue-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.services.title}</h2>
          <p className="text-xl text-gray-600">{t.services.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581328355806-b0bdc075d0?w=600&h=300&fit=crop"
              alt="Gas Turbine Engine"
              className="rounded-lg shadow-xl opacity-20"
            />
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            {services.map((service, index) => {
              const positions = [
                'justify-self-end self-start',
                'justify-self-start self-start',
                'justify-self-start self-end',
                'justify-self-end self-end'
              ]

              return (
                <div key={index} className={`${positions[index]} max-w-sm`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full mr-4 ${service.color}`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`${service.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <img
            src="https://images.unsplash.com/photo-1550817294-1c4a4e1fcd1d?w=400&h=300&fit=crop"
            alt="Manufacturing Process"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1581328355806-b0bdc075d0?w=400&h=300&fit=crop"
            alt="Gas Turbine Assembly"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
            alt="Power Generation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Services