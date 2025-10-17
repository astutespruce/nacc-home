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
