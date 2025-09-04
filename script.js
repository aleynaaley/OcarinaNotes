document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("notesInput").value.trim();
  const output = document.getElementById("output");

  output.innerHTML = ""; // önceki sonuçları temizle

  // Kullanıcı notası → resim dosyası eşleme
  const noteMap = {
    "C": "C.png",
    "D": "D.png",
    "E": "E.png",
    "F": "F.png",
    "G": "G.png",
    "A": "A.png",
    "B": "B.png",
    "c": "c_y.png",
    "d": "d_y.png",
    "e": "e_y.png",
    "f": "f_y.png",
  };

  // Satır satır ayır
  const lines = input.split("\n");

  lines.forEach((line, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "line";

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. Satır`;
    wrapper.appendChild(title);

    const notesDiv = document.createElement("div");
    notesDiv.className = "notes";

    // Notaları boşluklara göre ayır
    const notes = line.split(/\s+/);

    notes.forEach(note => {
      if (note) {
        const img = document.createElement("img");

        // Eğer eşleme varsa onu kullan, yoksa doğrudan nota.png dene
        img.src = `images/ocarina/${noteMap[note] || (note + ".png")}`;
        img.alt = note;
        notesDiv.appendChild(img);
      }
    });

    wrapper.appendChild(notesDiv);
    output.appendChild(wrapper);
  });
});
