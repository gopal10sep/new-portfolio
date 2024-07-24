'use client'

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen flex flex-col font-sans">
      <header className="bg-white/80 py-4 md:py-6 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <Link href="#" className="text-2xl font-bold text-primary" prefetch={false}>
          Gopal Kumar
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {["App", "Blog", "Tutorials", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              {item}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {["App", "Blog", "Tutorials", "Contact"].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-lg font-semibold hover:text-primary transition-colors" prefetch={false}>
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-24 md:py-32 space-y-24">
        <IntroSection />
        <TechStackSection />
        <CertificationsSection />
        <ProjectsSection />
        <TutorialsSection />
        <BlogSection />
      </main>
      <footer className="bg-white/80 py-6 text-center text-gray-600 backdrop-blur-md">
        <p>&copy; 2024 Gopal Kumar. All rights reserved.</p>
      </footer>
    </div>
  )
}

function IntroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-primary">Introduction</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-md max-w-2xl mx-auto">
        <ul className="space-y-4 text-left">
          <li><strong className="text-primary">Name:</strong> Gopal Kumar</li>
          <li><strong className="text-primary">Skills:</strong> Web design, Development, AI/LLM Engineering</li>
          <li><strong className="text-primary">Location:</strong> Mountain View, CA</li>
        </ul>
      </div>
    </motion.section>
  )
}

function TechStackSection() {
  const techItems = [
    { Icon: CodepenIcon, name: "React" },
    { Icon: NetworkIcon, name: "Node.js" },
    { Icon: WindIcon, name: "Tailwind CSS" },
    { Icon: DatabaseIcon, name: "MongoDB" },
    { Icon: XIcon, name: "Express" },
    { Icon: GitGraphIcon, name: "Git" },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {techItems.map(({ Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md backdrop-blur-md flex flex-col items-center justify-center transition-all hover:shadow-lg"
          >
            <Icon className="w-12 h-12 mb-4 text-primary" />
            <span className="font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CertificationsSection() {
  const certifications = [
    "AWS Certified Solutions Architect - Associate",
    "Google Cloud Certified Professional Data Engineer",
    "Microsoft Certified: Azure Fundamentals",
    "Scrum Master Certified (SMC)",
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Certifications</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-md max-w-2xl mx-auto">
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React, Node.js, and MongoDB.",
      image: "/placeholder.svg",
    },
    {
      title: "Project 2",
      description: "A mobile-first e-commerce application built with React Native and Firebase.",
      image: "/placeholder.svg",
    },
    {
      title: "Project 3",
      description: "A real-time chat application built with Socket.IO, React, and Node.js.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      id="app"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Live Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md backdrop-blur-md overflow-hidden transition-all hover:shadow-lg"
          >
            <img src={project.image} width={400} height={225} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <Button variant="outline" size="sm" className="w-full">
              View Project
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function TutorialsSection() {
  const tutorials = [
    {
      title: "Tutorial 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg",
    },
    {
      title: "Tutorial 2",
      description: "Dive into the world of Node.js and Express.js with this step-by-step guide.",
      image: "/placeholder.svg",
    },
    {
      title: "Tutorial 3",
      description: "Mastering MongoDB: A comprehensive tutorial on building full-stack applications.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      id="tutorials"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Tutorials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md backdrop-blur-md overflow-hidden transition-all hover:shadow-lg"
          >
            <img src={tutorial.image} width={400} height={225} alt={tutorial.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <Button variant="outline" size="sm" className="w-full">
              View Tutorial
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function BlogSection() {
  const blogPosts = [
    "Optimizing React Performance with Memoization",
    "Building a Scalable and Secure Node.js API with Express",
    "Mastering Responsive Design with Tailwind CSS and CSS Grid",
    "Leveraging MongoDB's Aggregation Pipeline for Complex Queries",
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="blog"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Blog</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-md max-w-2xl mx-auto">
        <ul className="space-y-4">
          {blogPosts.map((post, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              {post}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

// (Include the existing icon components here)

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
