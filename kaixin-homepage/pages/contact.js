import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { personal } from "../data/experience";
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

export default function ExperiencePage() {
    return (
        <div className={`${geistSans.className} ${geistMono.className} min-h-screen`}>
            <Navbar />

            <main>
                {/* Header */}
                <div className="bg-gray-50 dark:bg-gray-800 py-12">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-center">Contact</h1>
                    </div>
                </div>

                {/* Contact Section */}
                <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-between">
                        <div>
                            <p className="text-lg mb-4">
                                Feel free to reach out for opportunities!
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <a href={`mailto:${personal.email}`} className="hover:underline">
                                        {personal.email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href={`tel:${personal.phone}`} className="hover:underline">
                                        {personal.phone}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                                    </svg>
                                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        GitHub
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.298-1.39-2.298-1.397 0-1.61 1.09-1.61 2.23v4.246h-2.667V8.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.21 1.778 3.21 4.092v3.713zM7 8.75H4.333V16.338H7V8.75zM5.667 4.5a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z" />
                                    </svg>
                                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:text-right">
                            <p className="text-lg font-medium mb-2">Current Location</p>
                            <p>Philadelphia, PA, US</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p>© {new Date().getFullYear()} Kaixin Zhang. All rights reserved.</p>
                <p className="mt-2">Built with Next.js</p>
            </footer>
        </div>
    );
}