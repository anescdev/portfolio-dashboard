import { Outlet } from "react-router-dom";
import NavigationMenu from "@components/NavigationMenu";
import UserAuth from "@components/UserAuth";

import "./root.css";
import Translatable from "@components/Translatable";
import TranslationProvider from "./utils/TranslationProvider";

export default function Root() {
    return (
        <TranslationProvider>
            <header>
                <NavigationMenu></NavigationMenu>
                <h1><Translatable translateKey="titles/header" /></h1>
                <UserAuth />
            </header>
            <main>
                <Outlet />
            </main>
        </TranslationProvider>
    );
}