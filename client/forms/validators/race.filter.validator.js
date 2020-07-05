import * as Yup from "yup";

const RaceFilterSchema = Yup.object().shape({
    name: Yup.string()
        .label('Nom'),
    kilometers: Yup.number()
        .label('Kilomètres'),
    elevation: Yup.number()
        .label('Denivelé positif'),
    max_participants: Yup.number()
        .label('Nombre maximum de participants'),
});

export default RaceFilterSchema