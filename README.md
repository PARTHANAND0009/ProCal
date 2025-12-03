# ProCal - AI Macro & Calorie Tracker Website

This is a responsive, mobile-first React Single Page Application (SPA) designed with a Glassmorphism aesthetic for the ProCal mobile app.

## Project Structure

- `index.html`: Entry point.
- `App.tsx`: Router configuration (using HashRouter for compatibility with static hosts like GitHub Pages).
- `pages/`: Contains the Home, Privacy Policy, and Terms & Conditions pages.
- `components/`: Contains the shared Layout (Navbar, Footer).

## How to Deploy to GitHub Pages

Since this is a React SPA using `HashRouter`, it can be deployed easily as a static site.

1.  **Initialize Git:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Repo:** Create a new repository on GitHub.

3.  **Push Code:**
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

4.  **Build (if using a build tool like Vite/CRA):**
    Run your build command (e.g., `npm run build`).

5.  **Deploy:**
    - Go to your repository **Settings** > **Pages**.
    - Select the branch (usually `main` or `gh-pages` if you have a build action) and the folder (usually `/` or `/dist`).
    - Save.

## Custom Domain DNS Instructions

To connect a custom domain (e.g., `www.procal-app.com`):

1.  **GitHub Settings:**
    - Go to Repo Settings > Pages > Custom domain.
    - Enter `www.your-domain.com` and save.
    - Check "Enforce HTTPS".

2.  **DNS Provider (GoDaddy, Namecheap, etc.):**
    - **CNAME Record:**
        - Host: `www`
        - Value: `YOUR_USERNAME.github.io`
    - **A Records (for root domain):**
        - Host: `@`
        - Value: `185.199.108.153`
        - Value: `185.199.109.153`
        - Value: `185.199.110.153`
        - Value: `185.199.111.153`

## Updates
To update the Privacy Policy or Terms, edit `pages/Privacy.tsx` or `pages/Terms.tsx` respectively.
