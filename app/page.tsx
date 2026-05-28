"use client";

import { balloons } from "balloons-js";
import { useState, useEffect } from "react";

export default function Home() {
  // 1. State to hold the button's X and Y coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 2. The logic to move the button randomly
  useEffect(() => {
    const moveButton = () => {
      // Calculate a random position within the browser window boundaries
      // Subtract a bit from the total width/height so it doesn't go off screen
      const randomX = Math.floor(Math.random() * (window.innerWidth - 150));
      const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
      
      setPosition({ x: randomX, y: randomY });
    };

    // Move it once immediately when the page loads
    moveButton();

    // Set an interval to trigger the movement every 3 seconds (3000ms)
    const interval = setInterval(moveButton, 3000);

    // Cleanup function to prevent memory leaks if the component unmounts
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Artemis",
      description: "A full-stack data pipeline and dashboard that aggregates, analyzes, and visualizes daily structural gamma (GEX) and options flow data for SPX 0DTE contracts.",
      stack: ["Python", "Supabase", "React", "Tailwind"],
      repoLink: "https://github.com/almondbite/artemis",
    },
    {
      title: "Helenus",
      description: "An asynchronous bot that chains multiple fallback APIs to aggregate real-time financial date. It can give automated market briefings and technical scoring.",
      stack: ["Python", "Pandas"],
      repoLink: "https://github.com/almondbite/helenus",
    },
    {
      title: "League of Legends Rank OBS Overlay",
      description: "A custom streaming tool that integrates with the Riot Games API to render dynamic, real-time statistics.",
      stack: ["JavaScript", "Riot Games API", "React"],
      repoLink: null,
    }
  ];

  return (
    <main className="max-w-4xl mx-auto p-8 sm:p-12 md:p-20 pt-32">
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Hi, I'm Kenny.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          I'm a CS graduate at the University of Minnesota with a background in IT systems, full-stack development, and UX design. I like to build things that are useful to help with my many interests!
        </p>
  
        <div className="flex gap-4">
          <a href="https://github.com/almondbite" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium hover:opacity-80 transition-opacity">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            View Resume
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md font-mono text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-medium">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-500">Source Code ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Balloon Button*/}
      <button 
        onClick={() => balloons()} 
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "all 3s ease-in-out", // Makes it glide smoothly
          zIndex: 50 // Makes it floats above text
        }}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 shadow-lg cursor-pointer"
      >
        🎈 Catch Me!
      </button>

    </main>
  );
}