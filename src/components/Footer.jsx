import React from 'react'
import { Settings } from 'lucide-react'

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Settings className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-bold">上海特宾斯燃气轮机技术有限公司</h3>
              <p className="text-sm text-gray-400">Shanghai Turbine Service Co., Ltd.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              Copyright © {(new Date()).getFullYear()} Shanghai Turbine Service Co., Ltd.
            </p>
            <p className="text-sm text-gray-400">{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer