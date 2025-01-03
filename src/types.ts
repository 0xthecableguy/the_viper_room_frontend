export enum ActionStep {
	MINI_APP_INITIALIZED = "MINI_APP_INITIALIZED",
	LOGIN_START = "LOGIN_START",
}

export interface WizardPiUserActionPayload {
	user_id: number;
	username: string;
	action?: string;
	action_step?: ActionStep;
	session_data: ArrayBuffer;
}

export enum AuthStage {
	PhoneNumberRequest = 'PhoneNumberRequest',
	PasscodeRequest = 'PasscodeRequest',
	TwoFAPassRequest = 'TwoFAPassRequest',
	AuthSuccess = 'AuthSuccess',
	AuthError = 'AuthError',
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