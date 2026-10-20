# The Quiet Shelf

A calm, editorial-style bookstore website built with React and Vite. Browse the collection, see upcoming events, and sign in or create an account.

> *Read slowly. Dream big. Turn the page.*

## Features

- Single-page home with Hero, About, Collection (Shop), and Events sections
- Sign in and sign up forms with password visibility toggles and validation
- Responsive layout with a mobile slide-down navigation menu
- Client-side routing with React Router
- Accessible forms and navigation (labels, `aria-*` attributes, focus states)

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (v7, imported from `react-router`)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Other scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── components/
│   ├── Header.jsx    # Navigation, logo, auth links, mobile menu
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Shop.jsx      # Book collection
│   ├── Events.jsx
│   ├── Footer.jsx
│   └── Login.jsx     # Combined sign in / sign up form
├── App.jsx           # Routes and layout
└── main.jsx          # Entry point (wraps App in BrowserRouter)
public/
└── images/           # Logo and book cover images
```

## Routes

| Path       | Page                                   |
| ---------- | -------------------------------------- |
| `/`        | Home (Hero, About, Shop, Events)       |
| `/signin`  | Sign in form                           |
| `/signup`  | Create account form                    |

The home page sections are reachable via hash links (`/#about`, `/#shop`, `/#events`, `/#contact`).

## Authentication

The forms in `Login.jsx` currently log their values to the console. To make them functional, connect your own API in `handleSubmit`:

- Registration: replace the `console.log('Sign up: ...')` call
- Login: replace the `console.log('Sign in: ...')` call

Never store plain-text passwords, and always send credentials over HTTPS.

## Styling

Styling is done with Tailwind utility classes and a small set of custom theme colors (for example `primary-dark`, `primary-light`, `muted-rose`, `bg`, `text`, and `dark`). Adjust them in your Tailwind theme configuration to restyle the whole site.

## Deployment

Build the site with `npm run build` and deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, and so on).

Because the app uses client-side routing, configure your host to serve `index.html` for all routes so that direct visits to `/signin` or `/signup` don't return a 404.

## License

Add your license here.