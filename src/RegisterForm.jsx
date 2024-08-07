import React, { useState } from 'react';
import sendRegistrationEmail from './emailService';

const RegisterForm = ({ toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Send registration email
        sendRegistrationEmail(email, password);

        // Reset form
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Registration successful. An email has been sent to the admin.');

        // Additional logic for registration (e.g., save user to database) can be added here
    };

    return (
        <div className="register-form">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        className="w-full p-2 border rounded" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        className="w-full p-2 border rounded" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <input 
                        type="password" 
                        className="w-full p-2 border rounded" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 transition duration-300"
                >
                    Register
                </button>
            </form>
            <p className="mt-4 text-gray-700">
                Already have an account?{' '}
                <button onClick={toggleForm} className="text-violet-600 hover:underline">
                    Login
                </button>
            </p>
        </div>
    );
};

export default RegisterForm;
