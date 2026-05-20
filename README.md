# Init Monorepo

A modern, high-performance monorepo powered by [Turborepo](https://turbo.build/) and managed with [Bun](https://bun.sh/).

## 🚀 Tech Stack

- **Monorepo Management:** Turborepo
- **Package Manager:** Bun
- **Backend API:** Hono (running on Bun runtime)
- **Mobile Client:** Expo / React Native (powered by Expo Router and Tailwind CSS)
- **Code Quality:** TypeScript, ESLint, Prettier

---

## 📂 Project Structure

```text
├── apps/
│   ├── backend/          # Hono API Server (running on port 3000)
│   └── mobile/           # Expo (React Native) Mobile Application
├── packages/
│   ├── config/           # Shared configurations (TSConfigs, ESLint, Prettier, Tailwind)
│   └── utils/            # Shared TypeScript utilities (class merger, safe promise wrapper, etc.)
├── package.json          # Root package definitions and workspaces
└── turbo.json            # Turborepo task pipeline configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed:

```sh
bun --version
```

### Installation

Clone the repository and install all dependencies from the root directory:

```sh
bun install
```

---

## 💻 Development Workflow

### Running Dev Servers

To start the development servers for all applications simultaneously:

```sh
bun dev
```

#### Running Specific Applications (Recommended)

You can run individual applications using Turborepo filters:

- **Start Backend API only:**
  ```sh
  bun dev --filter=backend
  ```
- **Start Mobile App only (iOS by default):**
  ```sh
  bun dev --filter=mobile
  ```

---

## 📦 Core Applications & Packages

### 1. Apps

#### 🔹 `apps/backend`
- **Framework:** [Hono](https://hono.dev/)
- **Runtime:** Bun
- **Hot Reloading:** Runs via `bun --hot src/app.ts` on port `3000`.
- **Workspace Dependencies:** `@repo/config`

#### 🔹 `apps/mobile`
- **Framework:** [Expo](https://expo.dev/) (React Native)
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling:** Tailwind CSS
- **Workspace Dependencies:** `@repo/config`

---

### 2. Shared Packages

#### ⚙️ `@repo/config`
Houses shared configurations utilized across workspaces.
- **TSConfigs:** `base.json` (for backend & general TS), `rn.json` (extends base with React Native/JSX settings).
- **Format & Lint:** Shared configurations for ESLint, Prettier, and Tailwind CSS.

#### 🧰 `@repo/utils`
A collection of TypeScript helper utilities.
- `cn(...classes)` - Combines class names using `clsx` and merges Tailwind classes with `tailwind-merge`.
- `p(promise)` - A wrapper helper for promises that returns a tuple `[null, data] | [error]`, avoiding verbose `try-catch` blocks.
- `ErrorHandler` - A custom `Error` class containing HTTP `status` and `statusCode`.

---

## 🗂️ Task Commands

All global commands are configured in the root `package.json` and executed via Turborepo:

| Command | Action | Description |
| :--- | :--- | :--- |
| `bun dev` | Run Dev Servers | Starts hot-reloaded development environments |
| `bun build` | Build All | Compiles/builds all workspaces |
| `bun lint` | Lint Code | Runs linting check across all apps and packages |
| `bun format` | Format Code | Formats the codebase using Prettier |
| `bun check-types` | Type Check | Validates TypeScript types throughout the monorepo |
