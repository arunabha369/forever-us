# ForeverUs - Every Love Story Deserves a Home

Create a beautiful, hosted website for your relationship journey. The perfect digital gift for anniversaries, interactions, and weddings.

![ForeverUs Banner](public/og-image.jpg) 
> *Note: Ensure an image exists at `public/og-image.jpg` or replace with a valid screenshot.*

## 🌟 Introduction

**ForeverUs** is a premium, storytelling-focused web template designed for couples to share their unique journey. Built with modern web technologies, it offers a cinematic and immersive experience to celebrate love stories. Whether it's for an anniversary, a wedding invitation, or just a digital scrapbook of memories, ForeverUs provides a polished and elegant platform.

## ✨ Key Features

- **Cinematic Storytelling**: Designed to unfold your love story chapter by chapter.
- **Immersive Visuals**: refined typography (Playfair Display & Inter) and smooth animations.
- **3D Elements**: Integrated with `react-three-fiber` for subtle, high-end 3D background elements.
- **Responsive Design**: Fully optimized for all devices, ensuring your story looks great on mobile and desktop.
- **Modern Tech Stack**: Built on the latest Next.js 16 and React 19 for speed and SEO.

## 🛠️ Tech Stack

This project is built with the following cutting-edge technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Clsx](https://github.com/lukeed/clsx)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Headings) & [Inter](https://fonts.google.com/specimen/Inter) (Body)

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/arunabha369/forever-us.git
    cd forever-us
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
forever-us/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Root layout with fonts and providers
│   ├── page.tsx          # Main entry page
│   └── ...
├── components/           # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── BackgroundElements.tsx # 3D/Canvas background
│   └── ...
├── public/               # Static assets (images, fonts, etc.)
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Customization

### Fonts
The project uses `next/font` to optimize custom fonts.
- **Headings**: Playfair Display (variable: `--font-playfair`)
- **Body**: Inter (variable: `--font-inter`)

To change fonts, modify `app/layout.tsx` and updated the Tailwind variables if necessary.

### Colors
Colors are defined in `app/globals.css` using CSS variables tailored for Tailwind CSS. You can adjust the theme colors (background, foreground, rose-100, etc.) there.

## ☁️ Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and configure the build settings automatically.
4.  Click **Deploy**.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Arunabha Banerjee](https://github.com/arunabha369)
