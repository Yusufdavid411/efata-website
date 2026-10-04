# EFATA Website

Public React/Vite website for EFATA Logistics, a commercial vehicle logistics service for truck, tipper, and petrol tanker movements.

## Website Scope

- Explains EFATA's goods distribution, construction haulage, fuel movement, and contract logistics services.
- Helps customers choose between truck, tipper, and petrol tanker requests.
- Prepares complete trip-request emails for the EFATA dispatch address.
- Deploys automatically to Vercel from the GitHub `master` branch.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

The project is configured for Vercel. Connect the GitHub repository to Vercel and use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
