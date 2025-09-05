import { Music, Home, HelpCircle } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Ocarina Converter</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Home className="w-5 h-5" />
              <span className="hidden md:inline">Home Page</span>
            </button>
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
              <span className="hidden md:inline">Help</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}