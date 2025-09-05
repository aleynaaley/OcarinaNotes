export default function InfoCard() {
  return (
    <div className="bg-white rounded-xl p-6 my-4 w-full max-w-3xl shadow-lg">
      <h2 className="text-xl font-semibold text-green-800 mb-3">Nasıl Kullanılır?</h2>
      <p className="text-gray-700 text-sm">
        Bu araç sayesinde yazdığınız notaları ocarina üzerindeki parmak pozisyonlarıyla görebilirsiniz.
        <br/><br/>
        - Büyük harfler: C, D, E... = Orta oktav<br/>
        - Küçük harfler: c, d, e... = Üst oktav<br/>
        - İsterseniz Do, Re, Mi, Fa... veya C, D, E, F... şeklinde yazabilirsiniz.
      </p>
    </div>
  );
}
