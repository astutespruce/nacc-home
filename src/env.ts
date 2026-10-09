import { defineEnvVars } from '@sveltejs/kit/env'

export const variables = defineEnvVars({
	SENTRY_DSN: { public: true, static: true },
	GOOGLE_ANALYTICS_ID: { public: true, static: true },
	DEPLOY_ENV: { public: true, static: true },
	PRIORITIZATION_TOOL_URL: { public: true, static: true },
	CONTACT_EMAIL: { public: true, static: true }
})
