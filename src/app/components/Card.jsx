"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import skillsData from '@data/skills.json';
import { FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function Card({ card }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (event) => {
        event.stopPropagation();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <div className="rounded-lg shadow-2xl overflow-hidden transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                onClick={openModal}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${card.thumb}`}
                    alt={card.title}
                    width={96}
                    height={80}
                    // layout="responsive"
                    className="w-96 h-80 object-cover filter grayscale transition-all duration-300 ease-in-out transform hover:scale-110 hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>

                <h3 className="absolute inset-x-0 bottom-0 text-white text-2xl font-bold p-4 text-center">
                    {card.title}
                </h3>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={card.title}
                className="relative bg-white rounded-lg border-none shadow-2xl w-11/12 max-w-3xl mx-auto p-6 outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                ariaHideApp={false}
            >
                <h4 className="text-3xl font-bold mb-4 text-gray-800">{card.title}</h4>

                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${card.thumb}`}
                    alt={card.title}
                    width={20}
                    height={20}
                    layout="responsive"
                    className="mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg mx-auto rounded-md shadow-md"
                />

                <h5 className="text-xl font-semibold mb-2 text-gray-700">Description</h5>
                <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>

                <h5 className="text-xl font-semibold mb-2 text-gray-700">Compétences</h5>
                <div className="flex flex-row flex-wrap mb-4">
                    {skillsData
                        .filter(skill => card.skills.includes(skill.id))
                        .map(skill => (
                            <div key={skill.id} className="m-2 p-1 bg-gray-100 rounded-lg shadow-sm">
                                <Image
                                    src={skill.img}
                                    alt={skill.name}
                                    className="w-12 h-12"
                                    width={12}
                                    height={12}
                                    // layout="responsive"
                                />
                            </div>
                        ))}
                </div>

                <div className="absolute bottom-6 right-3 flex flex-col space-y-2 mr-3">
                    <a href={card.linkWebsite} className="flex justify-end items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors">
                        <FaExternalLinkAlt className="mr-2 text-lg" />
                        <span className="font-semibold text-lg">Site</span>
                    </a>
                    <a href={card.linkGithub} className="cursor-pointer flex justify-end items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors">
                        <FaGithub className="w-5 h-5 mr-1" />
                        <span className="font-semibold text-lg">Lien GitHub</span>
                    </a>
                </div>

                <FaTimes
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                />
            </Modal>


        </div>
    );
}

export default Card;
