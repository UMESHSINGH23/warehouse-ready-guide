# WarehouseReady — independent warehouse starter guide

A responsive, static learning website for new warehouse workers in Germany. It includes English/German interface labels, beginner modules, a safety reminder, a German vocabulary list, and a general knowledge quiz.

## Important scope and disclaimer
- This is an independent educational project and is **not affiliated with, endorsed by, or an official training resource for Amazon**.
- Do not add confidential employer information, internal system screenshots, credentials, restricted procedures, or employee personal data.
- This site does not replace mandatory employer induction, site-specific safety training, or instructions from authorised trainers.
- Review all content for your own workplace before sharing it with colleagues.

## Preview locally
Open `index.html` in a modern browser. No build tools or server are required.

## Publish using GitHub Pages
1. Sign in to GitHub and create a new repository, for example `warehouse-ready-guide`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/(root)` folder, then save.
6. Wait for the deployment to finish. GitHub will show the published Pages URL in Settings → Pages.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages

## Editing the content
- Edit the lesson content in the `lessons` object in `script.js`.
- Edit English and German interface labels in `translations` in `script.js`.
- Edit the visual style in `styles.css`.
- The lesson-completion status is stored in the visitor's browser using `localStorage`. There is no user account, central progress tracking, or server-side data collection.

## Before publishing
- Test on a phone and desktop.
- Check English and German text.
- Confirm that safety content matches only general safe-work guidance and does not conflict with official site training.
- Keep the independent-project disclaimer visible.
