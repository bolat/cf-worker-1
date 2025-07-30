/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const APIkey = await env.GOOGLE_SERVICE_ACCOUNT_KEY;
		const serviceAccountKey = JSON.parse(APIkey);

		return new Response('Hello CF Worker! ' + serviceAccountKey.client_email + ' private key: ' + serviceAccountKey.private_key);
	},
};
