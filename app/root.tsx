import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction, MetaFunction } from "react-router";

import "./tailwind.css";
import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap",
  },
  { rel: "icon", href: "/DarshPortfolio/favicon.png", type: "image/png" },
  { rel: "canonical", href: "https://darshmenon.github.io/DarshPortfolio/" },
];

export const meta: MetaFunction = () => [
  { name: "robots", content: "index, follow" },
  { name: "googlebot", content: "index, follow" },
  { name: "author", content: "Darsh Menon" },
  { name: "theme-color", content: "#7c3aed" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-tech-bg text-white antialiased selection:bg-primary-500/30 selection:text-white">
        {/* Hidden SEO content for crawlers - always rendered server-side */}
        <div className="sr-only" aria-hidden="true">
          <h1>Darsh Menon - Robotics Software Engineer Portfolio</h1>
          <p>
            Welcome to the portfolio of Darsh Menon, a Robotics Software Engineer at Asimov Robotics
            specializing in ROS 2, Computer Vision, Autonomous Navigation, and Reinforcement Learning.
            BITS Pilani graduate with experience in building intelligent autonomous systems.
          </p>
          <p>
            Skills: ROS 2, Python, C++, OpenCV, PyTorch, Gazebo, Docker, Linux, MoveIt 2, Navigation Stack
          </p>
          <p>
            Experience: Robotics Software Engineer at Asimov Robotics, SDE at Growth Jockey,
            Business Development at Shriram Automall
          </p>
          <p>
            Education: B.E. (Hons) Mechanical Engineering from BITS Pilani Goa Campus (2020-2024)
          </p>
          <p>
            Projects: RoboCloud Hub, RL Bipedal Walking Robot, Mobile Pick-and-Place, Autonomous Pick-and-Place
          </p>
          <p>
            Contact: darshmenon02@gmail.com | Kochi, Kerala, India
          </p>
          <nav>
            <a href="/DarshPortfolio/">Home</a>
            <a href="/DarshPortfolio/about">About</a>
            <a href="/DarshPortfolio/projects">Projects</a>
            <a href="/DarshPortfolio/contact">Contact</a>
            <a href="/DarshPortfolio/robocloud-hub">RoboCloud Hub</a>
          </nav>
        </div>

        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
