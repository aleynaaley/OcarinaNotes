export default function InfoCard() {
    return (
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 my-4 w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">How do you use?</h2>
            <p className="text-gray-800 text-sm">
                With this tool, you can see the notes you write with the finger positions on the ocarina. This platform uses a 12-hole ocarina and internationally standard tuning in C major (C Major).
                <br /><br />
                - Capital letters: C, D, E... = Middle octave (C, D, E...)<br />
                - Lowercase letters: c, d, e... = Upper octave (C, D, E...)<br />
                - You can write Do, Re, Mi, Fa, Sol, La, Si, do, re, mi and fa  or C, D, E, F, G, A, B, c, d, e ve f.
            </p>
        </div>
    );
}

