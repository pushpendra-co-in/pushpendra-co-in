# pushpendra.co.in — Portfolio Website

Static portfolio website built with plain HTML, CSS, and JavaScript. Tailwind CSS is pre-compiled locally — no build step required to serve.

---

## Project Structure

```
portfoliov3/
├── index.html                  # Home page
├── posts/index.html            # Blog listing
├── projects/index.html         # Projects
├── work/index.html             # Work history
├── post/
│   ├── design-scalable-system/index.html
│   └── bugs-taught-me-about-writing-reliable-code/index.html
├── images/                     # Place photo.png here
├── main.js                     # Shared JS (theme toggle, TOC scroll, copy button)
├── style.css                   # Custom styles
├── tailwind.css                # Pre-compiled Tailwind v3 (do not edit manually)
├── robots.txt
└── sitemap.xml
```

---

## Local Development

No build step needed. Just open any HTML file in a browser, or run a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

---

## Updating Tailwind CSS

If you add new Tailwind classes to any HTML file, regenerate `tailwind.css`:

```bash
npm install
npx tailwindcss -i tailwind.input.css -o tailwind.css --minify
```

> `tailwind.input.css` contains the three `@tailwind` directives. Keep it locally — it is in `.gitignore`.

---

## Deploy to Production (pushpendra.co.in)

### What to deploy

Upload only these files/folders to your server — everything else stays local:

```
index.html
main.js
style.css
tailwind.css
robots.txt
sitemap.xml
images/
posts/
projects/
work/
post/
```

Do **not** upload: `node_modules/`, `package.json`, `package-lock.json`, `tailwind.config.js`, `tailwind.input.css`

---

### Option 1 — Deploy via cPanel File Manager (shared hosting)

1. Log in to cPanel → open **File Manager**
2. Navigate to `public_html/` (this maps to `pushpendra.co.in/`)
3. Delete any existing files in `public_html/`
4. Click **Upload** → upload all files and folders listed above
5. Make sure the folder structure is preserved exactly

---

### Option 2 — Deploy via FTP (FileZilla or similar)

1. Open FileZilla, connect with your hosting FTP credentials
2. On the right panel, navigate to `/public_html/`
3. On the left panel, open your local `portfoliov3/` folder
4. Select and drag all deploy files/folders to the right panel
5. Wait for upload to complete
6. Visit `https://pushpendra.co.in` to verify

---

### Option 3 — Deploy via SSH + rsync (recommended)

```bash
rsync -avz --exclude 'node_modules' \
            --exclude 'package.json' \
            --exclude 'package-lock.json' \
            --exclude 'tailwind.config.js' \
            --exclude 'tailwind.input.css' \
            --exclude '.gitignore' \
            --exclude 'README.md' \
            --exclude '.DS_Store' \
            ./ user@pushpendra.co.in:/path/to/public_html/
```

Replace `user` and `/path/to/public_html/` with your actual SSH user and server path.

---

### Option 4 — Deploy via GitHub + Hosting Auto-Deploy

1. Push the repo to GitHub:

```bash
git init
git add .
git commit -m "initial deploy"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

2. In your hosting panel (cPanel, Cloudflare Pages, Netlify, etc.), connect the GitHub repo and set:
   - **Build command:** _(leave empty — no build needed)_
   - **Publish directory:** `/` (root)

---

## Adding a Profile Photo

Place your photo at:

```
images/photo.png
```

The homepage references it at `images/photo.png` — any square image works, it is cropped to a circle via CSS.

---

## Adding a New Blog Post

1. Create a new folder inside `post/`:
   ```
   post/your-post-slug/index.html
   ```
2. Copy an existing post page as a template and update the content
3. Add the post to `posts/index.html` (listing page)
4. Add the post to `index.html` (recent posts section on home)
5. Add the URL to `sitemap.xml`
6. Regenerate `tailwind.css` if you used new Tailwind classes
