"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import skillsData from '@data/skills.json';

Modal.setAppElement('body');

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
            <div className="cursor-pointer" onClick={openModal}>
                <img
                    src={card.thumb}
                    alt={card.title}
                    className=""
                />
                <h2>{card.title}</h2>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={card.title}
                className=""
                overlayClassName=""
            >
                <h2>{card.title}</h2>
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
            </Modal>
        </div>
    );
}

export default Card;
