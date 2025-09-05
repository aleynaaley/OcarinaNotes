import { Music, Plus, Download, FileImage, FileText } from "lucide-react";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function OutputCard({ outputLines, noteMap }) {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  // PNG indir
  const downloadAsPNG = async () => {
    const element = document.getElementById("finger-positions-content");
    if (!element) return alert("Item not found!");

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#3ea6a8ff",
        scale: 2,
        useCORS: true,
        scrollY: -window.scrollY,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const link = document.createElement("a");
      link.download = `ocarina-notes-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("PNG export error:", err);
      alert("PNG Could not save.");
    }
  };

  // PDF indir
  const downloadAsPDF = async () => {
    const element = document.getElementById("finger-positions-content");
    if (!element) return alert("Item not found!");

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#3ea6a8ff",
        scale: 2,
        useCORS: true,
        scrollY: -window.scrollY,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`ocarina-notes-${Date.now()}.pdf`);
    } catch (err) {
      console.error("PDF export error:", err);
      alert("PDF Could not save.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
        {/* Üst kısım */}
        <div className="bg-white/10 backdrop-blur-md p-4 border-b border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-white text-xl font-semibold flex items-center space-x-2">
              <Music className="w-5 h-5" />
              <span>Finger Positions</span>
            </h2>

            <div className="flex gap-2">
              <button className="flex items-center space-x-2 bg-gray-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add to Library (Users)</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>

                {isDownloadOpen && (
                  <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-48">
                    <div className="p-2">
                      <button
                        onClick={() => {
                          downloadAsPNG();
                          setIsDownloadOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                      >
                        <FileImage className="w-4 h-4 text-blue-500" />
                        <span>Download to PNG</span>
                      </button>
                      <button
                        onClick={() => {
                          downloadAsPDF();
                          setIsDownloadOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                      >
                        <FileText className="w-4 h-4 text-red-500" />
                        <span>Download to PDF</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Çıktı Alanı */}
        <div id="finger-positions-content" className="p-6">
          {outputLines.map((line, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {idx + 1}. Line
                </div>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {line.map((note, i) => (
                  <div key={i} className="group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:border-white/40 transition-all group-hover:scale-105 shadow-lg">
                      <div className="aspect-square rounded-lg mb-2 flex items-center justify-center overflow-hidden bg-white">
                        <img
                          src={`/ocarina/${noteMap[note]}`}
                          alt={note}
                          className="w-full h-full object-cover rounded-lg"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <p className="text-center text-white font-medium text-sm">
                        {note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
