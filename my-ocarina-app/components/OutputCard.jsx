export default function OutputCard({ outputLines, noteMap }) {
  return (
    <div className="bg-white rounded-xl p-6 my-4 w-full max-w-3xl shadow-lg min-h-[120px]">
      {outputLines.map((line, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-green-900 font-semibold mb-2">{idx + 1}. Line</h3>
          <div className="flex flex-wrap gap-3">
            {line.map((note, i) => (
              <img
                key={i}
                src={`/ocarina/${noteMap[note]}`}
                alt={note}
                className="w-28 hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
