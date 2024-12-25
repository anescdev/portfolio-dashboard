type AuthStatus = "logged" | "not-logged";
export class AuthStatusEvent extends Event {
    readonly authAction: AuthStatus;
    constructor(authAction: AuthStatus) {
        super("auth");
        this.authAction = authAction;
    }
}