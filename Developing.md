# Development setup

## Install NodeJS

Install [nvm](https://github.com/nvm-sh/nvm) to install NodeJS.

From the root of the project directory:

```bash
nvm install
```

Then activate it for each session in your terminal:

```bash
nvm use
```

## Environment variables

Create a `.env.development` file with the following variables:

```bash
GOOGLE_ANALYTICS_ID=
SENTRY_DSN=
CONTACT_EMAIL=<email>
DEPLOY_ENV=local
PRIORITIZATION_TOOL_URL=<URL to prioritization tool or https://tool.aquaticbarriers.org>
```

NOTE: some of these variables are intentionally blank in development mode.

Create a `.env.production` file with the following variables:

```bash
GOOGLE_ANALYTICS_ID=<google analytics ID>
SENTRY_DSN=<sentry DSN>
CONTACT_EMAIL=<email>
DEPLOY_ENV=local
PRIORITIZATION_TOOL_URL=<URL to prioritization tool or https://tool.aquaticbarriers.org>
```

NOTE: these variables are only needed for testing the full static build and
testing that it is correctly connected to these services. These variables are
only required for deployment to the server.

These variables are loaded for use in the app in the `src/lib/env.ts` file.

## Development server

Run the development server:

```bash
npm run dev -- --open
```

This will automatically open the homepage rendered by the development server in
your default browser.

## Static builds

Run the static build step

```bash
npm run build
```

Run the preview server:

```bash
npm run preview -- --open
```

This will automatically open the built version in your default browser.

## Deployment

This application is deployed alongside the [National Aquatic Barrier Inventory & Prioritization Tool](https://github.com/astutespruce/sarp-connectivity).

See deploy instructions [here](https://github.com/astutespruce/sarp-connectivity/blob/main/deploy/README.md).
