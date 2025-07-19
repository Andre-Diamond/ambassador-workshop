import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cardano Ambassador Workshop [EUROPE]
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                A workshop by Ambassadors, for Ambassadors, piloting in Europe, expanding to the globe
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                <div className="lg:max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Workshop Objectives
                  </h2>
                  <p className="text-xl text-gray-700">
                    Our three core objectives designed to strengthen the Cardano ambassador community
                  </p>
                </div>
                <div className="mt-6 lg:mt-0">
                  <p className="text-gray-600 text-sm lg:text-right">
                    Building connections, sharing knowledge,<br />
                    and creating a stronger tomorrow together
                  </p>
                </div>
              </div>
            </div>

            {/* Cards in a grid layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">To Meet & Connect</h3>
                <p className="text-gray-700 leading-relaxed">
                  To put faces to names, and to connect with other ambassadors across Europe and beyond.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">To Share Insights & Knowledge</h3>
                <p className="text-gray-700 leading-relaxed">
                  To share insights, expertise and knowledge with other ambassadors in the community.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">To Better Build Together</h3>
                <p className="text-gray-700 leading-relaxed">
                  To level up our skills, and to build together for a greater tomorrow in the Cardano ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 