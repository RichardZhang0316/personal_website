import Image from "next/image";
import Navbar from "../components/navigation_bar";
import { Geist, Geist_Mono } from "next/font/google";
import { personal, education, courses, skills, experiences, projects } from "../data/experience";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen`}>
      <Navbar />

      {/* Summary Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {personal.name}
            </h1>


            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              {personal.summary}
            </p>
            <p className="mt-4 text-lg font-medium">
              {personal.objective}
            </p>

            {/* <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{edu.degree} in {edu.major}</p>
                <p className="text-sm text-gray-500">{edu.startDate.split('-')[0]} - {edu.endDate.split('-')[0]}</p>
              </div>
            ))}
          </div> */}

            <div className="flex gap-4 mt-6">
              <a
                href={`mailto:${personal.email}`}
                className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition font-medium"
              >
                Email
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-black dark:border-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-md hover:bg-blue-700 transition font-medium"
              >
                LinkedIn</a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            {/* {personal.profile_photo} */}
            <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {/* {personal.profile_photo} */}
              <Image
                src="/profile_photo.jpeg"
                alt={personal.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex items-start gap-6 border-l-4 border-black dark:border-white pl-4 py-2">
              {/* add university logo */}
              <div className="w-30 h-30 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden flex items-center justify-center p-2">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xl font-bold">
                    {edu.institution.charAt(0)}
                  </div>
                )}
              </div>

              {/* education information */}
              <div>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree} in {edu.major}</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {edu.startDate.split('-')[0]} - {edu.endDate.split('-')[0]}
                </p>
                <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                {edu.achievements.length > 0 && (
                  <div className="mt-2">
                    <span className="font-medium">Achievements: </span>
                    {edu.achievements.join(', ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="px-4 py-2 border border-black dark:border-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-800 relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-400 dark:text-gray-500">No image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{project.subtitle}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <Link
                  href={`/projects#project-${project.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="mt-2">Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}
