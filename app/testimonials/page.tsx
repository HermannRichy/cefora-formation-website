import Image from "next/image"

export default function Testimonials() {
  const testimonials1 = [
    {
      name: "Ray Newton",
      quote: "An interesting place to study and learn new things every day.",
      image: "/student-yellow-bg-1.jpg",
      bgColor: "bg-amber-400",
    },
    {
      name: "Norman Cobb",
      quote: "Brida makes learning exciting and practical for everyone.",
      image: "/student-yellow-bg-2.jpg",
      bgColor: "bg-amber-400",
    },
    {
      name: "Norman Cobb",
      quote: "Brida has given me excellent internship projects to work on.",
      image: "/student-orange-bg.jpg",
      bgColor: "bg-orange-500",
    },
  ]

  const testimonials2 = [
    {
      name: "Ray Newton",
      quote: "A great place to learn and grow professionally.",
      image: "/student-burgundy-bg.jpg",
      bgColor: "bg-rose-900",
    },
    {
      name: "Norman Cobb",
      quote: "Brida provides innovative and exceptional projects.",
      image: "/student-yellow-bg-3.jpg",
      bgColor: "bg-amber-400",
    },
    {
      name: "Norman Cobb",
      quote: "Brida makes every study exceptional and memorable.",
      image: "/student-purple-bg.jpg",
      bgColor: "bg-purple-300",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              L'avis de nos étudiants sur Cefora 
            </h1>
          </div>

          {/* Large quotation mark */}
          <div className="hidden md:block">
            <svg className="w-32 h-32 text-muted/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>
        </div>
      </section>

      {/* First Testimonials Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            Diplômé en ingénierie logicielle, major de promotion"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials1.map((testimonial, index) => (
              <article
                key={index}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${testimonial.bgColor} p-8 flex items-center justify-center`}>
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Second Testimonials Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            Diplômé d'excellence en génie logiciel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials2.map((testimonial, index) => (
              <article
                key={index}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${testimonial.bgColor} p-8 flex items-center justify-center`}>
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-balance">
           Rejoignez-nous pour réussir ensemble
          </h2>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
            Commencer
          </button>
        </div>
      </section>
    </main>
  )
}