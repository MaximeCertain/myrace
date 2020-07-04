import * as Yup from "yup";

const MessageSchema = Yup.object().shape({
    description: Yup.string()
        .label('description')
        .required("Contenu du message obligatoire"),
});

export default MessageSchema