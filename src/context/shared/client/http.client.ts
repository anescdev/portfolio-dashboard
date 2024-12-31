import { AuthStatusEvent } from "@events/AuthStatusEvent";

export class HttpClient {
    static #httpClient: HttpClient | undefined;
    static #SESSION_STORAGE_JWT_KEY = "sess_jt";
    static #CSRF_COOKIE_NAME = "XSRF-TOKEN";
    static instance() {
        if (this.#httpClient === undefined) this.#httpClient = new HttpClient();
        return this.#httpClient;
    }

    isLogged() {
        const jwtToken = window.sessionStorage.getItem(HttpClient.#SESSION_STORAGE_JWT_KEY);
        return typeof jwtToken === "string" && jwtToken.length > 0;
    }

    #fetchCSRF(): string | undefined {
        return document.cookie.split(";").find(cookie => cookie.startsWith(HttpClient.#CSRF_COOKIE_NAME))?.split("=")[1];
    }

    async login(user: string, password: string): Promise<boolean> {
        const formData = new FormData();
        formData.append("username", user);
        formData.append("password", password);
        const loginRequest = await this.request("/authentication/login", {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!loginRequest.ok) return false;
        const token = (await loginRequest.json()).token;
        if (typeof token !== "string" || token.length < 1) return false;
        sessionStorage.setItem(HttpClient.#SESSION_STORAGE_JWT_KEY, token.trim());
        window.dispatchEvent(new AuthStatusEvent("logged"));
        return true;
    }

    async request(input: RequestInfo | URL, init?: RequestInit) {
        const requestData = {
            ...init
        }
        if (init?.method?.toUpperCase() !== "GET") {
            const jwtToken = sessionStorage.getItem(HttpClient.#SESSION_STORAGE_JWT_KEY);
            if (typeof jwtToken === "string") {
                requestData.headers = {
                    ...requestData.headers,
                    "Authorization": `Bearer ${jwtToken}`
                }
            }
            /* TODO: FETCHING CSRF TOKEN. NOT WORKING IN BACKEND THEN IS COMMENTED*/
            if (requestData.body instanceof FormData) {
                const csrfToken = this.#fetchCSRF();
                if (typeof csrfToken === "string" && csrfToken.length > 0) {
                    requestData.headers = {
                        ...requestData.headers,
                        ["X-".concat(HttpClient.#CSRF_COOKIE_NAME.toUpperCase())]: csrfToken
                    }
                }
            }
        }

        const req = await fetch(`${import.meta.env.VITE_API_BASE_URL}${input}`, requestData);
        if (req.status === 401) {
            sessionStorage.removeItem(HttpClient.#SESSION_STORAGE_JWT_KEY);
            window.dispatchEvent(new AuthStatusEvent("not-logged"));
        }
        return req;
    }
}