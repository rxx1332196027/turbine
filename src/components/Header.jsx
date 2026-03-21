import React from 'react'
import { Globe, Settings } from 'lucide-react'

const Header = ({ language, setLanguage, t }) => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Settings className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {language === 'zh' ? '上海特宾斯燃气轮机技术有限公司' : 'Shanghai Turbine Service Co., Ltd.'}
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">{t.nav.home}</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Globe className="h-5 w-5 text-gray-600" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border-none text-gray-700 focus:outline-none"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header