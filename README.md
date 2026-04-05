# IronCore Fitness — Landing Page

A fully static, single-page landing page for **IronCore Fitness**, built with Vue 3 + Vite. No backend, no database, no server-side rendering.

## Tech Stack

| Layer           | Technology                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework       | [Vue 3.5](https://vuejs.org/) (Composition API `<script setup>`)                                                                             |
| Build Tool      | [Vite 6](https://vitejs.dev/)                                                                                                                |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/)                                                                                                  |
| Animations      | [@vueuse/motion 2](https://motion.vueuse.org/)                                                                                               |
| Icons           | [lucide-vue-next](https://lucide.dev/)                                                                                                       |
| Testing         | [Vitest 3](https://vitest.dev/) + [@vue/test-utils 2](https://test-utils.vuejs.org/) + [happy-dom](https://github.com/capricorn86/happy-dom) |
| Language        | TypeScript 5.7 (strict)                                                                                                                      |
| Package Manager | [pnpm](https://pnpm.io/) (enforced)                                                                                                          |

## Project Structure

```
gym-fitness-landing-page/
├── public/            # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TheNavbar.vue
│   │   │   └── TheFooter.vue
│   │   └── ui/
│   │       ├── AppButton.vue
│   │       ├── AppInput.vue
│   │       └── AppTextarea.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── StatsSection.vue
│   │   ├── ProgramsSection.vue
│   │   ├── TrainersSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── PricingSection.vue
│   │   ├── CtaSection.vue
│   │   └── ContactSection.vue
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── tests/
│   ├── setup.ts           # Global test setup (MotionPlugin)
│   ├── App.test.ts
│   ├── TheNavbar.test.ts
│   └── ContactSection.test.ts
├── index.html
├── package.json
├── vite.config.ts
├── vitest.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Development server

```bash
pnpm dev
```

### Production build

```bash
pnpm build
```

The output is written to `dist/` — a fully static bundle ready for any CDN (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

### Preview the build locally

```bash
pnpm preview
```

### Run tests

```bash
pnpm test
```

### Run tests with coverage

```bash
pnpm test:coverage
```

### Type-check

```bash
pnpm typecheck
```

## Security

- **Content Security Policy** — Strict CSP meta tag in `index.html` restricts script/style/font sources
- **XSS prevention** — Vue template bindings are always escaped; no `v-html` used with user data
- **Form validation** — Client-side validation for required fields and email format
- **External links** — All external anchor tags include `rel="noopener noreferrer"`
- **Input limits** — `maxlength` attributes enforced on all form fields

## Deployment

Build the project with `pnpm build` and deploy the `dist/` folder to any static host.

```bash
pnpm build
# Upload dist/ to your host of choice
```

For GitHub Pages, add a `CNAME` file to `public/` with your custom domain.
