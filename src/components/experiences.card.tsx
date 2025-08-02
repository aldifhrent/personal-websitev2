import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WorkExperienceCardProps {
  id: string | number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  index: number;
  highlights: string[];
  technologies: string[];
}

const colors = [
  {
    light: "bg-blue-200 border-blue-200 text-blue-700 hover:bg-blue-100",
    dark: "dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30",
  },
  {
    light: "bg-green-200 border-green-200 text-green-700 hover:bg-green-100",
    dark: "dark:bg-green-900/20 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30",
  },
  {
    light:
      "bg-purple-200 border-purple-200 text-purple-700 hover:bg-purple-100",
    dark: "dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30",
  },
  {
    light: "bg-pink-200 border-pink-200 text-pink-700 hover:bg-pink-100",
    dark: "dark:bg-pink-900/20 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-900/30",
  },
  {
    light:
      "bg-orange-200 border-orange-200 text-orange-700 hover:bg-orange-100",
    dark: "dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/30",
  },
];

export default function WorkExperienceCard(props: WorkExperienceCardProps) {
  return (
    <motion.li
      className="relative ml-6 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
    >
      {/* Dot timeline kiri */}
      <motion.span
        className="absolute w-3.5 h-3.5 bg-blue-600 rounded-full -left-8 top-0 border-2 border-white dark:border-gray-900 transition-colors origin-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: props.index * 0.1 }}
      />

      {/* Konten kartu */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50  dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-400">
        <div className="flex justify-between items-start mb-2 flex-wrap">
          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-900 dark:group-hover:text-indigo-300 transition-colors duration-300">
              {props.company}
            </h2>
            <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
              {props.position}
            </h3>
          </div>
          <span className="whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-indigo-800 dark:text-indigo-100 group-hover:bg-indigo-100 group-hover:text-indigo-800 dark:group-hover:bg-indigo-700 dark:group-hover:text-white transition-all duration-300">
            {props.startDate} –{" "}
            {["Now", "Present"].includes(props.endDate) ? (
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-100 ml-1">
                Now
              </span>
            ) : (
              <span className="ml-1">{props.endDate}</span>
            )}
          </span>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors duration-300">
          {props.description}
        </p>

        <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-700 dark:text-gray-300">
          {props.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {props.technologies.map((tech, index) => {
            const colorIndex = (tech.length + index) % colors.length;
            const color = colors[colorIndex];

            return (
              <div
                key={index}
                className={cn(
                  "px-3 py-1 text-xs rounded-full border ",
                  color.light,
                  color.dark
                )}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </motion.li>
  );
}