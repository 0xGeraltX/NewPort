'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Geralt{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                | Web3
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 dark:text-gray-300 max-w-lg">
              Web3 Developer • Airdrop Hunter • Testnet Tester
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Picto-style cards) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 shadow">
              🚀 Web3 Testing
            </div>
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 shadow">
              🧠 Smart Contracts
            </div>
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 shadow">
              🧪 Testnets
            </div>
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 shadow">
              🎯 Airdrops
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
