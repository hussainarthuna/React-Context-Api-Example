import {FC} from "react";
import {useLanguage} from "../providers/LanguageContext";

const LayoutContainer: FC = ({children}) => {

    const {dir} = useLanguage();

    return (
        <div dir={dir}>
            {children}
        </div>
    );
};
export default LayoutContainer;
