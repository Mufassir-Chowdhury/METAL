/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface Platform {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		}
	}
	// interface Session {}

	// interface Stuff {}
}
export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
}