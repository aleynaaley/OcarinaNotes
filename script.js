document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("notesInput").value.trim();
  const output = document.getElementById("output");
  output.innerHTML = ""; // önceki sonuçları temizle

  // Nota -> resim dosyası (dosya isimleri sadece resim dosyası adı olacak)
  const noteMap = {
    "C": "C.png",
    "D": "D.png",
    "E": "E.png",
    "F": "F.png",
    "G": "G.png",
    "A": "A.png",
    "B": "B.png",
    "c": "c.png",
    "d": "d.png",
    "e": "e.png",
    "f": "f.png",
    "c_y": "c_y.png"
    // gerekiyorsa buraya ekle...
  };

  const imageFolder = "images/ocarina/"; // resimler burada

  if (!input) {
    output.innerHTML = `<div class="error">Please enter the notes </div>`;
    return;
  }

  // Tüm token'ları al ve geçersiz olanları tespit et
  const allTokens = input.split(/\s+/).filter(Boolean);
  const invalidTokens = allTokens.filter(t => !Object.prototype.hasOwnProperty.call(noteMap, t));

  if (invalidTokens.length > 0) {
    const uniqueInvalid = [...new Set(invalidTokens)];
    output.innerHTML = `<div class="error">ERROR : Invalid character(s) entered: ${uniqueInvalid.join(", ")}</div>`;
    return; // hiçbir nota gösterilmez
  }

  // Eğer tüm token'lar geçerliyse, satır satır göster
  const lines = input.split("\n");
  lines.forEach((line, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "line";

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. Line`;
    wrapper.appendChild(title);

    const notesDiv = document.createElement("div");
    notesDiv.className = "notes";

    const notes = line.split(/\s+/).filter(Boolean);
    notes.forEach(note => {
      const img = document.createElement("img");
      img.src = imageFolder + noteMap[note];
      img.alt = note;
      notesDiv.appendChild(img);
    });

    wrapper.appendChild(notesDiv);
    output.appendChild(wrapper);
  });
});
