import { useState } from "react";
import { Info } from "lucide-react";

export default function InfoCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Info className="w-6 h-6 text-blue-300" />
            <h2 className="text-xl font-semibold text-white">How To Use ?</h2>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white/70 hover:text-white transition-colors px-4 py-2 bg-white/10 rounded-lg"
          >
            {isExpanded ? "Hide" : "Show"}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 text-white/90 space-y-3">
            <p>Thanks to this tool, you can see the notes you write with the finger positions on the ocarina. </p>
            <p> On this platform, the ocarina is 12-hole and the international standard tuning is made on C major (C Major).</p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-semibold text-blue-200 mb-2">Capital Letters (Middle Octave)</h3>
                <p className="text-sm">C, D, E, F, G, A, B or Do, Re, Mi, Fa, Sol, La, Si</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-semibold text-purple-200 mb-2">Lowercase Letters (Upper Octave)</h3>
                <p className="text-sm">c, d, e, f or do, re, mi, fa</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}