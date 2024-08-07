import React, { useState } from 'react';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import ModalComponent from './ModalComponent';

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(true); // State to toggle between Register and Login

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className="landing-page">
            <Header />
            <main className="main bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Organize Your Life with NotesApp</h2>
                    <p className="text-lg mb-8">Keep your notes organized, secure, and accessible from anywhere.</p>
                    <button
                        onClick={openModal}
                        className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                    >
                        Get Started
                    </button>
                </div>
            </main>
            <Features />
            <Footer />
            <ModalComponent 
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                isRegister={isRegister}
                toggleForm={toggleForm}
            />
        </div>
    );
}

export default LandingPage;
