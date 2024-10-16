"use client"

import { motion } from "framer-motion"
import { Waves, Shirt, Wind, Droplets } from "lucide-react"
import img4 from '../public/asset/img4.jpg'

export default function Services() {
  return (
    <div className="">
      <div className="container mx-auto">
        {/* Background Section */}
        <div
          className="relative w-full h-[650px]" // Set a fixed height for the background image
          style={{
            backgroundImage: `url(${img4.src})`, // Use img4.src for correct path resolution
            backgroundSize: 'cover', // Show the full image
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white'
          }}
        >
          <h2 className="text-3xl font-bold  text-center">Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 py-20 px-6">
          {[
            {
              icon: Waves,
              title: "Wash & Fold",
              description:
                "Our wash and fold service takes the hassle out of laundry day. We'll carefully wash, dry, and fold your clothes, returning them to you fresh and ready to wear.",
              price: "$2.50 per pound",
            },
            {
              icon: Shirt,
              title: "Dry Cleaning",
              description:
                "For your delicate and special care items, our dry cleaning service ensures they receive the attention they deserve. We use eco-friendly solvents and state-of-the-art equipment.",
              price: "Starting at $6 per item",
            },
            {
              icon: Wind,
              title: "Express Service",
              description:
                "Need your clothes in a hurry? Our express service guarantees a quick turnaround. Drop off in the morning and pick up your fresh, clean clothes by the evening.",
              price: "50% surcharge on regular prices",
            },
            {
              icon: Droplets,
              title: "Stain Removal",
              description:
                "Don't let stubborn stains ruin your favorite clothes. Our expert technicians use advanced techniques to tackle even the toughest stains without damaging the fabric.",
              price: "Starting at $5 per stain",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {/* Correctly rendering icons as components */}
                <service.icon className="w-8 h-8 mr-4 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-blue-600 mb-4">{service.description}</p>
              <p className="text-blue-800 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
