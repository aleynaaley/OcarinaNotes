import { Music, Play, Trash2 } from "lucide-react";

export default function InputCard({ notes, setNotes, handleConvert, clearNotes }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        <h2 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
          <Music className="w-5 h-5" />
          <span>Write your notes in this section</span>
        </h2>
        
        <textarea
          className="w-full h-40 p-4 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all resize-none backdrop-blur-sm"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Example :&#10;C D E F G A B&#10;c d e f&#10;Do Re Mi Fa Sol La Si"
        />
        
        <div className="flex flex-wrap gap-3 mt-6">
          <button 
            onClick={handleConvert}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Play className="w-4 h-4" />
            <span>Show</span>
          </button>
          
          <button 
            onClick={clearNotes}
            className="flex items-center space-x-2 bg-red-500/80 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all border border-red-400/50"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
}