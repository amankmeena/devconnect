# DevConnect – Aman Meena's Portfolio

This is a modern [Next.js](https://nextjs.org) portfolio project for Aman Meena, built with TypeScript, Tailwind CSS, and a modular component structure. It showcases projects, blogs, testimonials, and a contact form.

## Features

- **Project Portfolio:** Browse detailed project cards with tech tags, screenshots, and planned enhancements.
- **Blog Section:** Read articles on web development, AI, cloud, and more, with individual blog pages and a table of contents.
- **Testimonials:** Client feedback displayed with profile images.
- **Contact Form:** Reach out via a styled form with FAQ toggle functionality.
- **Responsive Design:** Fully responsive layout using Tailwind CSS and custom CSS modules.
- **Image Fallbacks:** Robust image loading with fallback support.
- **Custom Components:** Modular React components for easy maintenance and scalability.
- **Modern Fonts:** Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `app/` – Next.js app directory (routing, pages, layout)
- `components/` – Reusable React components (Navbar, Footer, ProjectTags, etc.)
- `styles/` – Tailwind and custom CSS files
- `public/` – Static assets (images, icons, resume)
- `README.md` – This file

## Customization

- **Projects:** Edit [`components/projects.js`](components/projects.js)
- **Blogs:** Edit [`components/blogs.js`](components/blogs.js)
- **Skills:** Edit [`components/skills.js`](components/skills.js)
- **Testimonials:** Edit [`components/testimonials.js`](components/testimonials.js)
- **Global Styles:** Edit [`styles/globals.css`](styles/globals.css)

## FAQ Toggle

The contact page includes an FAQ section with toggle functionality. See [`app/contact/page.tsx`](app/contact/page.tsx) for implementation.

## Performance & Responsiveness

- **Image Optimization:**  
  > ⚠️ Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider.  
  See: [Next.js Image Optimization](https://nextjs.org/docs/messages/no-img-element)

  Currently, some images use the standard `<img>` tag. In future updates, these will be migrated to the Next.js `<Image />` component for better performance and automatic optimization.

- **Responsiveness:**  
  The project already uses Tailwind CSS for a responsive layout. Further improvements and testing for responsiveness across all devices are planned for future releases.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

---
© {Current Year} Aman Meena. All rights
