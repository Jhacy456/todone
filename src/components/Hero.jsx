import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import image from "../assets/images/image.png"
import hero from "../assets/images/hero2.png"
import { Link } from 'react-router-dom';
export function Hero() {
  return (
    <div className="pt-16 bg-[#631D9B]">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Organize Your Tasks
              <span className="text-[#F19A00] block mt-2">Like Never Before</span>
            </h1>
            <p className="text-xl text-[#F19A00] mb-8">
              Stay productive and focused with the most intuitive todo app on the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              </Link>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#F19A00]" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#F19A00]" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square">
              <img
                src={image}
                alt="Task Management Animation"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -left-6  p-4">
              <img
                src={hero}
                alt="Checkmark Animation"
                className="w-[20vw] h-[40vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero