# Your portfolio site — setup guide

Free hosting on **GitHub Pages** + your own domain. Total cost: £0 (just your domain renewal).

---

## 1. Personalise it (10 min)

Open the files in any text editor (VS Code is free, or even Notepad / TextEdit). Look for `✏️ EDIT`.

| File | What to change |
|---|---|
| `index.html` | Your name, headline, bio, email, social links, photo |
| `script.js` | Top section only: your showreel ID, animation clips, artwork list |
| `style.css` | Optional — colours are the first lines (`--tomato`, `--sun`…) |
| `images/gallery/` | Delete the placeholder `art-XX.svg` files and add your own `.jpg`/`.png` |
| `images/me.jpg` | Add a photo of you, then swap it in `index.html` (comment shows how) |

**Tips for images:** export at ~2000px on the long side, JPG quality ~80. Keep each under ~1 MB so the site stays fast. Use simple filenames with no spaces (`fox-poster.jpg`).

**Tips for animation:** upload videos to **YouTube or Vimeo** (free) and paste the ID into `script.js`. GitHub has a 100 MB file limit and isn't built for streaming video. Short loops (under ~10 MB `.mp4`) can go straight in a `videos/` folder using `type: "file"`.

To preview locally: just double-click `index.html` to open it in your browser.

---

## 2. Put it on GitHub (10 min)

1. Make a free account at **github.com**.
2. Click **+ → New repository**. Name it e.g. `portfolio`. Set it to **Public**. Click **Create repository**.
3. On the next screen click **uploading an existing file**. Drag in *everything inside* this folder (`index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder). Click **Commit changes**.
4. Go to the repo's **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**
5. Wait ~1 minute. Your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

*Prefer not to use the browser upload every time?* Install **GitHub Desktop** (free) — edit files on your computer, click "Commit" then "Push", and the site updates in a minute.

---

## 3. Connect your domain (10 min + waiting for DNS)

### a) Tell GitHub your domain
**Settings → Pages → Custom domain** → type `www.yourdomain.com` → **Save**.
(GitHub creates a `CNAME` file in your repo automatically — that's expected.)

### b) Add DNS records where you bought the domain
Log in to your registrar (GoDaddy, Namecheap, Squarespace Domains, Cloudflare, 123-reg…), find **DNS settings**, delete any existing "parking" A records / forwarding, then add:

| Type | Host / Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR-USERNAME.github.io` |

(Replace `YOUR-USERNAME` with your GitHub username — no repo name, no `https://`.)

### c) Turn on HTTPS
DNS can take from 10 minutes to 24 hours. Once the Pages settings show a green "DNS check successful", tick **Enforce HTTPS**.

Both `yourdomain.com` and `www.yourdomain.com` will now open your site.

### Optional but recommended: verify your domain
**GitHub profile → Settings → Pages → Add a domain** and follow the TXT-record step. This stops anyone else from ever claiming your domain on GitHub.

---

## 4. Adding new work later

1. Drop the new image into `images/gallery/` on GitHub (**Add file → Upload files**).
2. Open `script.js` on GitHub, click the ✏️ pencil, add a line to `ARTWORK`:
   ```js
   { src: "images/gallery/new-piece.jpg", title: "New Piece", tag: "Characters" },
   ```
3. **Commit changes**. Live in ~1 minute.

## Troubleshooting

- **Page shows 404** → check the repo is Public and `index.html` is at the top level (not inside a subfolder).
- **Images missing** → filenames are case-sensitive: `Fox.JPG` ≠ `fox.jpg`.
- **Domain not working** → give DNS a few hours; make sure the old registrar "parking page" or forwarding is switched off.
- **"Enforce HTTPS" greyed out** → DNS hasn't finished; try again later.
