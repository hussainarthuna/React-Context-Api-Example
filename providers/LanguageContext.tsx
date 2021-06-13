import {createContext, FC, useContext, useEffect, useState} from "react";

export const LanguageContext = createContext({
    code: 'en',
    dir: 'ltr',
    changeLanguage: (code: string, dir: string) => {
    }
});

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageContextProvider: FC = ({children}) => {
    const [selectedLanguage, setSelectedLanguageState] = useState({code: 'en', dir: 'ltr'});

    useEffect(() => {
        // @ts-ignore
        setSelectedLanguageState(prevState => {
            const code = localStorage.getItem('code') ? localStorage.getItem('code') : 'en';
            const dir = localStorage.getItem('dir') ? localStorage.getItem('dir') : 'ltr';
            return {code, dir};
        });
    }, []);

    useEffect(() => {
        // use I18nManager to force direction and use asyncstorage to save the current direction to device.
        localStorage.setItem('code', selectedLanguage.code);
        localStorage.setItem('dir', selectedLanguage.dir);
    }, [selectedLanguage])

    return (
        <LanguageContext.Provider
            value={{
                code: selectedLanguage.code,
                dir: selectedLanguage.dir,
                changeLanguage: (code: string, dir: string) => {
                    setSelectedLanguageState(prevState => {
                        return {code, dir};
                    });
                }
            }}>
            {children}
        </LanguageContext.Provider>
    );
};
