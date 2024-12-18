import { generateDate } from '../utils';

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registeredAt: generateDate(),
			roleId: 2,
		}),
	}).then((createdUser) => createdUser.json());
