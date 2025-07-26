import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Cardano Ambassador Workshop - EUROPE 
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                A workshop by Ambassadors, for Ambassadors, piloting in Europe, expanding to the globe
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Info Dashboard */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">            
            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Who Section */}
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-8 bg-dark-red rounded-full"></div>
                  <h3 className="text-2xl font-bold text-dark-red">Who</h3>
                </div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Cardano Ambassadors in Europe
                </p>
              </div>

              {/* Where Section */}
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-8 bg-dark-red rounded-full"></div>
                  <h3 className="text-2xl font-bold text-dark-red">Where</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-dark-red">Berlin Area</p>
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    Exact location to be announced in due time
                  </p>
                </div>
              </div>

              {/* When Section */}
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-8 bg-dark-red rounded-full"></div>
                  <h3 className="text-2xl font-bold text-dark-red">When</h3>
                </div>
                <p className="text-lg font-bold text-dark-red">November 7 - 10</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-up Section - Featured CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Sign up now for the Cardano Ambassador Workshop in Europe.<br />
            </p>
            <a 
              href="https://forms.gle/yK48hKvESjas7w5v7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button-primary px-12 py-5 text-xl font-semibold inline-block"
            >
              Sign Up for Workshop
            </a>
          </div>
        </section>

        {/* Workshop Objectives */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Workshop Objectives
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our three core objectives designed to strengthen the Cardano ambassador community
              </p>
            </div>

            {/* Cards in a grid layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-black mb-6">To Meet & Connect</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To put faces to names, and to connect with other ambassadors across Europe and beyond.
                </p>
              </div>

              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-black mb-6">To Share Insights & Knowledge</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To share insights, expertise and knowledge with other ambassadors in the community.
                </p>
              </div>

              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-black mb-6">To Better Build Together</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
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