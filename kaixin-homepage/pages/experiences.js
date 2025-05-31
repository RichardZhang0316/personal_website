import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navigation_bar";
import { experiences } from "../data/experience";
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
      <Head>
        <title>Professional Experience - Kaixin Zhang</title>
        <meta name="description" content="Professional experience of Kaixin Zhang, including internships and work history." />
      </Head>
      
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Professional Experience</h1>
          </div>
        </div>
        
        {/* Experience Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-8">
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-black dark:bg-white"></div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <h3 className="text-2xl font-semibold">{exp.position}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      {exp.startDate.split('-')[0]}-{exp.startDate.split('-')[1]} to {exp.endDate.split('-')[0]}-{exp.endDate.split('-')[1]}
                    </p>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      {exp.companyLogo ? (
                        <Image 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`} 
                          width={32} 
                          height={32} 
                          className="rounded-full"
                        />
                      ) : (
                        <span className="text-xl font-bold">{exp.company.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-medium">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Responsibilities & Achievements</h4>
                    <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-gray-300">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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