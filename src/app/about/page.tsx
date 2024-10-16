"use client"

import { motion } from "framer-motion"
import img5 from '../public/asset/img5.jpg'

export default function About() {
  return (
    <div className="">
      <div className="container mx-auto">
      <div
          className="relative w-full h-[650px]" // Set a fixed height for the background image
          style={{
            backgroundImage: `url(${img5.src})`, // Use img4.src for correct path resolution
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
          <h2 className="text-3xl font-bold  text-center">About Londery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Story</h3>
            <p className="text-blue-600 mb-4">
              Founded in 2010, Londery has been providing top-notch laundry and dry cleaning services to the Cleanville community for over a decade. What started as a small family-owned business has grown into a trusted name in fabric care, thanks to our commitment to quality and customer satisfaction.
            </p>
            <p className="text-blue-600">
              Our team of experienced professionals takes pride in treating each garment with the utmost care, ensuring that your clothes not only look clean but also maintain their quality over time.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h3>
            <p className="text-blue-600 mb-4">
              At Londery, our mission is to provide convenient, high-quality laundry and dry cleaning services that give our customers more time to focus on what matters most to them. We strive to:
            </p>
            <ul className="list-disc list-inside text-blue-600 space-y-2">
              <li>Deliver exceptional cleaning results every time</li>
              <li>Offer convenient and flexible services to fit our customers&apos; busy lives</li>
              <li>Utilize eco-friendly practices and products to minimize our environmental impact</li>
              <li>Continuously improve our processes and stay up-to-date with the latest industry technologies</li>
              <li>Maintain a team of skilled professionals who are passionate about fabric care</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}