import { createContext } from "react";
import { TranslationContextKeys } from "./TranslationContextKeys";

export const TranslationContext = createContext<TranslationContextKeys | undefined>(undefined);