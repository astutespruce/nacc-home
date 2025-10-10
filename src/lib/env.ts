import * as env from '$env/static/public'

export const SENTRY_DSN = env.PUBLIC_SENTRY_DSN || ''
export const GOOGLE_ANALYTICS_ID = env.PUBLIC_GOOGLE_ANALYTICS_ID || ''
export const CONTACT_EMAIL = env.PUBLIC_CONTACT_EMAIL
export const DEPLOY_ENV = env.PUBLIC_DEPLOY_ENV
export const PRIORITZATION_TOOL_URL = env.PUBLIC_PRIORITIZATION_TOOL_URL
