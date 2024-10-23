"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import skillsData from '@data/skills.json';
import { FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

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
            <div className="rounded-lg shadow-2xl overflow-hidden transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer"
                onClick={openModal}>
                <img
                    src={card.thumb}
                    alt={card.title}
                    className="w-96 h-80 object-cover"
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
                className="relative bg-white rounded-lg border-none shadow-2xl w-2/3 max-w-4xl mx-auto p-6"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                ariaHideApp={false}
            >
                <h4 className="text-2xl font-bold mb-4">{card.title}</h4>

                <img src={card.thumb} alt={card.title} className="mb-4 w-full rounded-md" />

                <h5 className="text-xl font-semibold mb-2">Description</h5>
                <p className="text-gray-700 mb-4">{card.description}</p>

                <h5 className="text-xl font-semibold mb-2">Compétences</h5>
                <div className="flex flex-row">
                    {skillsData
                        .filter(skill => card.skills.includes(skill.id))
                        .map(skill => (
                            <div key={skill.id} className="m-2">
                                <img src={skill.img} alt={skill.name} className="w-12 h-12" />
                            </div>
                        ))}
                </div>

                <div className="absolute bottom-6 right-3 flex flex-col mr-3">
                    <a href={card.linkWebsite} className="flex justify-end items-center gap-2 text-gray-600 hover:text-gray-950">
                        <FaExternalLinkAlt className="mr-2" />
                        <span className="font-semibold text-lg">Site</span>
                    </a>
                    <a href={card.linkGitHub} className="cursor-pointer flex justify-end items-center gap-2 text-gray-600 hover:text-gray-900">
                        <FaGithub className="w-5 h-5 mr-1" />
                        <span className="font-semibold text-lg">Lien GitHub</span>
                    </a>
                </div>

                <FaTimes
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 hover:text-gray-950"
                />
            </Modal>


            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={card.title}
                className=""
                overlayClassName=""
                ariaHideApp={false}
            >
                <h4 className="text-2xl font-bold p-4">{card.title}</h4>
                <img
                    src={card.thumb}
                    alt={card.title}
                    className=""
                />
                <p>{card.description}</p>

                <h3>Skills</h3>
                {skillsData
                    .filter(skill => card.skills.includes(skill.id))
                    .map(skill => (
                        <div key={skill.id} className="">
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className=""
                            />
                        </div>
                    ))}

                <button onClick={closeModal} className="">
                    Fermer
                </button>
            </Modal> */}
        </div>
    );
}

export default Card;
