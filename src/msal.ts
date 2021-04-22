import * as msal from '@azure/msal-browser';
const msalConfig = {
	auth: {
		clientId: '33200cc1-7d88-47e2-801d-6e14e5e3aa34',
	},
};
export const msalInstance = new msal.PublicClientApplication(msalConfig);
