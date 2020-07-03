import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email("Adresse email invalide")
        .required("Adresse email requise"),
    password: Yup.string()
        .label('Mot de Passe')
        .min(2, "Le Mot de Passe  doit avoir deux caractères au minimum")
        .required("Mot de Passe requis"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
});

export default RegisterSchema