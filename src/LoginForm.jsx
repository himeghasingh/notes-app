import React from 'react';

const LoginForm = ({ toggleForm }) => {
    return (
        <div className="login-form">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full p-2 border rounded" />
                </div>
                <button className="bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 transition duration-300">
                    Login
                </button>
            </form>
            <p className="mt-4 text-gray-700">
                Don't have an account?{' '}
                <button onClick={toggleForm} className="text-violet-600 hover:underline">
                    Register
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
