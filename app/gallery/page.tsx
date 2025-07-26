import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-black mb-8">Gallery</h1>
          
          <div className="glass-card p-8 mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Here we will be sharing photos and videos once the workshop is concluded
              The Agenda will be defined by Ambassadors who will be invited to submit their own workshop topics which they want to host as speakers and presenters.
            </p>
          </div>

          {/* Photos Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-black mb-8">Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder photo cards */}
              <div className="glass-card p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Photos coming soon</p>
                </div>
              </div>
              <div className="glass-card p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Photos coming soon</p>
                </div>
              </div>
              <div className="glass-card p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Photos coming soon</p>
                </div>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <h2 className="text-3xl font-semibold text-black mb-8">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder video cards */}
              <div className="glass-card p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.353.353a1 1 0 00.707.293H15a2 2 0 012 2v2a2 2 0 01-2 2h-2.343M7 8v4m0 0v4m0-4h4" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Workshop highlights</p>
                  <p className="text-gray-500 text-xs mt-1">Video coming soon</p>
                </div>
              </div>
              <div className="glass-card p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.353.353a1 1 0 00.707.293H15a2 2 0 012 2v2a2 2 0 01-2 2h-2.343M7 8v4m0 0v4m0-4h4" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Speaker sessions</p>
                  <p className="text-gray-500 text-xs mt-1">Video coming soon</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
} 