import React, { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/userSlice.js';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector(state => state.user.loading);
    const backendError = useSelector(state => state.user.error);

    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        setError(null);

        if (!formData.name || !formData.email || !formData.password || !formData.gender) {
            return setError("All fields are required!");
        }

        try {
            const result = await dispatch(registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
                gender: formData.gender,
                role: "Patient"           // default role for signup
            })).unwrap();

            navigate("/home");

        } catch (err) {
            setError(err || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-2">
            <div className="w-full max-w-[500px]">

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white text-center">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                            <User className="w-10 h-10 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Patient Registration</h2>
                        <p className="text-blue-100">Join our healthcare portal</p>
                    </div>

                    <div className="px-8 py-4">

                        {/* Full Name */}
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <div className="relative mb-4">
                            <User className="absolute left-3 top-3 text-blue-400" />
                            <input
                                type="text"
                                name="fullname"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <div className="relative mb-4">
                            <Mail className="absolute left-3 top-3 text-blue-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Password */}
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password *
                        </label>
                        <div className="relative mb-4">
                            <Lock className="absolute left-3 top-3 text-blue-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500"
                                placeholder="Create a strong password"
                            />
                        </div>

                        {/* Phone */}
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <div className="relative mb-4">
                            <Phone className="absolute left-3 top-3 text-blue-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500"
                                placeholder="99999 00000"
                            />
                        </div>

                        {/* Gender */}
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Gender *
                        </label>
                        <div className="flex gap-6 mb-4">
                            {["male", "female", "other"].map((g) => (
                                <label key={g} className="flex items-center cursor-pointer gap-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={g}
                                        checked={formData.gender === g}
                                        onChange={handleInputChange}
                                    />
                                    <span className="text-gray-700">{g.toUpperCase()}</span>
                                </label>
                            ))}
                        </div>

                        {/* ERROR */}
                        {(error || backendError) && (
                            <p className="text-red-500 text-center font-semibold mb-2">
                                {error || backendError}
                            </p>
                        )}

                        {/* Button */}
                        <button
                            onClick={handleSignup}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                        >
                            {loading ? "Processing..." : "Create Account"}
                        </button>

                        {/* Login Link */}
                        <div className="text-center mt-6">
                            <Link
                                to="/login"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Already have an account? Login →
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
