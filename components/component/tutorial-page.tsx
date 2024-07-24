'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function TutorialPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.pageYOffset
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tutorial = {
    title: "Running LLMs",
    lastUpdated: "2024-07-23",
    author: "Gopal Kumar",
    subtopics: [
      { id: "llm-apis", title: "LLM APIs" },
      { id: "open-source-llms", title: "Open Source LLMs" },
      { id: "prompt-engineering", title: "Prompt Engineering" },
      { id: "structuring-outputs", title: "Structuring Outputs" }
    ],
    content: {
      "llm-apis": (
        <div>
          <p>
            LLM APIs provide a simple way to integrate large language models into your applications.
            Here's an example of how to use the LLM API to generate text:
          </p>
          <code>
            {`
              import { LLMClient } from '@llm/client';
  
              const client = new LLMClient('YOUR_API_KEY');
              const prompt = 'Write a short story about a character who learns to code.';
              const response = await client.generate(prompt);
  
              console.log(response.text);
            `}
          </code>
          <p>
            This code snippet uses the LLM Client library to send a prompt to the LLM API and generate a response.
          </p>
        </div>
      ),
      "open-source-llms": (
        <div>
          <p>
            Open source LLMs provide a flexible and customizable way to integrate large language models into your applications.
            Here's an example of how to use the Hugging Face Transformers library to train a custom LLM:
          </p>
          <code>
            {`
              import { pipeline } from 'transformers';
  
              const model = pipeline('text-generation', 'gpt2');
              const prompt = 'Write a short story about a character who learns to code.';
              const response = await model(prompt);
  
              console.log(response.text);
            `}
          </code>
          <p>
            This code snippet uses the Hugging Face Transformers library to train a custom LLM and generate text.
          </p>
        </div>
      ),
      "prompt-engineering": (
        <div>
          <p>
            Prompt engineering is the process of designing and optimizing prompts to elicit specific responses from LLMs.
            Here's an example of how to use prompt engineering to improve the quality of generated text:
          </p>
          <code>
            {`
              const prompt = 'Write a short story about a character who learns to code. The story should be set in a futuristic city and include a plot twist.';
              const response = await client.generate(prompt);
  
              console.log(response.text);
            `}
          </code>
          <p>
            This code snippet uses a carefully designed prompt to elicit a specific response from the LLM.
          </p>
        </div>
      ),
      "structuring-outputs": (
        <div>
          <p>
            Structuring outputs is the process of organizing and formatting the output of LLMs to make it more usable and readable.
            Here's an example of how to use structuring outputs to format generated text:
          </p>
          <code>
            {`
              const response = await client.generate(prompt);
              const formattedText = response.text.replace(/\\n/g, '<br>');
  
              console.log(formattedText);
            `}
          </code>
          <p>
            This code snippet uses string replacement to format the generated text and make it more readable.
          </p>
        </div>
      )
    }
  };

  // Calculate reading time (assuming 200 words per minute)
  const wordCount = Object.values(tutorial.content).join(' ').split(' ').length
  const readingTime = Math.ceil(wordCount / 200)

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

      {/* Progress bar */}
      <div 
        className="h-1 bg-green-500 fixed top-[64px] left-0 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="container mx-auto px-4 md:px-6 py-24 md:py-32 space-y-12">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-md"
        >
          <h1 className="text-4xl font-bold mb-4 text-primary">{tutorial.title}</h1>
          <div className="text-gray-600 mb-6">
            <p>Last Updated: {tutorial.lastUpdated}</p>
            <p>Author: {tutorial.author}</p>
            <p>Reading time: {readingTime} min</p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Contents</h2>
          <ul className="space-y-2 mb-8">
            {tutorial.subtopics.map((subtopic) => (
              <li key={subtopic.id}>
                <Link href={`#${subtopic.id}`} className="text-primary hover:underline">
                  {subtopic.title}
                </Link>
              </li>
            ))}
          </ul>
          {tutorial.subtopics.map((subtopic) => (
            <div key={subtopic.id} id={subtopic.id} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{subtopic.title}</h2>
              <p>{tutorial.content[subtopic.id]}</p>
            </div>
          ))}
        </motion.section>
      </main>

      <footer className="bg-white/80 py-6 text-center text-gray-600 backdrop-blur-md">
        <p>&copy; 2024 Gopal Kumar. All rights reserved.</p>
      </footer>
    </div>
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