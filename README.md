# Personal Portfolio

This project is meant not only to display my personal information for recruiters but also to be a showcase of the knowledge I have acquired during my studies and professional experience.

Overall, I have been trying my best to balance good coding practices and simplicity.

🚀 Live Preview:
https://datalinkgg.github.io/thomascionek/

Here is what I have used in this project:

- React as the Frontend
- TypeScript for type safety
- CSS for my own customization
- Vite for creating and building the app
- Github pages for helping me deploy
- ESLint rules
- Ant Design components and icons
- Font Awesome icons
- Git for version control
- Flex box concepts for responsiveness

## Build and deploy

This app is a Vite + React project. The production base path is `/thomascionek` (see `vite.config.ts`), which matches a GitHub Pages **project site** at `https://<user>.github.io/thomascionek/`.

### Prerequisites

- Node.js and npm (or use your package manager’s equivalent of the scripts below).

### Install

```bash
npm install
```

### Local development

```bash
npm run dev
```

### Production build

Runs TypeScript checking, then Vite build. Output goes to `dist/`.

```bash
npm run build
```

To preview the built site locally:

```bash
npm run preview
```

### Deploy to GitHub Pages

The [gh-pages](https://github.com/tschaub/gh-pages) package pushes the contents of `dist/` to the `gh-pages` branch of the configured `origin` remote.

```bash
npm run deploy
```

`deploy` runs `predeploy` first, which executes `npm run build`, so you get a fresh build before publish.

**Repository settings:** In GitHub → **Settings** → **Pages**, set the source to the **`gh-pages`** branch (folder `/` root). The live URL is the `homepage` value in `package.json` (currently `https://dataLinkGG.github.io/thomascionek/`).

**Note:** You must be able to push to `origin` (SSH or HTTPS with credentials). The first deploy may create the `gh-pages` branch.
