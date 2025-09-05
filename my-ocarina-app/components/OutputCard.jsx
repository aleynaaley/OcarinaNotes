export default function OutputCard({ outputLines, noteMap }) {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 my-6 w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow">
      {/* Butonlar buraya taşındı */}
      <div className="flex justify-end gap-2 mb-4">
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors">ADD LIB</button>
        <button className="bg-gray-700 text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition-colors">DOWNLOAD</button>
      </div>

      {outputLines.map((line, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-pink-700 font-semibold mb-2">{idx + 1}. Line</h3>
          <div className="flex flex-wrap gap-4">
            {line.map((note, i) => (
              <img
                key={i}
                src={`/ocarina/${noteMap[note]}`}
                alt={note}
                className="w-28 hover:scale-110 transition-transform shadow-md rounded-xl"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
