import styles from "./TranslationProvider.module.css";

import { ReactNode, useEffect, useState } from "react";
import { TranslationContext } from "./TranslationContext";
import { mapTranslationJson, TranslationContextKeys } from "./TranslationContextKeys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TranslationProvider(
    {
        children
    }: {
        children: ReactNode[] | ReactNode
    }
) {
    const [translations, setTranslations] = useState<TranslationContextKeys | null | undefined>(undefined)
    useEffect(() => {
        (async () => {
            const language = window.navigator.language;
            const translationsRequest = await fetch(`${import.meta.env.BASE_URL}locales/${language}.json`);
            let translations;
            try {
                translations = await translationsRequest.json();
                setTranslations(mapTranslationJson(translations as never));
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                const retryTranslationRequest = await fetch(`${import.meta.env.BASE_URL}locales/${language.substring(0, language.indexOf("-"))}.json`);
                try {
                    translations = await retryTranslationRequest.json();
                    setTranslations(mapTranslationJson(translations as never));
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (error) {
                    setTranslations(null);
                }
            }

        })();
    }, [])
    return (
        <TranslationContext.Provider value={translations ?? undefined}>
            {translations === undefined ? <div className={`box ${styles.loading}`}>
                <FontAwesomeIcon icon="circle-notch" spin size="4x" />
                <h1>Cargando traducciones</h1>
            </div> : children}
        </TranslationContext.Provider>
    )
}