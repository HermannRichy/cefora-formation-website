import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-white">
      {/* Section Hero*/}
      <div className="relative bg-[#232C64] py-20 overflow-hidden">
        {/* Quadrillage*/}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 z-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => {
            const isLastCol = (i + 1) % 6 === 0;
            const isLastRow = i >= 24;
            return (
              <div
                key={i}
                className={`border-r border-b border-[#202337] ${
                  isLastCol ? 'border-r-0' : ''
                } ${isLastRow ? 'border-b-0' : ''}`}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full min-h-[60vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center h-full gap-8 lg:gap-12 w-full">
           <div className="md:w-1/2 w-full text-center md:text-left relative">
              {/* Apostrophe mobile */}
              <div
                className="md:hidden mx-auto text-white text-[120px] font-serif"
                style={{
                  lineHeight: '0.5',
                  marginTop: '-20px',
                  marginBottom: '-40px',
                }}
              >
                “
              </div>

              <div className="relative md:mt-0 -mt-6">
                <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  <span className="block">Derrière chaque compétence, </span>
                  <span className="text-[#FED136]">une vision</span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg mx-auto md:mx-0 max-w-md">
                  Cefora Formation est une école de formation technique et
                  professionnelle située à Cotonou, Agla Hlazounto, avec plus de
                  17 ans d’existence et d’expérience.
                </p>
              </div>
            </div>

            {/* Apostrophe desktop */}
            <div className="hidden md:block md:w-1/2 relative">
              <div
                className="absolute text-white text-[280px] lg:text-[322px] font-serif"
                style={{
                  width: '280px',
                  height: '340px',
                  top: '-20px',
                  right: '0',
                  lineHeight: '0.5',
                }}
              >
                “
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <section className="py-12 sm:py-16 -mt-20 sm:-mt-24 relative z-20">
          <div className="flex flex-wrap justify-center gap-25 max-w-[900px] mx-auto">
            {/* Carte 1 */}
            <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/salle.jpg"
                  alt="Innovation"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-400 to-transparent opacity-70"></div>
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
            </div>

            {/* Carte 2 */}
            <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/école.jpg"
                  alt="Protection"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-700 to-transparent opacity-70"></div>
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#ff6200] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
            </div>

            {/* Carte 3 */}
            <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/two-prof.jpg"
                  alt="Expertise"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-70"></div>
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
            </div>
          </div>
        </section>

        {/* Section enseignants */}
        <section className="py-12 sm:py-16 lg:py-24 max-w-[900px] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 xl:gap-16">
            <div className="w-full lg:w-2/5 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                <span className="text-[#FED136] font-title">À propos</span> de nous
              </h2>
              <p className="font-sans text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
                Nous ne sommes pas un centre de formation comme les autres. Nous
                réinventons l’apprentissage pour répondre aux défis d’aujourd’hui.
                Notre mission : former des professionnels compétents et épanouis,
                prêts à exceller dans un monde en constante évolution.
              </p>

              <div className="mt-4 sm:mt-6">
                <Link
                  href="formations"
                  className="inline-block bg-[#DB3234] hover:bg-[#e55a00] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                >
                  Voir nos formations
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-3/5 flex flex-col gap-8 sm:gap-10 relative mt-6 lg:mt-0 items-center lg:items-start">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 ml-0 sm:ml-10 md:ml-16">
                <div className="flex flex-col items-center">
                  <div className="relative mt-5 sm:mt-8">
                    <div className="absolute top-1 -left-10 sm:-left-12 w-4 h-4 bg-blue-500 transform rotate-45 z-10"></div>
                    <div className="w-36 sm:w-40 h-52 sm:h-60 bg-gray-200 rounded-3xl overflow-hidden mb-3">
                      <Image
                        src="/images/etudiant.jpg"
                        alt="Formateur 1"
                        width={160}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg">
                    Enjoy & Playful
                  </span>
                </div>
                <div className="pt-3 sm:pt-6 relative text-center sm:text-left">
                  <div className="absolute -top-2 sm:-top-3 left-6 sm:left-8 w-4 h-4 bg-red-500 transform rotate-45"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-5 pt-2 ml-0 sm:ml-3">
                    We have great <br /> <span>teachers</span>
                  </h3>
                </div>
              </div>

              <div className="flex sm:ml-[4rem] md:ml-[6rem] lg:ml-[8rem] xl:ml-[20rem] sm:-mt-5 md:-mt-6 lg:-mt-7 relative">
                <div className="absolute -left-10 sm:-left-12 md:-left-16 top-16 sm:top-20 md:top-24 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rotate-45 z-10"></div>
                <div className="flex flex-col items-center">
                  <div className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/images/proff.jpg"
                      alt="Formatrice 2"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg mt-2">
                    Enjoy & Playful
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Titre et description alignés à gauche */}
            <div className="mb-10 max-w-[900px] mx-auto text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232C64] font-title mb-4">
                Nos Atouts
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Découvrez les éléments clés qui font la différence chez Cefora Formation : innovation, protection et expertise pédagogique pour nos apprenants.
              </p>
            </div>

            {/* Cartes */}
            <div className="flex flex-wrap justify-between gap-6 max-w-[900px] mx-auto">
              {/* Carte 1 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/salle.jpg"
                    alt="Innovation"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-400 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>

            {/* Carte 2 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/école.jpg"
                    alt="Protection"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#ff6200] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>

            {/* Carte 3 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/two-prof.jpg"
                    alt="Expertise"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>
            </div>
          </div>
        </section>

      
        <section className="py-12 sm:py-16 -mt-20 sm:-mt-24 relative z-20">
          <div className="max-w-[900px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* Texte */}
            <div className="w-full lg:w-1/2 text-center sm:text-left">
              <h2 className="text-[#FED136] text-2xl font-extrabold mb-4 font-title">
                Notre mission
              </h2>
              <div className="text-gray-700 text-base space-y-3">
                <p>
                  Chez <span className="font-semibold text-[#232C64] font-title">CEFORA</span>{" "}
                  <span className="font-semibold text-[#DB3234] font-title">FORMATION</span>, nous façonnons l’avenir
                  de nos apprenants grâce à des formations pratiques, innovantes et tournées vers l’emploi.
                </p>
                <p>
                  Nos parcours vous rendent autonomes, compétitifs et prêts à réussir,
                  ici comme à l’international. Commencez à Cotonou, progressez en Afrique
                  et en Europe grâce à nos partenariats.
                </p>
              </div>
            </div>

            {/* Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <Image
              src="/images/interface.png" // remplace par le chemin de ton image
              alt="Notre mission"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default About;
