import React from 'react';

const Header = () => {
    return (
        <header className="header bg-violet-600 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">NotesApp</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#features" className="hover:text-yellow-500">Features</a></li>
                        <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
