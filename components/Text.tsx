import {FC} from "react";
import {useLanguage} from "../providers/LanguageContext";

const Text: FC = ({children}) => {
    const {code} = useLanguage();

    return (
        <h1>{code}</h1>
    );
};

export default Text;
