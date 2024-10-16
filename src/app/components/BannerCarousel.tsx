"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../public/asset/img1.jpg";
import Img2 from "./../public/asset/img2.jpg";
import Img3 from "./../public/asset/img3.jpg";

const images = [
  {
    src: Img1,
    alt: "Professional Laundry Service",
    title: "Expert Care for Your Clothes",
    description:
      "State-of-the-art equipment and skilled professionals ensure your garments receive the best treatment.",
  },
  {
    src: Img2,
    alt: "Eco-Friendly Cleaning",
    title: "Green Cleaning Solutions",
    description:
      "We use environmentally friendly products and processes to keep your clothes and the planet clean.",
  },
  {
    src: Img3,
    alt: "Fast Turnaround",
    title: "Quick and Efficient Service",
    description:
      "Experience lightning-fast turnaround times without compromising on quality.",
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {images[currentIndex].title}
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-blue-800" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-blue-800" />
      </button>
    </div>
  );
}
