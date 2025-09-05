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
    C:"C.png", Do:"C.png", D:"D.png", Re:"D.png",
    E:"E.png", Mi:"E.png", F:"F.png", Fa:"F.png",
    G:"G.png", Sol:"G.png", A:"A.png", La:"A.png",
    B:"B.png", Si:"B.png", c:"c_y.png", do:"c_y.png",
    d:"d_y.png", re:"d_y.png", e:"e_y.png", mi:"e_y.png",
    f:"f_y.png", fa:"f_y.png"
  };

  const handleConvert = () => {
    if (!notes.trim()) {
      alert("Please enter your notes!");
      return;
    }
    
    const allTokens = notes.split(/\s+/).filter(Boolean);
    const invalidTokens = allTokens.filter(t => !noteMap[t]);
    
    if (invalidTokens.length > 0) {
      alert(`Invalid character(s): ${[...new Set(invalidTokens)].join(", ")}`);
      return;
    }
    
    const lines = notes.split("\n").map(l => l.split(/\s+/).filter(Boolean));
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