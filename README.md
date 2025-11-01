# 3D Interactive Developer Portfolio

This project is a visually stunning, fully interactive 3D portfolio website built to showcase my skills, projects, and experience as a developer. It moves beyond traditional static pages by immersing the user in a 3D environment that they navigate by scrolling.

The core of the experience is a 3D room where the camera pans and zooms to different objects, each corresponding to a section of the portfolio (About, Tech, Projects, Contact). The site is built with **React**, **Three.js (via React Three Fiber)**, and **Bun** as the all-in-one JavaScript toolkit.

## 🌟 Core Features

* **Interactive 3D Hero:** The landing page is a full-screen 3D scene. As the user scrolls, the camera animates through a 3D room model, guided by `ScrollControls` from `@react-three/drei`.
* **Animated 2D UI Overlay:** A sleek, responsive 2D interface (built with React and TailwindCSS) is overlaid on top of the 3D scene, displaying content that fades in as the user scrolls to the relevant section.
* **3D Technology Showcase:** The "Tech Stack" section features interactive, 3D models of technology logos (React, Node, Bun, etc.). These models are loaded via `useGLTF` and can be hovered over.
* **Animated Work Timeline:** The "Experience" section uses `framer-motion` to create a "vertical timeline" where each job entry animates into view with a staggered fade-in effect.
* **Project & Showcase Section:** A grid of project cards and "What I Do" service cards, also animated with `framer-motion` to create a polished, dynamic feel.
* **3D Contact Form:** The contact section features a validated form alongside an interactive 3D computer model. The model rotates based on the user's mouse position using `useFrame` from React Three Fiber, creating a dynamic parallax effect.
* **Backend-less Email:** The contact form is fully functional without a custom backend, using **EmailJS** to send messages directly from the client.

---

## 🛠️ Technical Showcase & Architecture

This project is a demonstration of modern, high-performance web development, blending 2D UI with complex 3D graphics.

* **React Three Fiber (`@react-three/fiber`):** The entire 3D experience is built on a declarative React component model. Instead of imperative Three.js, the scene, cameras, lights, and models are all managed as React components.
* **React Three Drei (`@react-three/drei`):** This helper library is used extensively for:
    * **`useGLTF`:** Efficiently loading pre-optimized `.glb` 3D models (like the room, computer, and tech icons).
    * **`ScrollControls`:** The primary driver of the portfolio. It maps browser scroll events directly to the 3D scene's animation timeline, creating the "scroll-through" effect.
    * **`<Sparkles />`:** Used to add dynamic particle effects to the 3D scene.
* **Bun.js Ecosystem:** This project uses **Bun** as its all-in-one JavaScript toolkit, completely replacing Node.js, npm, and Vite/Webpack.
    * **Runtime:** The dev server is powered by `bun dev`.
    * **Package Manager:** Dependencies are installed with `bun install`.
    * **Bundler:** The project is built for production using `bun run build.ts`, which leverages Bun's native, high-speed bundler.
* **Advanced Form Handling:** The contact form uses **React Hook Form** for performance and state management, combined with **Zod** for schema-based validation, ensuring that no empty or invalid data is sent.
* **Modern UI/UX:**
    * **TailwindCSS:** The entire 2D UI is styled with TailwindCSS for a responsive, utility-first design system.
    * **Framer Motion:** Used for all 2D UI animations, creating fluid, professional-grade transitions and staggered animations for elements as they enter the viewport.
    * **Anime.js:** Used for specialized animations like the animated counter for portfolio stats.
* **Static Data Management:** All portfolio content (project details, job history, skills) is centralized in `src/constants.ts`, making the site easy to update and maintain without hardcoding text inside components.

---

## 🚀 Technology Stack

* **Runtime & Bundler:** **Bun.js**
* **Frontend:** **React 19**, **TypeScript**
* **3D Graphics:** **React Three Fiber** (`@react-three/fiber`), **React Three Drei** (`@react-three/drei`), **Three.js**
* **Animation:** **Framer Motion**, **Anime.js**
* **Styling:** **TailwindCSS**
* **Forms:** **React Hook Form**, **Zod**
* **Services:** **EmailJS** (for contact form)

---

## Project Structure
```
/
├── public/
│ ├── images/ # 2D assets (logos, project images, etc.)
│ └── models/ # Optimized 3D models (.glb files)
├── src/
│ ├── components/ # Reusable components (e.g., Button, GlowCard)
│ │ ├── Models/ # React components for loading specific 3D models (Computer, TechIcon)
│ │ └── HeroModels/ # Components for the main 3D scene (HeroExperience, Room)
│ │ │ ├── sections/ # Top-level page sections (Hero, TechStack, Experience, Contact)
│ ├── constants.ts # Centralized static data for the portfolio
│ ├── App.tsx # Main app component with routing and layout
| ├── index.css # Global styles and Tailwind imports
├── build.ts # Custom Bun build script
└── frontend.tsx # Main React entry point
├── package.json # Project dependencies
└── tsconfig.json # TypeScript configuration
```
---

## 🚀 Getting Started

### Prerequisites

* **Bun:** This project uses Bun as the runtime, package manager, and bundler. You can install it from [bun.sh](https://bun.sh/).

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/3d-developer-portfolio.git](https://github.com/your-username/3d-developer-portfolio.git)
    cd 3d-developer-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up Environment Variables (for Contact Form):**
    * Sign up for [EmailJS](https://www.emailjs.com/).
    * Create a `.env` file in the root of the project.
    * Add your EmailJS credentials as found in your account:
        ```
        VITE_APP_EMAILJS_SERVICE_ID=your_service_id
        VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
        VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
        ```

4.  **Run the development server:**
    ```bash
    bun dev
    ```
    This will start the hot-reloading dev server, typically at `http://localhost:3000`.

### Building for Production

To create a production-ready build:

```bash
bun run build
