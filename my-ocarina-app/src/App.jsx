import { useState } from "react";
import Navigation from "./components/Navigation";
import HeaderCard from "./components/HeaderCard";
import InfoCard from "./components/InfoCard";
import InputCard from "./components/InputCard";
import OutputCard from "./components/OutputCard";

function App() {
  const [notes, setNotes] = useState("");
  const [outputLines, setOutputLines] = useState([]);

  const noteMap = {
    // Middle octave (capital)
    C: "C.png",
    D: "D.png",
    E: "E.png",
    F: "F.png",
    G: "G.png",
    A: "A.png",
    B: "B.png",

    // Upper octave (lowercase)
    c: "c_y.png",
    d: "d_y.png",
    e: "e_y.png",
    f: "f_y.png",
    g: "g_y.png",
    a: "a_y.png",
    b: "b_y.png",

    // Sharps (middle octave)
    "C#": "Csharp.png",
    "D#": "Dsharp.png",
    "F#": "Fsharp.png",
    "G#": "Gsharp.png",
    "A#": "Asharp.png",

    // Sharps (upper octave)
    "c#": "c_ysharp.png",
    "d#": "d_ysharp.png",
    "a#": "a_ysharp.png",
  };

  const handleConvert = () => {
    if (!notes.trim()) {
      alert("Please enter your notes!");
      return;
    }

    // Satırlara ayır ve her notayı boşluklara göre böl
    const lines = notes.split("\n").map(line =>
      line
        .trim()
        .split(/\s+/) // boşluklara göre ayır
        .filter(Boolean)
    );

    // Hatalı notaları bul
    const allTokens = lines.flat();
    const invalidTokens = allTokens.filter(t => !noteMap[t]);

    if (invalidTokens.length > 0) {
      alert(`Invalid note(s): ${[...new Set(invalidTokens)].join(", ")}`);
      return;
    }

    setOutputLines(lines);
  };

  const clearNotes = () => {
    setNotes("");
    setOutputLines([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-teal-700 to-cyan-800">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <HeaderCard />
        <InfoCard />
        <InputCard
          notes={notes}
          setNotes={setNotes}
          handleConvert={handleConvert}
          clearNotes={clearNotes}
        />

        {outputLines.length > 0 && (
          <OutputCard outputLines={outputLines} noteMap={noteMap} />
        )}
      </div>

      <footer className="bg-black/20 backdrop-blur-md border-t border-white/20 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white/60">
          <p>&copy;  2025 Aley Aley. Ocarina Note Converter. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
