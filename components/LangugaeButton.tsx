import {useLanguage} from "../providers/LanguageContext";

const LanguageButton = () => {
    const {code, changeLanguage} = useLanguage();

    const changeLanguageHandler = () => {
        if (code == 'en') {
            changeLanguage('ar', 'rtl');
        } else {
            changeLanguage('en', 'ltr');
        }
    };

    return (
        <button onClick={() => changeLanguageHandler()}>
            {code == 'en' ? 'Change to Arabic' : 'Change to English'}
        </button>
    );
};

export default LanguageButton;
