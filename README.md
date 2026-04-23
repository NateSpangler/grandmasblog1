# Big and Tall Tried and True

A polished, responsive, frontend-only blog-style homepage designed for a curated big-and-tall recommendations brand.

## Run locally

1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build

- Create a production build:
  - `npm run build`
- Output files are generated in the `dist/` directory.

## Deploy to Cloudflare Pages

1. Push this project to a Git repository (GitHub/GitLab).
2. In Cloudflare Pages, create a new project and connect that repo.
3. Use these build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy.

## Editing products quickly

- Update product data in `src/main.js` inside the `products` array.
- Replace placeholder images in `public/images/products/`:
  - `product-01-placeholder.svg` through `product-09-placeholder.svg`
- Keep file names the same for instant image replacement without code edits.
