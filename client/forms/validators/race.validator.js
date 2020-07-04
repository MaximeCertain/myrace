import * as Yup from "yup";

const RaceSchema = Yup.object().shape({
    name: Yup.string()
        .label('Nom')
        .required("Nom obligatoire"),
    start: Yup.string()
        .label('Adresse de départ')
        .required("Adresse de départ obligatoire"),
    finish: Yup.string()
        .label('Adresse d\'arrivée')
        .required("Adresse d'arrivée obligatoire"),
    kilometers: Yup.string()
        .label('Kilomètres')
        .required("Nombre de kilomètres obligatoire"),
    elevation: Yup.string()
        .label('Denivelé positif')
        .required("Denivelé obligatoire"),
    max_participants: Yup.number()
        .label('Nombre maximum de participants')
        .required("Nombre max de participants obligatoire"),
    date: Yup.date()
        .label('date de la course')
       // .required("Date obligatoire"),

});

export default RaceSchema