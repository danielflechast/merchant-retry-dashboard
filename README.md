# RetryFlow - Merchant Retry Dashboard

Interactive dashboard for configuring payment retry rules and visualizing real-time impact.

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** version 16 or higher (Download: https://nodejs.org/)
- npm (included with Node.js)

### Steps to run on another PC

1. **Copy the project**
   - Compress the entire `merchant-retry-dashboard` folder
   - IMPORTANT: You may exclude the `node_modules` folder to reduce file size (it will be recreated)
   - Transfer the compressed file to the other PC and unzip it

2. **Install dependencies**
cd merchant-retry-dashboard
npm install
This will download all required dependencies (React, Tailwind, etc.)

3. **Run in development mode**

npm run dev

The app will open at `http://localhost:5173/` (or the port displayed in the console)

4. **Production build (optional)**

npm run build

This generates a `dist` folder with optimized static files ready for deployment.

## 📦 Required Files

### ✅ Include:
- `src/` — Source code
- `public/` — Public assets
- `index.html`
- `package.json` — Dependency list
- `package-lock.json` — Exact dependency versions
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — Tailwind configuration
- `postcss.config.js` — PostCSS configuration
- `README.md` — This file

### ❌ Exclude (automatically generated):
- `node_modules/` — Dependencies (~200MB)
- `dist/` — Production build
- `.vite/` — Vite cache

## 🛠️ Available Commands

- `npm run dev` — Start development server
- `npm run build` — Generate production build
- `npm run preview` — Preview production build locally

## 📝 Features

- Visual configuration of payment retry rules
- Real-time impact simulation
- Modern UI with Tailwind CSS
- Fully responsive design
- AI insights for optimization

## 🔧 Technologies Used

- React 18
- Vite
- Tailwind CSS 3.4
- Lucide React (icons)

## 💡 Troubleshooting

**Installation issues:**
- Verify Node.js installation:

node --version

- Delete `node_modules` and `package-lock.json`, then reinstall:

npm install


**Port already in use:**
- Vite will automatically choose another available port
- Or close the process using port 5173 manually

**Styles not applying:**
- Ensure Tailwind CSS v3.4 is installed
- Refresh the browser with Ctrl+Shift+R
