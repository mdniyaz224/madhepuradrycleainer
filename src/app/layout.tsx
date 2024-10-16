import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Londery - Your Trusted Laundry Service",
  description: "Professional laundry and dry cleaning services in Cleanville",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100`}>
        <header className="bg-white shadow-md">
          <div className="container mx-auto">
            <Navbar />
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-blue-800 text-white py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Londery</h2>
              <p>Your trusted laundry service</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p>123 Laundry Lane, Cleanville</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@londery.com</p>
            </div>
          
          </div>
          <div className="container mx-auto mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Londery. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}