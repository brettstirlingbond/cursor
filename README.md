## Static site for GitHub Pages

This repository contains a minimal static website that is ready to be hosted with **GitHub Pages**.

### Files

- **`index.html`**: Main landing page that GitHub Pages will serve at the site root.
- **`404.html`**: Custom 404 page used when a route is not found.
- **`styles.css`**: Global styles for the site.
- **`script.js`**: Optional JavaScript for small enhancements (smooth scrolling).
- **`.nojekyll`**: Disables Jekyll processing so files are served as plain static assets.

### How to host on GitHub Pages

1. Create a new repository on GitHub and push these files to it.
2. Go to **Settings → Pages** in your repository.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: select your default branch (e.g. `main`) and `/ (root)` as the folder.
4. Click **Save**.
5. Wait a minute or two for GitHub Pages to deploy; your public URL will appear in the Pages section.

### Custom domain (optional)

If you want to use a custom domain:

1. Configure DNS to point to GitHub Pages (see the official GitHub Pages docs).
2. Create a `CNAME` file at the repository root that contains only your domain name, for example:

   ```text
   example.com
   ```

