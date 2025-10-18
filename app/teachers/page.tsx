import Image from "next/image"

interface Teacher {
  name: string
  role: string
  image: string
  bgColor: string
}

const teachers: Teacher[] = [
  {
    name: "Gildas Koudou",
    role: "Enseignant en programmation",
    image: "/professional-male-teacher.png",
    bgColor: "bg-[#F5E6D3]",
  },
  {
    name: "Clémence Kpadé",
    role: "Professeur de science des données",
    image: "/smiling-male-instructor.jpg",
    bgColor: "bg-[#C8A2C8]",
  },
  {
    name: "Adama Kossou",
    role: "Spécialiste en intelligence artificielle",
    image: "/friendly-male-teacher.jpg",
    bgColor: "bg-[#8B4513]",
  },
  {
    name: "Jean-Paul Akpovi",
    role: "Développeur Frontend",
    image: "/professional-instructor-portrait.jpg",
    bgColor: "bg-[#6B7280]",
  },
  {
    name: "Hermann Ulrich HOUNNOUVI",
    role: "Développeur Backend",
    image: "/images/",
    bgColor: "bg-[#D4A574]",
  },
  {
    name: "Viviane Houndé",
    role: "Professeur de cybersécurité",
    image: "/experienced-teacher-portrait.jpg",
    bgColor: "bg-[#4A3B5C]",
  },
]

const teachingMethods = [
  {
    title: "Conseils pour créer une alchimie",
    description:
      "Découvrez comment établir une véritable connexion entre enseignants et étudiants pour favoriser un apprentissage harmonieux et dynamique.",
    image: "/chemistry-lab-teaching.jpg",
    author: "Tara Scot",
    date: "24 juin 2021",
  },
  {
    title: "Conseils pour comprendre la chimie",
    description:
      "Apprenez des méthodes simples et efficaces pour maîtriser les notions essentielles de chimie et améliorer votre compréhension des réactions chimiques.",
    image: "/science-classroom-teaching.jpg",
    author: "Tara Scot",
    date: "24 juin 2021",
  },
  {
    title: "Astuces pour réussir en chimie",
    description:
      "Découvrez des stratégies pratiques pour mieux étudier, retenir les formules et aborder les expériences de chimie avec confiance et précision.",
    image: "/students-learning-chemistry.jpg",
    author: "Tara Scot",
    date: "24 juin 2021",
  },
]

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div className="text-white">
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Des Enseignants Hautement Qualifiés
            </h1>
            <p className="mt-4 text-pretty text-base text-gray-300 sm:text-lg">
              Nous nous engageons à vous offrir un enseignement de la plus haute qualité
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-lg bg-[#FFD700] sm:h-80 sm:w-80"></div>
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-lg sm:h-80 sm:w-80">
              <Image
                src="/professional-teacher-portrait-smiling.jpg"
                alt="Featured teacher"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-lg ${teacher.bgColor} transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center p-6 pb-8">
                  <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-lg sm:h-56 sm:w-56">
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={`${teacher.name}, ${teacher.role}`}
                      fill
                      sizes="(max-width: 640px) 192px, 224px"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-center text-xl font-bold text-white">{teacher.name}</h2>
                  <p className="mt-1 text-center text-sm text-white/90">{teacher.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">See how we teach</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teachingMethods.map((method, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={method.image || "/placeholder.svg"}
                    alt={method.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-balance text-lg font-bold text-gray-900">{method.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-gray-600">{method.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{method.author}</span>
                    <span>{method.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
