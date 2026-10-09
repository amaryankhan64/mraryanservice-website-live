# Mr Aryan Service — ATS Resume Studio

This repository contains the public website source for Mr Aryan Service. A push to `main` builds the Vite site and deploys it to GitHub Pages using the included GitHub Actions workflow.

## Run locally

Requirements: Node.js 24 and pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

To make a production build locally, run `pnpm build`; the generated site is in `dist/`.

## ATS checker privacy

The published static site runs its basic resume estimate in the visitor's browser. It does not upload resume text to an API. The estimate is guidance only and is not an official score from an employer's applicant-tracking system.

## Deployment

The `Deploy GitHub Pages` workflow builds and publishes the website when changes are pushed to `main`. GitHub Pages is configured for the custom domain `mraryanservice.in`; the domain's DNS must point to GitHub Pages before the custom domain can serve the site.
