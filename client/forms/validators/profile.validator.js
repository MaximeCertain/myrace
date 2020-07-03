import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email("Adresse email invalide")
        .required("Adresse email requise"),
    lastname: Yup.string()
        .label('Nom'),
    firstname: Yup.string()
        .label('Nom'),
    age: Yup.number()
        .label('Nom'),
    description: Yup.string()
        .label('Nom')
});

export default ProfileSchema