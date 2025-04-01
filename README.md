# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and expertise as a front-end developer. This project demonstrates my ability to create visually stunning, interactive, and user-friendly web experiences.

## Table of Contents

- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Live Demo

Check out the live version of the portfolio:

- [Portfolio Website](https://portfolio-nine-dusky-76.vercel.app/)

## Tech Stack

### Core Technologies

- **Next.js**: For server-side rendering, static site generation, and routing capabilities
- **React**: As the JavaScript library for building user interfaces
- **TypeScript**: For type safety and improved code quality
- **Tailwind CSS**: For utility-first styling and rapid UI development
- **Framer Motion**: For smooth animations and gesture handling

### Additional Libraries

- **Radix UI**: For accessible, customizable UI components
- **React Hook Form**: For efficient form handling and validation
- **Resend API**: For email integration in the contact form
- **Tailwind Merge**: For utility class merging
- **Class Variance Authority**: For dynamic class generation

### Why These Tools?

- **Next.js**: Chosen for its excellent performance optimizations, server-side rendering capabilities, and seamless routing system, which are perfect for a portfolio site that needs to balance SEO and interactivity.
- **Tailwind CSS**: Provides the flexibility to create a unique design while maintaining consistency across components. The utility-first approach allows rapid iteration on styles.
- **TypeScript**: Ensures type safety and improves code maintainability, especially important in a project with complex interactions and animations.
- **Framer Motion**: Delivers smooth, performant animations that enhance the user experience without sacrificing performance.
- **Radix UI**: Offers accessible, unstyled components that can be customized to fit the portfolio's design while ensuring accessibility standards are met.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dannydiara/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Environment Variables
Create a .env.local file in the root directory and add:

```bash
RESEND_API_KEY=your_resend_api_key
YOUR_EMAIL=your_email@example.com
```
## Project Structure

```bash
portfolio-site/
├── .next/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── ContactModal.tsx
│   │   ├── HeroOrbit.tsx
│   │   └── ...other components
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx
│   │   └── ...other sections
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   ├── layout.tsx
│   └── page.tsx
│   └── utils/
│       └── scroll.ts
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Key Features

1. Custom Card Component
A reusable card component with a unique design featuring:
Gradient overlay with subtle texture
Custom border styling
Responsive design
2. Contact Modal with Email Integration
A modal form that sends emails through the Resend API:
Form validation using React Hook Form
Smooth animations using Framer Motion
Email integration for direct contact
3. Animated Hero Section
A visually engaging hero section with:
Rotating elements using CSS animations
Custom SVG icons
Responsive design that adapts to different screen sizes
4. Project Showcase
A section displaying featured projects with:
Animated cards
Results metrics
External links to live demos
5. Smooth Scrolling Navigation
Custom navigation with smooth scrolling behavior:
Fixed header with scroll animation
Smooth transitions between sections
```bash
export const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
```
6. Interactive Hobbies Section
An engaging hobbies section with:
Draggable hobby tags using Framer Motion
Custom drag constraints for controlled movement
Animated feedback during interaction
Emoji integration for visual appeal

## Deployment

The portfolio is deployed on Vercel, leveraging its automatic deployment features and global CDN for optimal performance.
```bash
Deployment Steps
Push code to GitHub repository
Connect repository to Vercel
Configure environment variables in Vercel dashboard
Vercel automatically builds and deploys the site
```

## Contributing

Contributions are welcome! Please follow these guidelines:
```bash
Fork the repository
Create a new branch for your feature
Make your changes and ensure tests pass
Submit a pull request with detailed description
```
