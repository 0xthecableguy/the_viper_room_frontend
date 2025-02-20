import type { TheViperRoomUserActionPayload, TheViperRoomServerResponse } from '../types';

export const sendMessageToServer = async (
	payload: TheViperRoomUserActionPayload
): Promise<TheViperRoomServerResponse> => {
	console.log('Sending request payload to server:', payload);

	const modifiedPayload = {
		...payload,
		session_data: Array.from(new Uint8Array(payload.session_data))
	};

	const response = await fetch('https://api.blacksmith-lab.com/the_viper_room_user_request', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(modifiedPayload),
	});

	console.log("Server response status:", response.status);

	if (!response.ok) {
		throw new Error('Network Error');
	}

	const data = await response.json();
	console.log("Server response data:", data);
	return data;
};

export const fetchAvatarUrl = async (userId: number): Promise<string | null> => {
	try {
		const response = await fetch(`https://api.blacksmith-lab.com/the_viper_room_avatar_request?user_id=${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log("Fetching avatar URL:", `https://api.blacksmith-lab.com/the_viper_room_avatar_request?user_id=${userId}`);
		console.log("Avatar fetch server response status:", response.status);
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