import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white py-4"
            style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/bg-black500.webp)` }}>
            <div className="flex flex-col items-center text-sm">
                <div>&copy; 2024 || Tous droits réservés.</div>
                <div className="flex space-x-4 mt-2">
                    <a
                        href="https://www.linkedin.com/in/aur%C3%A9lie-solier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="LinkedIn Logo"
                            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                            width={20}
                            height={20}
                        />
                    </a>
                    <a
                        href="https://github.com/LiliSoli"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                            alt="GitHub Logo"
                            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                            width={20}
                            height={20}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
