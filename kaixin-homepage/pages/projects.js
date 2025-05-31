import Image from "next/image";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { projects, categories } from "../data/experience";
import Link from "next/link";
import Navbar from "../components/navigation_bar";
import Head from 'next/head';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedProject, setExpandedProject] = useState(null);

    // filter projects by category
    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // toggle project details
    const toggleProjectDetails = (projectId) => {
        if (expandedProject === projectId) {
            setExpandedProject(null);
        } else {
            setExpandedProject(projectId);
        }
    };

    return (
        <div className={`${geistSans.className} ${geistMono.className} min-h-screen`}>
            <Head>
                <title>Projects - Kaixin Zhang</title>
                <meta name="description" content="Projects of Kaixin Zhang, including personal projects and work projects." />
            </Head>

            <Navbar />
            <main>
            {/* Header */}
            <div className="bg-gray-50 dark:bg-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
            </div>
            </div>

            {/* category filter */}
            <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === "all"
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                        >
                            All Projects
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === category.id
                                        ? "bg-black text-white dark:bg-white dark:text-black"
                                        : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* project list */}
            <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        {filteredProjects.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
                            </div>
                        ) : (
                            filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    id={`project-${project.id}`}
                                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        {/* project image */}
                                        <div className="md:col-span-1 h-48 md:h-full bg-gray-100 dark:bg-gray-800 relative">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={400}
                                                    height={300}
                                                    className="object-cover w-full h-full"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <span className="text-gray-400 dark:text-gray-500">No image</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* project information */}
                                        <div className="md:col-span-2 p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                    {project.period}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 dark:text-gray-400 mb-4">{project.subtitle}</p>
                                            <p className="mb-4">{project.description}</p>

                                            {/* technical tags */}
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* project links */}
                                            <div className="flex items-center gap-6 mb-4">
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                        </svg>
                                                        GitHub Repository
                                                    </a>
                                                )}
                                                {project.demoUrl && (
                                                    <a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>

                                            {/* show more/hide button */}
                                            <button
                                                onClick={() => toggleProjectDetails(project.id)}
                                                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                            >
                                                {expandedProject === project.id ? "Hide details" : "Show details"}
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${expandedProject === project.id ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* expanded project details */}
                                    {expandedProject === project.id && (
                                        <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                            <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {project.details.map((detail, idx) => (
                                                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            </main>

            {/* footer */}
            <footer className="py-8 px-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p>© {new Date().getFullYear()} Kaixin Zhang. All rights reserved.</p>
            </footer>
        </div>
    );
} 