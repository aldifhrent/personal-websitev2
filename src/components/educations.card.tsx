import React from "react";
interface StudyCardProps {
  logo?: string;
  location: string;
  major: string;
  date: string;
  gpa?: string;
  finalProject?: string;
}
export default function EducationsCard({
  location,
  major,
  date,
}: StudyCardProps) {
  return (
    <div
      className="group bg-gradient-to-r from-slate-50 to-gray-50 
  dark:from-gray-800 dark:to-gray-900 
  border border-gray-200 dark:border-gray-700 
  rounded-xl p-4 transition-all duration-300 
  hover:bg-slate-100 dark:hover:bg-gray-800 
  hover:border-blue-200 dark:hover:border-gray-600 
  hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-indigo-500 transition-colors duration-300" />
            <h1 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-indigo-200 transition-colors duration-300">
              {location}
            </h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 ml-5 transition-colors duration-300">
            {major}
          </p>
        </div>
        <span className="whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-indigo-800 dark:text-indigo-100 group-hover:bg-indigo-100 group-hover:text-indigo-800 dark:group-hover:bg-indigo-700 dark:group-hover:text-white transition-all duration-300">
          {date}
        </span>
      </div>
    </div>
  );
}
