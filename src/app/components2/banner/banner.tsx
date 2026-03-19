import React from 'react'
import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react';


export default function banner() {
const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      desc: "On orders over 500 EGP"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Payment",
      desc: "100% secure transactions"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Easy Returns",
      desc: "14-day return policy"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      desc: "Dedicated support team"
    }
  ];

return <>
        <div className="w-full bg-white border-y border-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 group shadow p-4 rounded-xl transition-colors hover:bg-slate-50"
          >
    
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            
        
            <div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}
