/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
// import { google } from 'googleapis';
// import { sign } from '@tsndr/cloudflare-worker-jwt';

// export default {
// 	async fetch(request, env, ctx) {
// 		const APIkey = await env.GOOGLE_SERVICE_ACCOUNT_KEY;
// 		const serviceAccountKey = JSON.parse(APIkey);

// 		const privateKey = serviceAccountKey.private_key;
// 		const clientEmail = serviceAccountKey.client_email;
// 		const scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

// 		try {
// 			const jwt = await sign(
// 				{
// 					iss: clientEmail,
// 					scope: scopes.join(' '),
// 					aud: 'https://oauth2.googleapis.com/token',
// 					exp: Math.floor(Date.now() / 1000) + 3600,
// 					iat: Math.floor(Date.now() / 1000),
// 				},
// 				privateKey,
// 				{ algorithm: 'RS256' }
// 			);

// 			// ... остальной ваш код для обмена JWT на токен доступа и взаимодействия с Google Calendar API
// 			return new Response('JWT сгенерирован успешно!');
// 		} catch (error) {
// 			return new Response(`Произошла ошибка: ${error.message}`, { status: 500 });
// 		}
// 	},
// };

export default {
	async fetch(request, env, ctx) {
		const APIkey = await env.GOOGLE_SERVICE_ACCOUNT_KEY;
		return new Response('Hello CF Worker! ' + serviceAccountKey.client_email + ' private key: ' + serviceAccountKey.private_key);
	},
};
