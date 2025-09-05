export default function InputCard({ notes, setNotes, handleConvert, clearNotes }) {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 my-6 w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-purple-800 font-semibold mb-3">Write your notes here</h2>
      <textarea
        className="w-full h-36 p-4 border border-gray-300 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all resize-none"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={"Example:\nAAAA CCC\nGGAA B\n..."}
      />
      <div className="flex gap-3 mt-4">
        <button onClick={handleConvert} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-colors">SHOW</button>
        <button onClick={clearNotes} className="bg-red-500 text-white px-5 py-2 rounded-2xl hover:bg-red-600 transition-colors">CLEAR</button>
      </div>
    </div>
  );
}
