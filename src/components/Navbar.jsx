import React from 'react';
import { CheckSquare, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-8 h-8 text-[#F19A00]" />
            <span className="text-xl font-bold text-black">ToDone</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-black hover:text-yellow-500 transition-colors">Features</a>
            <a href="#pricing" className="text-black hover:text-yellow-500 transition-colors">Pricing</a>
            <a href="#about" className="text-black hover:text-yellow-500 transition-colors">About</a>
            <Link to="/signup">
            <button className="bg-[#EEAD45] text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
              Get Started
            </button>
           </Link>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar