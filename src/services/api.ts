import type { WizardPiUserActionPayload, WizardPiServerResponse } from '../types';

export const sendMessageToServer = async (
	payload: WizardPiUserActionPayload
): Promise<WizardPiServerResponse> => {
	console.log('Sending payload to server:', payload);

	const modifiedPayload = {
		...payload,
		session_data: Array.from(new Uint8Array(payload.session_data))
	};

	const response = await fetch('https://v3.spb.ru/wizard_pi_user_action', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(modifiedPayload),
	});

	console.log("Response status:", response.status);

	if (!response.ok) {
		throw new Error('Network Error');
	}

	const data = await response.json();
	console.log("Response data:", data);
	return data;
};

export const fetchAvatarUrl = async (userId: number): Promise<string | null> => {
	try {
		const response = await fetch(`https://v3.spb.ru/get_user_avatar?user_id=${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log("Fetching avatar URL:", `https://v3.spb.ru/get_user_avatar?user_id=${userId}`);
		console.log("Avatar fetch response status:", response.status);
		if (!response.ok) {
			throw new Error('Failed to fetch avatar');
		}

		const data = await response.json();

		return data.avatar_url || null;
	} catch (error) {
		console.error('Error fetching avatar:', error);
		return null;
	}
};