import React from 'react';

const Footer = () => {
    return (
        <footer className="">
            <div className="text-sm">
                &copy; 2024 || Tous droits réservés.
            </div>
            <div className="">
                <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                >
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                        alt="LinkedIn Logo" 
                        className=""
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
                        className=""
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
