# Female Yoga Traineer at Kharghar

Website for certified female yoga trainer based in Kharghar, Navi Mumbai offering personalized private 1-on-1 sessions, home visits, and studio sessions at Harshi Heritage CHS, Sector 19.

- **Heading**: Female Yoga Traineer at Kharghar
- **Phone**: +91 9773771853
- **Email**: swamiyogi01@gmail.com
- **Address**: 501, 5th floor, Harshi Heritage CHS, Plot number 101, Sector 19, Kharghar, Navi Mumbai 410210.

---

## 🚀 How to Host on GitHub Pages

This project is configured for GitHub Pages with:
- Relative base asset paths (`base: './'` in `vite.config.ts`) so it works regardless of your repository name or subpath.
- Bundled images and assets in `dist/assets/`.
- `public/.nojekyll` to bypass Jekyll processing.
- `public/404.html` fallback for single-page redirection.
- Automated GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Female Yoga Trainer at Kharghar"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to your repository:
   - Click on **Settings** (gear icon).
   - In the left sidebar, click on **Pages** (under "Code and automation").
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. That's it! GitHub will automatically run the `.github/workflows/deploy.yml` workflow and publish your site at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

### Option 2: Build & Push `dist` Folder (Manual)

1. Build the production files:
   ```bash
   npm install
   npm run build
   ```
2. Deploy the `dist` folder to your `gh-pages` branch or upload it to your host.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
