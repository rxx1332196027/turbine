import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations } from './utils/translations'

function App() {
  const [language, setLanguage] = useState('zh')

  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App