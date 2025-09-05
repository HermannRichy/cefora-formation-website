export default function Testimonials() {
  return (
    <main className="bg-white text-black">
      {/* Header section */}
      <section className="bg-[#0a0a0a] text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ce que nos Étudiants<br /> disent à propos de <span className="text-yellow-400">CEFORA FORMATION</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Découvrez les témoignages et enseignements de nos meilleurs étudiants qui ont réussi dans leurs études en génie logiciel.
        </p>
      </section>

      {/* First testimonials section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">
          Meilleur diplômé en génie logiciel
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Ray Newton"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Michel</h4>
            <p className="text-sm text-gray-600">“Un endroit intéressant pour étudier”</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="Norman Cobb"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Komlan</h4>
            <p className="text-sm text-gray-600">
              Cefora rend l’apprentissage passionnant et pratique.”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/50.jpg"
              alt="Norman Cobb"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Christian</h4>
            <p className="text-sm text-gray-600">
              “Cefora m’a confié d’excellents projets de stage.”
            </p>
          </div>
        </div>
      </section>

      {/* Second testimonials section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">
          Meilleur diplômé en génie logiciel
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/60.jpg"
              alt="Ray Newton"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Bidene</h4>
            <p className="text-sm text-gray-600">“Un endroit formidable pour apprendre.”</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/70.jpg"
              alt="Norman Cobb"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Chivas</h4>
            <p className="text-sm text-gray-600">
              “Cefora met à disposition des projets innovants et exceptionnels.”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Norman Cobb"
              className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold text-lg">Rodrigue</h4>
            <p className="text-sm text-gray-600">
              “Cefora rend chaque étude exceptionnelle et mémorable.”  
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-center text-black">
        <h3 className="text-2xl font-semibold mb-6">
          Rejoignez-nous pour réussir ensemble
        </h3>
        <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
          Commencer
        </button>
      </section>
    </main>
  );
}
