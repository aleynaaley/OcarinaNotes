document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("notesInput").value.trim();
  const output = document.getElementById("output");
  output.innerHTML = ""; // önceki sonuçları temizle

  // Nota -> resim dosyası (dosya isimleri sadece resim dosyası adı olacak)
  const noteMap = {
  // Büyük harfler
  "C": "C.png", "Do": "C.png",
  "D": "D.png", "Re": "D.png",
  "E": "E.png", "Mi": "E.png",
  "F": "F.png", "Fa": "F.png",
  "G": "G.png", "Sol": "G.png",
  "A": "A.png", "La": "A.png",
  "B": "B.png", "Si": "B.png",

  // Küçük harfler (oktav yukarı)
  "c": "c_y.png", "do": "c_y.png",
  "d": "d_y.png", "re": "d_y.png",
  "e": "e_y.png", "mi": "e_y.png",
  "f": "f_y.png", "fa": "f_y.png",

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
