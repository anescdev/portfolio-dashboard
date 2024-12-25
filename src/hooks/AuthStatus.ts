import { HttpClient } from "@context/shared/client/http.client";
import { useSyncExternalStore } from "react";

function suscribe(onStoreChange: () => void) {
    window.addEventListener("auth", onStoreChange);
    return () => {
        window.removeEventListener("auth", onStoreChange);
    }
}

export function useAuthStatus() {
    const loggedData = useSyncExternalStore(suscribe, HttpClient.instance().isLogged);
    return loggedData;
}