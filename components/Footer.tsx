import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 mt-auto rounded-t-lg shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-sm mb-2 md:mb-0">
                    &copy; {currentYear} Mi-CET App. All rights reserved.
                </p>

                <p className="text-sm">
                    Developed by <span className="font-semibold text-blue-400">today.development</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;