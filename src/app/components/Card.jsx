import { useState } from 'react';
import Modal from 'react-modal';
import skillsData from '@data/skills.json';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function Card({ card }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (event) => {
        event.stopPropagation();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div>
            <div
                className="rounded-lg shadow-2xl overflow-hidden transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                onClick={openModal}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${card.thumb}`}
                    alt={card.title}
                    width={96}
                    height={80}
                    className="w-96 h-80 object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:grayscale-0 md:grayscale"
                />
                <div
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3
                    className="absolute inset-x-0 bottom-0 text-white text-2xl font-bold p-4 text-center">
                    {card.title}
                </h3>

            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={card.title}
                className="relative bg-white rounded-lg border-none shadow-2xl max-h-screen overflow-y-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-screen-2xl my-auto p-6 outline-none"
                overlayClassName="fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-center items-center overflow-hidden z-50"
                ariaHideApp={false}
            >
                <h4 className="text-3xl font-bold mb-4 text-gray-800">
                    {card.title}
                </h4>

                <div className="flex flex-col gap-2 sm:gap-6 lg:gap-10 lg:flex-row">
                    <div className="overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}${card.screenshots[currentImageIndex]}`}
                            alt={card.title}
                            width={20}
                            height={20}
                            className="mb-4 w-fit object-cover max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-4xl mx-auto rounded-md shadow-md"
                        />

                        <div className="flex justify-center mt-4 space-x-2 pb-4 px-4">
                            {card.screenshots.map((screenshot, index) => (
                                <Image
                                    key={index}
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${screenshot}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className={`w-20 sm:w-22 md:w-28 lg:w-36 xl:w-40 object-cover cursor-pointer rounded-md transition-transform duration-200 ${index === currentImageIndex ? 'border-2 border-green-400 scale-105' : 'border-2 border-gray-50'}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <h5 className="text-xl font-semibold mb-2 text-gray-700">Description</h5>
                        <p className="text-gray-600 mb-2 lg:mb-10 leading-relaxed">{card.description}</p>

                        <h5 className="text-xl font-semibold mb-2 text-gray-700">Compétences</h5>
                        <div className="flex flex-row flex-wrap mb-4">
                            {skillsData
                                .filter(skill => card.skills.includes(skill.id))
                                .map(skill => (
                                    <div key={skill.id} className="m-2 p-1 bg-gray-100 rounded-lg shadow-sm">
                                        <Image
                                            src={skill.img}
                                            alt={skill.name}
                                            className="w-12 h-12 object-contain"
                                            width={12}
                                            height={12}
                                        />
                                    </div>
                                ))}
                        </div>

                        <div className="flex flex-col lg:space-y-2 mt-4 lg:mt-0 lg:absolute lg:bottom-6 lg:right-3 lg:mr-3">
                            {card.linkWebsite && (
                                <a
                                    href={card.linkWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
                                >
                                    <FaExternalLinkAlt className="mr-2 text-lg" />
                                    <span className="font-semibold text-lg">Site</span>
                                </a>
                            )}
                            {card.linkGithub && (
                                <a
                                    href={card.linkGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
                                >
                                    <FaGithub className="w-5 h-5 mr-1" />
                                    <span className="font-semibold text-lg">Lien GitHub</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <FaTimes
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 hover:text-gray-950 transition-colors"
                />
            </Modal>
        </div>
    );
}

export default Card;
