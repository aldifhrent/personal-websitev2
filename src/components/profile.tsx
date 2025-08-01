"use client";

import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HyperText } from "./magicui/hyper-text";

export default function Profile() {
  const [hover, setHover] = useState(false);
  const isOpenToWork = true;

  return (
    <section className="dark:bg-transparent mt-12" id="home">
      <motion.div
        className="container mx-auto mt-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col ">
          {/* Foto + Nama + Job */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6  w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center md:text-left">
              <HyperText
                className="text-xl"
                duration={1000}
                animateOnHover={true}
              >
                Aldi Ahmad Fahrizi Ilmawan
              </HyperText>
            </div>
          </motion.div>

          {/* Deskripsi */}
          <motion.p
            className="ext-sm md:text-md max-w-2xl text-gray-600 dark:text-gray-300 text-center md:text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I am a passionate software engineer with a focus on web development,
            specializing in building scalable and efficient applications. I love
            exploring new technologies and continuously improving my skills.
          </motion.p>

          {/* Status & Lokasi */}

          <motion.div
            className="flex flex-wrap items-center gap-4 mt-4 text-sm justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
              <Link
                href="/hire-me"
                className="text-sm font-semibold text-green-800 dark:text-green-100 font-mono tracking-tight"
              >
                Hire Me — Open to Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
