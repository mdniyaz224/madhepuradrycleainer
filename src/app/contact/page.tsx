"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import img6 from '../public/asset/img6.jpg'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="">
      <div className="container mx-auto">
      <div
          className="relative w-full h-[650px]" // Set a fixed height for the background image
          style={{
            backgroundImage: `url(${img6.src})`, // Use img4.src for correct path resolution
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
          <h2 className="text-3xl font-bold  text-center">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Get in Touch</h3>
            <p className="text-blue-600 mb-6">
              We&apos;re here to answer any questions you may have about our services. Feel free to reach out to us using the contact information below or by filling out the form.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <p className="text-blue-600">123 Laundry Lane, Cleanville, CV 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <p className="text-blue-600">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <p className="text-blue-600">info@londery.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-blue-600" />
                <p className="text-blue-600">Mon-Fri:  7am-8pm, Sat-Sun: 9am-6pm</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}