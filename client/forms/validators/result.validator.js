import * as Yup from "yup";

const ResultValidator = Yup.object().shape({
    bibNumber: Yup.number()
        .label('dossard')
        .required("Dossard obligatoire"),
    time_achieved: Yup.number()
        .label('Temps réalisé')
        .required("Temps réalisé obligatoire"),
});

export default ResultValidator