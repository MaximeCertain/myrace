import * as Yup from "yup";

const RaceValidationSchema = Yup.object().shape({
    validatedAdmin: Yup.boolean()
        .label('Validation de la course'),
    reasonAdmin: Yup.string()
        .label('Kilomètres'),
});

export default RaceValidationSchema