# Deploying The Aasta Ayur Demo

This is a plain static multi-page site. There is no build step, package install, database, or backend.

Upload or deploy the entire folder, not only `index.html`.

## Before Deployment

Replace these placeholders across the HTML files:

- `971000000000` with the verified Aasta Ayur WhatsApp number
- `https://www.instagram.com/` with the verified Instagram URL
- `hello@example.com` with the verified email, or remove email if not used
- The location/hours placeholder text once confirmed

Keep the “Private demo concept” note for the outreach preview. Remove it only if Aasta Ayur approves the concept for production.

## Fastest Option: Netlify Drop

1. Open Netlify Drop: `https://app.netlify.com/drop`
2. Drag the whole `aasta-ayur-demo` folder into the browser.
3. Wait for Netlify to create a public preview URL.
4. Open the URL and test the WhatsApp buttons.

## Render Blueprint

Render needs the project in a GitHub, GitLab, or Bitbucket repository.

1. Create a new repo and push the contents of this folder.
2. Confirm `render.yaml` exists at the repo root.
3. Open:
   `https://dashboard.render.com/blueprint/new?repo=<YOUR_REPO_HTTPS_URL>`
4. Apply the Blueprint.
5. After deploy, open the Render URL and test the page.

## Vercel

1. Create a new Git repo and push this folder.
2. Import the repo in Vercel.
3. Keep the framework preset as “Other.”
4. No build command is required.
5. Output directory should be `.`.

## Post-Deploy Check

- Hero image loads.
- Navigation opens each page: Home, Services, Moroccan Bath, Bridal, Booking, Visit.
- Service section shows five cards on the homepage.
- Gallery shows hammam, botanical oils, and bridal beauty visuals.
- Every WhatsApp CTA opens with a prefilled message.
- No placeholder contact information is visible unless intentionally left for demo framing.
