import React from 'react';
import { FaPenFancy, FaStickyNote, FaUserShield } from 'react-icons/fa';

const Features = () => {
    return (
        <section id="features" className="features py-16 bg-white">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-12">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="feature-item">
                        <FaPenFancy className="text-6xl text-violet-600 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Easy Note-Taking</h4>
                        <p>Quickly jot down your thoughts and ideas with our user-friendly interface.</p>
                    </div>
                    <div className="feature-item">
                        <FaStickyNote className="text-6xl text-violet-600 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Organize Efficiently</h4>
                        <p>Organize your notes with tags, categories, and search functionality.</p>
                    </div>
                    <div className="feature-item">
                        <FaUserShield className="text-6xl text-violet-600 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Secure & Private</h4>
                        <p>Your notes are secure with our top-notch encryption and privacy features.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
