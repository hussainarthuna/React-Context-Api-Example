import LanguageButton from "../components/LangugaeButton";
import {LanguageContextProvider} from "../providers/LanguageContext";
import LayoutContainer from "../components/LayoutContainer";
import Text from "../components/Text";

export default function Home() {

    return (
        <LanguageContextProvider>
            <LayoutContainer>
                <Text/>
                <LanguageButton/>
            </LayoutContainer>
        </LanguageContextProvider>
    )
}
