import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "16th April",
      subtitle: "6:00 - 8:00 pm",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-cyan-900/40 transition-all duration-300 group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-amber-50 mb-4 tracking-tight">
              Blockchain Workshop
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
              Blockchain & Beyond
            </p>
            <ul className="space-y-2 text-gray-400 text-base md:text-lg">
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-2"></span>Blockchain Fundamentals</li>
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-2"></span>Smart Contract Development</li>
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-2"></span>DApp Architecture</li>
            </ul>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ),
    },
    {
      title: "17th April",
      subtitle: "6:00 - 8:00 pm",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-purple-900/40 transition-all duration-300 group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-amber-50 mb-4 tracking-tight">
              AI/ML Workshop
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
              Future of Technology
            </p>
            <ul className="space-y-2 text-gray-400 text-base md:text-lg">
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>Introduction to Machine Learning</li>
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>Deep Learning Fundamentals</li>
              <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>Hands-on AI Project Development</li>
            </ul>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ),
    },
    {
      title: "18th April",
      subtitle: "All Day",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-amber-900/40 transition-all duration-300 group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-amber-50 mb-4 tracking-tight">
              Kaggle Hack
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
              Data Science Challenge
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              Dive into real-world datasets and showcase your data science expertise in our
              special Kaggle competition. Analyze, predict, and win amazing prizes!
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ),
    },
    {
      title: "18th-19th April",
      subtitle: "12:00 Midnight - 12 Noon",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-900/40 transition-all duration-300 group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-amber-50 mb-4 tracking-tight">
              Ideathon
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
              Unleash Your Creativity
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              Transform your innovative ideas into reality! Join us for an exciting
              brainstorming session to refine your concepts before the main event.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ),
    },
    {
      title: "18th-20th April",
      subtitle: "12:00 Midnight - 12 Noon",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-rose-900/40 transition-all overflow-hidden duration-300 group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-amber-50 tracking-tight">
              HACKOWASP
            </h2>
            <p className="text-lg md:text-xl text-gray-100 font-semibold mb-4">
              The Ultimate Coding Challenge
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              36 hours of non-stop innovation! Build, collaborate, and transform your
              ideas into working solutions. May the code be with you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3"
                  alt="hackathon"
                  className="rounded-xl object-cover w-full aspect-video shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                  alt="coding"
                  className="rounded-xl object-cover w-full aspect-video shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div> */}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-4 py-12 bg-transparent relative">
        {/* <motion.div
          style={{
            position: "absolute",
            bottom: "70%",
            right: "10%",
            backgroundColor: "transparent",
            rotateY: 180,
            rotateZ: 12,
            zIndex: 10
          }}
          animate={["initial"]}
          whileHover={["grow"]}
          variants={{
            grow: {
              scale: 1.1
            },
            initial: {
              x: [-20, 30, 15, 20, 35, 26, 45, 58, 54, 51, 54, 35],
              y: [-40, 20, 25, 31, 52, 45, 45, 22, 16, 51, 41, 21],
              transition: {
                delay: 0.3,
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          }}
        >
          <img src="/planet.png" alt="" className="h-32 w-32 md:h-64 md:w-64" />
        </motion.div> */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "40%",
            left: "0%",
            backgroundColor: "transparent",
            rotateY: 180,
            rotateZ: 12,
            zIndex: 10
          }}
          animate={["initial"]}
          whileHover={["grow"]}
          variants={{
            grow: {
              scale: 1.1
            },
            initial: {
              x: [-20, 30, 15, 20, 35, 26, 45, 58, 54, 51, 54, 35],
              y: [-40, 20, 25, 31, 52, 45, 45, 22, 16, 51, 41, 21],
              transition: {
                delay: 0.3,
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          }}
        >
          <img src="/satalite.png" alt="" className="h-32 w-32 md:h-56 md:w-56" />
        </motion.div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-amber-50 mb-4">
            Event Timeline
          </h1>
          <div className="h-1 w-24 bg-amber-50 mb-4 mx-auto rounded-full"></div>
        </div>
        <Timeline data={data} />
      </div>
    </>
  );
}
