export default function PictoNavbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur z-50">
      <div className="container flex justify-between items-center py-4">
        <h1 className="font-bold text-lg">Geralt | Web3</h1>

        <div className="space-x-6 text-sm">
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
