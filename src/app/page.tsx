"use client"

import { motion } from "framer-motion"
import { Waves, Shirt, Wind, Droplets, Clock, Sparkles, Recycle, Award, Users, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BannerCarousel from "./components/BannerCarousel"
import img from './public/asset/img1.jpg'

export default function Home() {
  return (
    <>
      <BannerCarousel />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Wash & Fold", description: "Expert cleaning and precise folding for your everyday laundry needs." },
              { icon: Shirt, title: "Dry Cleaning", description: "Specialized care for your delicate and formal wear using state-of-the-art techniques." },
              { icon: Wind, title: "Express Service", description: "Quick turnaround for your urgent laundry requirements, without compromising quality." },
              { icon: Droplets, title: "Stain Removal", description: "Advanced stain treatment to tackle even the most stubborn marks on your favorite garments." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
                <p className="text-blue-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Why Choose Londery?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Time-Saving", description: "Reclaim your precious time while we handle your laundry with utmost care and efficiency." },
              { icon: Sparkles, title: "Superior Quality", description: "Experience garment care at its finest with our expert cleaning techniques and attention to detail." },
              { icon: Recycle, title: "Eco-Friendly Practices", description: "We prioritize the environment by using sustainable, biodegradable cleaning products and energy-efficient processes." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
                <p className="text-blue-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-800">The Londery Difference</h2>
              <p className="text-xl mb-6 text-blue-600">At Londery, we combine cutting-edge technology with traditional craftsmanship to deliver unparalleled laundry and dry cleaning services.</p>
              <ul className="space-y-4">
                {[
                  { icon: Award, text: "Award-winning cleaning techniques" },
                  { icon: Users, text: "Highly trained and experienced staff" },
                  { icon: Truck, text: "Convenient pick-up and delivery options" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-700">
                    <item.icon className="w-6 h-6 mr-2 text-blue-600" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <Image
                src={img}
                alt="Londery Difference"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Experience the Londery Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our growing family of satisfied customers and discover why we&apos;re the most trusted name in laundry and dry cleaning services.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block"
            >
              Schedule Your First Pickup
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}