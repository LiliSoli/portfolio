"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import Image from "next/image";

const Form = ({ onSuccess = () => null, onError = () => null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const sendContact = async (data) => {
    const { nom, prenom, email, message } = data;

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      const templateParams = {
        from_name: prenom + " " + nom,
        to_name: "",
        email: email,
        message: message
      };

      console.log("Tentative d'envoi de l'email", templateParams);
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setConfirmationMessage("Votre message a bien été envoyé !");
      onSuccess();
      reset();
    } catch (err) {
      setConfirmationMessage("Erreur lors de l'envoi du message.");
      onError("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="max-w-[80%] md:max-w-2xl mx-auto bg-gray-200 rounded-lg shadow-md">
      <div className="relative mb-4 shadow-lg">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop.webp`}
          alt="Vue d'un ordinateur"
          className="rounded-t-lg border-2 border-transparent"
          loading="lazy"
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-600 bg-opacity-50 rounded-t-lg">
          <h2
            className="text-white text-center text-xl sm:text-3xl font-bold p-4">Restons en contact!
          </h2>
          <p
            className="text-white text-center pb-4 mx-5">
            J&#39;ai hâte de discuter avec vous et de voir comment je peux contribuer à votre projet.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(sendContact)} className="space-y-4 px-14 py-6">
        <div>
        <label htmlFor="nom" className="sr-only">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            {...register("nom", { required: "Le nom est requis." })}
            placeholder="Nom"
            className="text-gray-700 mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
        </div>

        <div>
        <label htmlFor="prenom" className="sr-only">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            {...register("prenom")}
            placeholder="Prénom"
            className="text-gray-700 mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
        <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", {
              required: "L'adresse email est requise.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide."
              }
            })}
            placeholder="Email"
            className="text-gray-700 mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
        <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            {...register("message", { required: "Le message est requis." })}
            placeholder="Message"
            className="text-gray-700 mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 mt-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gradient-to-r from-green-400 to-teal-400 hover:text-white transition duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "En cours..." : "Envoyer"}
        </button>
      </form>

      {confirmationMessage && (
        <p className="text-center text-teal-400 font-semibold py-4">{confirmationMessage}</p>
      )}
    </div>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

export default Form;
