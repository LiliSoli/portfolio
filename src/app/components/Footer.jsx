import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="flex flex-col items-center text-sm">
                <div>&copy; 2024 || Tous droits réservés.</div>
                <div className="flex space-x-4 mt-2">
                    <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                            alt="LinkedIn Logo" 
                            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                        />
                    </a>
                    <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733553.png" 
                            alt="GitHub Logo" 
                            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
