import { useState } from "react";
import HeaderCard from "/components/HeaderCard";
import InfoCard from "/components/InfoCard";
import InputCard from "/components/InputCard";
import OutputCard from "/components/OutputCard";

function App() {
  const [notes, setNotes] = useState("");
  const [outputLines, setOutputLines] = useState([]);

  const noteMap = {
    C: "C.png", Do: "C.png", D: "D.png", Re: "D.png",
    E: "E.png", Mi: "E.png", F: "F.png", Fa: "F.png",
    G: "G.png", Sol: "G.png", A: "A.png", La: "A.png",
    B: "B.png", Si: "B.png", c: "c_y.png", do: "c_y.png",
    d: "d_y.png", re: "d_y.png", e: "e_y.png", mi: "e_y.png",
    f: "f_y.png", fa: "f_y.png"
  };

  const handleConvert = () => {
    if (!notes.trim()) return alert("Please enter notes!");
    const allTokens = notes.split(/\s+/).filter(Boolean);
    const invalidTokens = allTokens.filter(t => !noteMap[t]);
    if (invalidTokens.length > 0) return alert(`Invalid characters: ${[...new Set(invalidTokens)].join(", ")}`);
    const lines = notes.split("\n").map(l => l.split(/\s+/).filter(Boolean));
    setOutputLines(lines);
  };

  const clearNotes = () => {
    setNotes("");
    setOutputLines([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-500 p-5 flex flex-col items-center relative font-sans">
      <div className="absolute top-5 left-5 text-white text-3xl cursor-pointer hover:text-yellow-300 transition-colors">☰</div>
      <HeaderCard />
      <InfoCard />
      <InputCard notes={notes} setNotes={setNotes} handleConvert={handleConvert} clearNotes={clearNotes} />
      {outputLines.length > 0 && (
        <OutputCard outputLines={outputLines} noteMap={noteMap} />
      )}
    </div>
  );
}

export default App;
