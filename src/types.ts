export enum ActionStep {
	MINI_APP_INITIALIZED = "MINI_APP_INITIALIZED",
	LOGIN_START = "LOGIN_START",
	SIGN_OUT = "SIGN_OUT",
}

export interface WizardPiUserActionPayload {
	user_id: number;
	username: string;
	action?: string;
	action_step?: ActionStep;
	session_data: ArrayBuffer;
}

export enum AuthStage {
	// PhoneNumberRequest = 'PhoneNumberRequest',
	// PasscodeRequest = 'PasscodeRequest',
	TwoFAPassRequest = 'TwoFAPassRequest',
	AuthSuccess = 'AuthSuccess',
	AuthError = 'AuthError',
	SignedOut = 'SignedOut',
	MiniAppInitConfirmed = 'MiniAppInitConfirmed',
}

export interface WizardPiServerResponse {
	action_buttons: string[];
	message: string;
	buttons: string[];
	can_input: boolean;
	avatar_url?: string;
	session_data?: ArrayBuffer;
	stage?: AuthStage
}

export interface TelegramUser {
	id: number;
	username: string;
	first_name: string;
	last_name: string;
}

export interface TelegramWebApp {
	initDataUnsafe: {
		user: TelegramUser;
	};
	onEvent: (event: string, callback: (...args: unknown[]) => void) => void;
}

export type Message = {
	type: "user" | "server";
	text: string;
	avatarUrl?: string | null;
};
