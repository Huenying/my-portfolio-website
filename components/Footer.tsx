"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} Cynthia. Built with{" "}
            <span className="text-red-400">♥</span> using Next.js & Framer Motion
          </p>
          <div className="flex items-center gap-4">
            {["📧", "🐙", "🔗"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all text-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
