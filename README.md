# Anjali Dalsaniya — Developer Portfolio

A responsive single-page portfolio website built with Next.js and Tailwind CSS,
showcasing my experience, projects, skills, education and certifications as a
backend developer.

**Live site:** _coming soon_

---

## Tech Stack

| Layer      | Technology                            |
| ---------- | ------------------------------------- |
| Framework  | Next.js 16 (App Router)               |
| UI         | React 19                              |
| Styling    | Tailwind CSS v4                       |
| Icons      | react-icons, devicon CDN              |
| Form       | Web3Forms (no backend required)       |
| Deployment | Vercel                                |

## Features

- **Single page, no routing** — every section is an anchor on one route
- **Fully responsive** — mobile-first layout down to 320px
- **Sticky section blocks** — the heading and illustration stay pinned beside the
  cards on the Experience, Education and Certifications sections
- **Working contact form** — submissions are delivered straight to my inbox via
  Web3Forms, with a spam honeypot and inline success/error states
- **No animation libraries** — all motion is plain CSS keyframes, and it honours
  `prefers-reduced-motion`
- **Themed with CSS custom properties** — colours live in one `@theme` block

## Sections

`Hero` · `About` · `Experience` · `Skills` · `Projects` · `Education` ·
`Certifications` · `Contact`

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

The contact form needs a free [Web3Forms](https://web3forms.com) access key.
Copy the template and fill it in:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

Without a key the form falls back to opening the visitor's mail client, so the
site still runs — it just won't deliver to the inbox directly.

## Project Structure

```
app/
  components/       # one file per section, plus shared SectionHeading
  data.js           # all content: bio, experience, projects, skills, education
  globals.css       # Tailwind import, theme tokens, keyframes
  layout.js         # fonts and metadata
  page.js           # composes every section
public/             # profile image and resume PDF
```

All content is in **`app/data.js`** — updating the site means editing that one
file, not the components.

## Build

```bash
npm run build
npm start
```

## Contact

- **Email:** anjalidalsaniya2212@gmail.com
- **LinkedIn:** [anjali-dalsaniya](https://www.linkedin.com/in/anjali-dalsaniya-cte-gecbvn-it-68b917372/)
- **GitHub:** [@AnjaliDalsaniya04](https://github.com/AnjaliDalsaniya04)
- **LeetCode:** [Anjali_dalsaniya](https://leetcode.com/u/Anjali_dalsaniya)
