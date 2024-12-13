import React, { useState } from 'react';
import { User, Lock, Facebook, Mail } from 'lucide-react';
import signin from "../../assets/images/signin.jpg"
import { IoLogoFacebook } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
function Signin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const InputField = ({ icon: Icon, type, name, placeholder, value }) => (
    <div className="relative mb-4">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg  focus:border-transparent"
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-60 p-6">
      <div>  <Link to="/"><FaArrowLeft className="font-bold text-4xl text-[#631D9B]"/></Link></div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              icon={User}
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
            />

            <InputField
              icon={Lock}
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-[10vw] bg-[#631D9B] text-white font-semibold py-3 px-4 rounded transition duration-300"
            >
              Login
            </button>

            {/* Social Login */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">Or, Login with</p>
              <div className="flex justify-center space-x-4">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <IoLogoFacebook className="h-6 w-6 text-blue-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FcGoogle className="h-6 w-6 text-red-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaSquareXTwitter className="h-6 w-6 "/>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Create One
              </Link>
            </p>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:block md:w-1/2 p-8 bg-gray-50">
          <img
            src={signin}
            alt="Sign In Illustration"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;