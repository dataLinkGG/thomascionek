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
- Bun for installs and running scripts
- Github pages for helping me deploy
- ESLint rules
- Ant Design components and icons
- Font Awesome icons
- Git for version control
- Flex box concepts for responsiveness

## Build and deploy

This app is a Vite + React project. The production base path is `/thomascionek` (see `vite.config.ts`), which matches a GitHub Pages **project site** at `https://<user>.github.io/thomascionek/`.

### Prerequisites

- [Bun](https://bun.sh/) (runtime and package manager).
- [Node.js](https://nodejs.org/) v20.19+ or v22.12+ (required by Vite 8)

> **Note:** Bun uses your system Node.js to run Vite. You can manage Node versions with [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm).

### Install

```bash
bun install
```

### Local development

```bash
bun run dev
```

### Production build

Runs TypeScript checking, then Vite build. Output goes to `dist/`.

```bash
bun run build
```

To preview the built site locally:

```bash
bun run preview
```

### Deploy to GitHub Pages

The [gh-pages](https://github.com/tschaub/gh-pages) package pushes the contents of `dist/` to the `gh-pages` branch of the configured `origin` remote.

```bash
bun run deploy
```

`deploy` runs `predeploy` first, which executes `bun run build`, so you get a fresh build before publish.

**Repository settings:** In GitHub → **Settings** → **Pages**, set the source to the **`gh-pages`** branch (folder `/` root). The live URL is the `homepage` value in `package.json` (currently `https://dataLinkGG.github.io/thomascionek/`).

**Note:** You must be able to push to `origin` (SSH or HTTPS with credentials). The first deploy may create the `gh-pages` branch.
