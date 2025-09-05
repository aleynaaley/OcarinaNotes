export default function InputCard({ notes, setNotes, handleConvert }) {
  return (
    <div className="bg-white rounded-xl p-6 my-4 w-full max-w-3xl shadow-lg flex flex-col">
      <label className="text-gray-800 font-medium mb-2">Write your notes:</label>
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg mb-3 focus:border-green-700 focus:ring focus:ring-green-200"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Example: A A C G A A G..."
      />
      <button
        className="bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition"
        onClick={handleConvert}
      >
        SHOW
      </button>
    </div>
  );
}
