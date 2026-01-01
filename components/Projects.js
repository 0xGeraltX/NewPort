'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    name: 'Sui',
    role: 'Testnet Contributor',
    description: 'Sui testnet participation and ecosystem testing.',
    image: '/projects/sui.png',
    website: 'https://sui.io',
    twitter: 'https://twitter.com/SuiNetwork'
  },
  {
    name: 'Arbitrum',
    role: 'Early User',
    description: 'L2 interaction, bridge usage and ecosystem exploration.',
    image: '/projects/arbitrum.png',
    website: 'https://arbitrum.io',
    twitter: 'https://twitter.com/arbitrum'
  },
  {
    name: 'Optimism',
    role: 'Web3 Tester',
    description: 'Optimism ecosystem testing and early adoption.',
    image: '/projects/optimism.png',
    website: 'https://optimism.io',
    twitter: 'https://twitter.com/optimism'
  },
  {
    name: 'Aptos',
    role: 'Testnet Participant',
    description: 'Aptos testnet participation and feedback.',
    image: '/projects/aptos.png',
    website: 'https://aptosfoundation.org',
    twitter: 'https://twitter.com/Aptos'
  },
  {
    name: 'Caldera',
    role: 'Ecosystem Contributor',
    description: 'Modular rollup ecosystem exploration.',
    image: '/projects/caldera.png',
    website: 'https://www.caldera.xyz',
    twitter: 'https://twitter.com/calderaxyz'
  },
  {
    name: 'Wormhole',
    role: 'Cross-chain User',
    description: 'Cross-chain bridge usage and ecosystem interaction.',
    image: '/projects/wormhole.png',
    website: 'https://wormhole.com',
    twitter: 'https://twitter.com/wormholecrypto'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer p-6 rounded-xl bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {p.role}
              </p>
            </div>
          ))}
        </div>
