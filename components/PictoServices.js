export default function PictoServices() {
  const services = [
    {
      title: "Web3 Testing",
      desc: "Testnet participation, DApps testing, bug reporting and early access validation."
    },
    {
      title: "Smart Contracts",
      desc: "Deploying and interacting with Solidity & Rust based smart contracts."
    },
    {
      title: "NFT & Ecosystem",
      desc: "NFT minting, marketplaces, bridges and cross-chain ecosystems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow"
            >
              <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
