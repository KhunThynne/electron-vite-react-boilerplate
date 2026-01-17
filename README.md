# helpost

An Electron application built with React, TypeScript, and modern UI tooling.

## 🚀 Tech Stack

- **Core**: [Electron](https://www.electronjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Electron Vite](https://electron-vite.org/) (powered by [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/)), [class-variance-authority](https://cva.style/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State/Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Form Management**: [TanStack Form](https://tanstack.com/form/latest)
- **Validation**: [Zod](https://zod.dev/)
- **Internationalization**: [react-i18next](https://react.i18next.com/)
- **Utilities**: [cn (clsx + tailwind-merge)](https://github.com/dcastil/tailwind-merge)

## ✨ Features

- **Modern Desktop Experience**: Single-instance application with native capabilities.
- **Fast Development**: Hot Module Replacement (HMR) for both Main and Renderer processes.
- **Optimized Bundling**: Separate builds for Main, Preload, and Renderer.
- **Component System**: Accessible, unstyled UI primitives styled with Tailwind CSS.
- **Auto-Update Ready**: Configured with `electron-updater`.
- **Internationalization**: Multi-language support with i18n.
- **Form Handling**: Type-safe forms with TanStack Form and Zod validation.
- **Linting & Formatting**: configured with ESLint and Prettier.

## 🛠️ Project Setup

### Prerequisites

- Node.js (Latest LTS recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the app in development mode with hot-reload:

```bash
npm run dev
```

### Building for Production

Build the application for your specific platform:

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

The output will be in the `dist` or `release` folder (depending on configuration).

## 📝 Scripts

- `npm run format`: Format code with Prettier
- `npm run lint`: Lint code with ESLint
- `npm run typecheck`: Run TypeScript type checking
- `npm run release`: Create a new release version (standard-version)

## 📁 Project Structure

- `src/main`: Main process code
- `src/preload`: Preload scripts
- `src/renderer`: Renderer process (React app)
  - `src/renderer/src/components`: UI components
  - `src/renderer/src/assets`: Static assets
