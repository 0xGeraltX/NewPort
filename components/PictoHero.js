export default function PictoHero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container pt-32">
        <p className="text-sm text-gray-500 mb-3">
          Web3 Developer • Testnet Tester • Airdrop Hunter
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Building & Testing <br />
          <span className="text-blue-500">Web3 Ecosystems</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          I work with blockchain testnets, smart contracts, NFTs and
          decentralized applications to help early-stage Web3 projects grow.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
