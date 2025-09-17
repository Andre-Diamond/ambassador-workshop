'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Gallery() {
  const [activeContainer, setActiveContainer] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Photo collections organized by category
  const photoCollections = {
    venue: {
      title: "VENUE & LOCATION",
      description: "Explore our workshop venue in the Berlin area",
      images: [
        // High quality images first
        { src: "/gallery/venue/location-image-89980_Nk6d5d4cK.webp", alt: "Networking area - Main venue space" },
        { src: "/gallery/venue/location-image-70701_hu9a0XUWDd.webp", alt: "Venue exterior view - Building facade" },
        { src: "/gallery/venue/location-image-41192_b9wfTIn_Uz.webp", alt: "Conference room setup - Interior space" },
        { src: "/gallery/venue/location-image-27565_hPlHgL0Y3.webp", alt: "Presentation space - Workshop area" },
        { src: "/gallery/venue/location-image-29990_fXG-4LDhNM.webp", alt: "Outdoor area - Venue surroundings" }
      ]
    },
    workshops: {
      title: "WORKSHOP SESSIONS",
      description: "Behind the scenes of our interactive sessions",
      images: [
        { src: "/placeholder-workshop-1.jpg", alt: "Workshop in progress" },
        { src: "/placeholder-workshop-2.jpg", alt: "Group discussion" },
        { src: "/placeholder-workshop-3.jpg", alt: "Presentation moment" },
        { src: "/placeholder-workshop-4.jpg", alt: "Collaborative work" },
        { src: "/placeholder-workshop-5.jpg", alt: "Technical session" }
      ]
    },
    networking: {
      title: "NETWORKING & SOCIAL",
      description: "Connecting ambassadors from around the globe",
      images: [
        { src: "/placeholder-networking-1.jpg", alt: "Welcome dinner" },
        { src: "/placeholder-networking-2.jpg", alt: "Coffee break" },
        { src: "/placeholder-networking-3.jpg", alt: "Group photo" },
        { src: "/placeholder-networking-4.jpg", alt: "Evening social" },
        { src: "/placeholder-networking-5.jpg", alt: "Informal discussions" },
        { src: "/placeholder-networking-6.jpg", alt: "Closing ceremony" }
      ]
    }
  }

  const openContainer = (containerKey: string) => {
    setActiveContainer(containerKey)
    setCurrentImageIndex(0)
  }

  const closeContainer = () => {
    setActiveContainer(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (activeContainer) {
      const collection = photoCollections[activeContainer as keyof typeof photoCollections]
      setCurrentImageIndex((prev) => (prev + 1) % collection.images.length)
    }
  }

  const prevImage = () => {
    if (activeContainer) {
      const collection = photoCollections[activeContainer as keyof typeof photoCollections]
      setCurrentImageIndex((prev) => (prev - 1 + collection.images.length) % collection.images.length)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="py-16 bg-black flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="berlin-heading text-4xl mb-8 text-white">GALLERY</h1>
          
          <div className="berlin-card p-8 mb-12">
            <p className="berlin-body text-lg leading-relaxed">
              Explore photos from our workshop venue and upcoming event sessions
            </p>
          </div>

          {/* Photo Collections Grid */}
          <section className="mb-16">
            <h2 className="berlin-heading text-3xl mb-8 text-white">PHOTO COLLECTIONS</h2>
            <div className="berlin-grid">
              {Object.entries(photoCollections).map(([key, collection]) => (
                <div 
                  key={key}
                  className={`berlin-card p-6 group transition-all duration-300 ${
                    key === 'venue' 
                      ? 'cursor-pointer hover:scale-105' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={key === 'venue' ? () => openContainer(key) : undefined}
                >
                  <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 berlin-mono text-xs">
                      {key === 'venue' ? `${collection.images.length} PHOTOS` : 'COMING SOON'}
                    </div>
                  </div>
                  <h3 className="berlin-heading text-lg mb-2 text-black">{collection.title}</h3>
                  <p className="berlin-body text-sm text-gray-600">{collection.description}</p>
                  {key !== 'venue' && (
                    <div 
                      className="mt-4 p-4 text-center border-2 border-black"
                      style={{backgroundColor: '#000000'}}
                    >
                      <span 
                        className="berlin-mono text-lg font-bold tracking-wider" 
                        style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                      >
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <h2 className="berlin-heading text-3xl mb-8 text-white">VIDEO HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="berlin-card p-6 aspect-video flex flex-col opacity-50 cursor-not-allowed">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-black border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.353.353a1 1 0 00.707.293H15a2 2 0 012 2v2a2 2 0 01-2 2h-2.343M7 8v4m0 0v4m0-4h4" />
                      </svg>
                    </div>
                    <p className="berlin-mono text-black text-sm">WORKSHOP HIGHLIGHTS</p>
                    <p className="berlin-body text-gray-500 text-xs mt-1">Behind the scenes footage</p>
                  </div>
                </div>
                <div 
                  className="mt-4 p-3 text-center border-2 border-black"
                  style={{backgroundColor: '#000000'}}
                >
                  <span 
                    className="berlin-mono text-sm font-bold tracking-wider" 
                    style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                  >
                    COMING SOON
                  </span>
                </div>
              </div>
              <div className="berlin-card p-6 aspect-video flex flex-col opacity-50 cursor-not-allowed">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-black border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="berlin-mono text-black text-sm">SPEAKER SESSIONS</p>
                    <p className="berlin-body text-gray-500 text-xs mt-1">Key presentation moments</p>
                  </div>
                </div>
                <div 
                  className="mt-4 p-3 text-center border-2 border-black"
                  style={{backgroundColor: '#000000'}}
                >
                  <span 
                    className="berlin-mono text-sm font-bold tracking-wider" 
                    style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                  >
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {/* Photo Viewer Modal */}
      {activeContainer && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col pt-20">
          {/* Header Bar */}
          <div className="bg-white border-b-4 border-black p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="berlin-heading text-xl text-black">
                {photoCollections[activeContainer as keyof typeof photoCollections].title}
              </h3>
              <p className="berlin-mono text-sm text-black">
                {currentImageIndex + 1} / {photoCollections[activeContainer as keyof typeof photoCollections].images.length}
              </p>
            </div>
            <button
              onClick={closeContainer}
              className="bg-black text-white hover:bg-red-600 hover:border-red-600 transition-all duration-200 p-4 border-4 border-black shadow-lg flex-shrink-0"
              aria-label="Close photo viewer"
              style={{minWidth: '60px', minHeight: '60px'}}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Full Screen Image Container */}
          <div className="flex-1 relative bg-black flex items-center justify-center p-4">
            <img
              src={photoCollections[activeContainer as keyof typeof photoCollections].images[currentImageIndex].src}
              alt={photoCollections[activeContainer as keyof typeof photoCollections].images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
              style={{ 
                imageRendering: 'auto',
                minWidth: '80vw',
                minHeight: '70vh',
                maxWidth: '95vw',
                maxHeight: '85vh'
              }}
              onError={(e) => {
                console.error('Image failed to load:', e.currentTarget.src)
              }}
            />

            {/* Navigation Buttons */}
            {photoCollections[activeContainer as keyof typeof photoCollections].images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200 transition-colors p-4 border-4 border-black shadow-lg"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200 transition-colors p-4 border-4 border-black shadow-lg"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Footer Info */}
          <div className="bg-white border-t-4 border-black p-4">
            <p className="berlin-body text-gray-600 text-center">
              {photoCollections[activeContainer as keyof typeof photoCollections].images[currentImageIndex].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 