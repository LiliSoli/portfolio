"use client";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const Form = ({ onSuccess = () => null, onError = () => null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

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
      console.log("après l'envoi");
      onSuccess();
      reset();
    } catch (err) {
      onError("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <div className="relative max-h-300 mb-4 shadow-lg">
        <img
          src="/assets/images/laptop.webp"
          alt="Vue d'un ordinateur"
          className="rounded-t-lg" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-600 bg-opacity-50 rounded-t-lg">
          <h2 className="text-white text-center text-3xl font-bold p-4">Restons en contact!</h2>
          <p className="text-white text-center pb-4 mx-5">J'ai hâte de discuter avec vous et de voir comment je peux contribuer à votre projet.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(sendContact)} className="space-y-4 px-14 py-6">
        <div>
          <input
            id="nom"
            name="nom"
            type="text"
            {...register("nom", { required: "Le nom est requis." })}
            placeholder="Nom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
        </div>

        <div>
          <input
            id="prenom"
            name="prenom"
            type="text"
            {...register("prenom")}
            placeholder="Prénom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            {...register("message", { required: "Le message est requis." })}
            placeholder="Message"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 mt-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-[#e28570] hover:text-white transition duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "En cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

export default Form;
