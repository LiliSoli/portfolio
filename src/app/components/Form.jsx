"use client"

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
      const serviceID = "service_9cmcrrl";
      const templateID = "template_rgcl309";
      const userID = "A7d7vUdGsnDTrsmrN";

      const templateParams = {
        from_name: nom,
        to_name: prenom,
        email: email,
        message: message
      };
      

      console.log("Tentative d'envoi de l'email", templateParams); 
      await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log("après l'envoi "); 
      onSuccess();
      reset(); // Réinitialiser le formulaire après l'envoi
    } catch (err) {
      onError("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(sendContact)}>
      <div className="row">
        <div className="col">
          {/* Champ Nom */}
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            {...register("nom", { required: "Le nom est requis." })}
            placeholder="Nom"
            className="input-field"
          />
          {errors.nom && <p>{errors.nom.message}</p>}

          {/* Champ Prénom */}
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            {...register("prenom")}
            placeholder="Prénom"
            className="input-field"
          />

          {/* Champ Email */}
          <label htmlFor="email">Email</label>
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
            className="input-field"
          />
          {errors.email && <p>{errors.email.message}</p>}

          {/* Champ Message */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            {...register("message", { required: "Le message est requis." })}
            placeholder="Message"
            className="input-field"
          />
          {errors.message && <p>{errors.message.message}</p>}

          {/* Bouton d'envoi */}
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? "En cours..." : "Envoyer"}
          </button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

export default Form;
