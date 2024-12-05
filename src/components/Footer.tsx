"use client"

function Footer() {
  return (
    <footer className="fixed bottom-10 w-full flex justify-center transition-all duration-300 opacity-0 hover:translate-y-0 hover:opacity-75">
      <div className="bg-gray-600/25 backdrop-blur-sm font-sans text-zinc-50 mx-auto shadow-zinc-400 text-center rounded-2xl shadow-2xl">
        <p className="px-6 py-3">&copy; 2025 Kevin He</p>
      </div>
    </footer>
  );
};

export default Footer;
