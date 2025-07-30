/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { google } from "googleapis";


export default {
	async fetch(request, env, ctx) {
		const APIkey = await env.GOOGLE_SERVICE_ACCOUNT_KEY;
		const serviceAccountKey = JSON.parse(APIkey);

		const jwtClient = new google.auth.JWT(
			serviceAccountKey.client_email,
			null, // private key is not used directly here
			serviceAccountKey.private_key,
			['https://www.googleapis.com/auth/calendar.readonly']
		);
		// const auth = new google.auth.GoogleAuth({
		// 	credentials: JSON.parse(APIkey),
		// 	scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
		// });
		return new Response('Hello CF Worker! ' + serviceAccountKey.client_email + ' private key: ' + serviceAccountKey.private_key);
	},
};
