import React, { useState } from 'react';
import { User, Mail, Lock, UserCheck, Eye, EyeOff } from 'lucide-react'; 
import signup from "../../assets/images/signup.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { apiSignup } from '../../services/auth';
import Swal from 'sweetalert2';

function Signup() {
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
    
        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            delete data.agreeToTerms; 

            if (data.password !== data.confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await apiSignup(data);
            Swal.fire({
                icon: 'success',
                title: 'Registered Successfully!',
                text: 'You have successfully created an account.',
                confirmButtonText: 'OK',
            }).then(() => {
                navigate("/signin"); 
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.response?.data?.message || 'Something went wrong!',
                confirmButtonText: 'Try Again',
            });
        } finally {
            setLoading(false);
        }
    };

    const InputField = ({ icon: Icon, type, name, placeholder }) => {
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);
        };

        const isPasswordField = type === "password";

        return (
            <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
                <input
                    type={isPasswordField && !showPassword ? "password" : "text"}
                    name={name}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                    required
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-60 p-6">
            <div>
                <Link to="/">
                    <FaArrowLeft className="font-bold text-4xl text-[#631D9B]" />
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden">
                <div className="w-1/2 p-8 hidden md:block">
                    <img
                        src={signup}
                        alt="Sign Up Illustration"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div className="md:w-1/2 w-full p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField
                            icon={User}
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                        />
                        <InputField
                            icon={User}
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                        />
                        <InputField
                            icon={UserCheck}
                            type="text"
                            name="userName"
                            placeholder="Enter Username"
                        />
                        <InputField
                            icon={Mail}
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                        <InputField
                            icon={Lock}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <InputField
                            icon={Lock}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                id="agreeToTerms"
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                required
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                                I agree to all terms
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`w-[10vw] bg-[#631D9B] text-white font-semibold py-2 px-4 rounded transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Already have an account?{' '}
                            <Link to="/signin" className="text-blue-600 hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
