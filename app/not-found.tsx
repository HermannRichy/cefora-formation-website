// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  const angleStep = 15; // Pas de rotation entre chaque chiffre
  
  return (
    <section className="relative w-full min-h-screen bg-[#232C64] overflow-hidden">
      {/* Quadrillage en arrière-plan */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`border-r border-b border-[#202337] 
              ${(i + 1) % 6 === 0 ? "border-r-0" : ""} 
              ${i >= 24 ? "border-b-0" : ""}`}
          />
        ))}
      </div>

      {/* Losanges (étoiles) autour du texte 404 */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Disposition des étoiles sous forme de losanges */}
        <div className="absolute top-[20%] left-[25%] w-3 h-3 bg-[#FFB800] transform rotate-45 opacity-80"></div>
        <div className="absolute bottom-[58%] right-[73%] w-3 h-3 bg-red-500 transform rotate-45 opacity-80"></div>
        <div className="absolute top-[22%] left-[42%] w-3 h-3 bg-blue-500 transform rotate-45 opacity-80"></div>
        <div className="absolute top-[50%] left-[44%] w-3 h-3 bg-green-500 transform rotate-45 opacity-80"></div>
        <div className="absolute top-[20%] left-[57%] w-3 h-3 bg-black transform rotate-45 opacity-80"></div>
        <div className="absolute top-[43%] left-[57%] w-3 h-3 bg-white transform rotate-45 opacity-80"></div>
        <div className="absolute top-[35%] left-[70%] w-3 h-3 bg-gray-400 transform rotate-45 opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-8 text-center">
        <div className="relative flex items-center justify-center" style={{ transform: 'translateY(40px)' }}>
          {/* 404 suivi d'une courbe */}
          <h1 className="flex space-x-1 text-[#DB3234] font-bold text-[8rem] sm:text-[9rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            {['4', 
              <span 
                key="0" 
                style={{ 
                  transform: 'translateY(25px)',  // Le 0 ne tourne plus
                  transformOrigin: "center bottom" 
                }} 
                className="inline-block"
              >
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-full bg-[#FFD700]"></div> 
                0
              </span>, 
            '4'].map((digit, index) => (
              <span
                key={index}
                style={{
                  transform: `rotate(${index * angleStep - 22.5}deg)`,  // Rotation seulement sur 4 et 4
                  transformOrigin: "center bottom",
                }}
                className="inline-block"
              >
                {digit}
              </span>
            ))}
          </h1>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Page non trouvée
        </h2>
        <p className="text-lg text-gray-300 mt-4 md:mt-6">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-6 md:mt-8">
          <Link
            href="/"
            aria-label="Retour à l&apos;accueil"
            className="inline-block bg-[#DB3234] text-white font-semibold text-base md:text-lg py-3 px-6 md:py-3.5 md:px-8 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc947]"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
