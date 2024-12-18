import { sessions } from '../sessions';

export const checkAcces = (userSession, accessRoles) => {
	const user = sessions.list[userSession];

	return !!user && accessRoles.includes(user.roleId);
};
