// app/teachers/page.tsx
import Image from "next/image";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

const teachers: Teacher[] = [
  {
    name: "Gildas Koudou",
    role: "Enseignant en programmation",
    image: "/images/teachers1.jpg",
  },
    {
    name: "Clémence Kpadé",
    role: "Professeur de science des données",
    image: "/images/teachers2.jpg",
  },
    {
    name: "Adama Kossou",
    role: "Spécialiste en intelligence artificielle",
    image: "/images/teachers3.jpg",
  },
    {
    name: "Jean-Paul Akpovi",
    role: "Développeur Frontend",
    image: "/images/teachers4.jpg",
  },
    {
    name: "Hermann Ulrich HOUNNOUVI",
    role: "Développeur Backend",
    image: "/images/teachers5.jpg",
  },
    {
    name: "Viviane Houndé",
    role: "Professeur de cybersécurité",
    image: "/images/teachers6.jpg",
  },
];

export default function TeachersPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Enseignants avec les <span className="text-blue-600">meilleures qualifications</span>

        </h1>
        <p className="mt-2 text-gray-600">
          Rencontrez nos formateurs experts, passionnés par l’enseignement et le mentorat des étudiants.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
            <p className="text-sm text-gray-600">{teacher.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}