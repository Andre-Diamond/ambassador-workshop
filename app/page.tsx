'use client'

import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Home() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  const openWindow = (windowType: string) => {
    setActiveWindow(windowType === activeWindow ? null : windowType)
  }

  const closeWindow = () => {
    setActiveWindow(null)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="cardano-title-banner">
                  <div className="cardano-logo-container">
                    <div className="cardano-logo">
                      <Image
                        src="/Cardano-RGB_Logo-Icon-Black.png"
                        alt="Cardano Logo"
                        width={80}
                        height={80}
                        className="cardano-official-logo"
                      />
                    </div>
                  </div>
                  <div className="title-text">
                    <h1 className="main-title">Cardano Ambassador Workshop</h1>
                    <h2 className="sub-title">Summit pre & side event for cardano ambassadors</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Info Dashboard */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="berlin-heading text-3xl md:text-4xl mb-4 text-black">
                Workshop Details
              </h2>
            </div>
            
            {/* Enhanced Dashboard Grid */}
            <div className="berlin-grid">
              {/* Who Section */}
              <div 
                className={`berlin-card p-8 lg:p-10 text-center group cursor-pointer transition-all duration-300 ${activeWindow === 'who' ? 'scale-105 shadow-lg' : ''}`}
                onClick={() => openWindow('who')}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="berlin-heading text-2xl lg:text-3xl mb-3 text-black">Who</h3>
                </div>
                <p className="berlin-mono text-black leading-relaxed">
                  CARDANO AMBASSADORS<br />
                </p>
              </div>

              {/* Where Section */}
              <div 
                className={`berlin-card p-8 lg:p-10 text-center group cursor-pointer transition-all duration-300 ${activeWindow === 'where' ? 'scale-105 shadow-lg' : ''}`}
                onClick={() => openWindow('where')}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                    </svg>
                  </div>
                  <h3 className="berlin-heading text-2xl lg:text-3xl mb-3 text-black">Where</h3>
                </div>
                <div className="space-y-3">
                  <p className="berlin-body text-gray-600 leading-relaxed">
                    Dorfstraße 17, 15938 Drahnsdorf
                  </p>
                </div>
              </div>

              {/* When Section */}
              <div 
                className={`berlin-card p-8 lg:p-10 text-center group cursor-pointer transition-all duration-300 ${activeWindow === 'when' ? 'scale-105 shadow-lg' : ''}`}
                onClick={() => openWindow('when')}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="berlin-heading text-2xl lg:text-3xl mb-3 text-black">When</h3>
                </div>
                <div className="space-y-2">
                  <p className="berlin-mono text-black leading-relaxed">NOVEMBER 7-10, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side Panel Overlay */}
        {activeWindow && (
          <>            
            {/* Side Panel */}
            <div className={`fixed top-20 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white border-l-4 border-black z-50 transform transition-transform duration-300 ease-in-out ${activeWindow ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto shadow-2xl`}>
              {/* Panel Header */}
              <div className="bg-black text-white p-4 md:p-6 border-b-4 border-black sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-white flex items-center justify-center flex-shrink-0">
                      {activeWindow === 'who' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {activeWindow === 'where' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                        </svg>
                      )}
                      {activeWindow === 'when' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <h2 className="berlin-heading text-xl md:text-2xl truncate">
                      {activeWindow === 'who' && 'WHO'}
                      {activeWindow === 'where' && 'WHERE'}
                      {activeWindow === 'when' && 'WHEN'}
                    </h2>
                  </div>
                  <button 
                    onClick={closeWindow}
                    className="bg-white text-black hover:bg-gray-200 hover:text-black transition-all duration-200 p-3 border-2 border-white flex-shrink-0 ml-4 rounded-none"
                    aria-label="Close panel"
                    style={{minWidth: '48px', minHeight: '48px'}}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-8">
                {activeWindow === 'who' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="berlin-heading text-2xl mb-6 text-black">CARDANO AMBASSADORS</h3>
                      <p className="berlin-body text-gray-700 text-lg leading-relaxed mb-6">
                        This workshop is  for <strong>Cardano Ambassadors</strong> from around the globe.
                      </p>
                    </div>

                    <div className="berlin-card-dark p-6">
                      <h4 className="berlin-heading text-lg text-white mb-4">PARTICIPANTS INCLUDE</h4>
                      <ul className="berlin-mono text-sm text-gray-300 space-y-3">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white"></div>
                          <span>ACTIVE AMBASSADORS</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white"></div>
                          <span>CARDANO FOUNDATION MEMBERS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeWindow === 'where' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="berlin-heading text-2xl mb-6 text-black">BERLIN AREA</h3>
                      <div className="berlin-card-dark p-6 text-center mb-6">
                        <p className="berlin-mono text-white text-lg">
                          Dorfstraße 17<br />
                          15938 Drahnsdorf<br />
                          GERMANY
                        </p>
                      </div>
                      <p className="berlin-body text-gray-700 text-lg leading-relaxed">
                        Located in a small village not far from Berlin, a calm and cosy place with enough space to host everyone and to provide seminar/workshop spaces. Everything included, all you need to bring is your laptop :)
                      </p>
                    </div>

                    <div>
                      <h4 className="berlin-heading text-lg text-black mb-4">VENUE FEATURES</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="berlin-card p-4 text-center">
                          <p className="berlin-mono text-xs text-black">CONFERENCE ROOMS</p>
                        </div>
                        <div className="berlin-card p-4 text-center">
                          <p className="berlin-mono text-xs text-black">CATERING</p>
                        </div>
                        <div className="berlin-card p-4 text-center">
                          <p className="berlin-mono text-xs text-black">CHILL AREAS</p>
                        </div>
                        <div className="berlin-card p-4 text-center">
                          <p className="berlin-mono text-xs text-black">ACCOMMODATION</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="berlin-heading text-lg text-black mb-4">ACCESSIBILITY</h4>
                      <p className="berlin-body text-gray-700 leading-relaxed">
                        Easily accessible via public transportation. By train you take the RE8 to get to Drahnsdorf train station. A 5 minute walk from there brings you to the venue
                      </p>
                    </div>

                    <div>
                      <h4 className="berlin-heading text-lg text-black mb-4">VENUE DETAILS</h4>
                      <p className="berlin-body text-gray-700 leading-relaxed mb-6">
                        Learn more about Projektraum Drahnsdorf, where we host the workshop and accomodate everyone.
                      </p>
                      <a 
                        href="https://www.projektraum-drahnsdorf.de/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="berlin-button-primary w-full py-4 text-center font-semibold inline-block"
                      >
                        VENUE WEBSITE
                      </a>
                    </div>
                  </div>
                )}

                {activeWindow === 'when' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="berlin-heading text-2xl mb-6 text-black">NOVEMBER 7 - 10, 2024</h3>
                      <div className="berlin-card-dark p-6 text-center mb-6">
                        <p className="berlin-mono text-white text-lg">
                          4 DAYS<br />
                        </p>
                      </div>
                      <p className="berlin-body text-gray-700 text-lg leading-relaxed">
                        Right before the Cardano Summit.
                      </p>
                    </div>

                    <div>
                      <h4 className="berlin-heading text-lg text-black mb-6">DAILY SCHEDULE</h4>
                      <div className="space-y-4">
                        <div className="berlin-card p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center berlin-mono text-sm font-bold">
                              7
                            </div>
                            <h5 className="berlin-heading text-lg text-black">NOV 7 - FRIDAY</h5>
                          </div>
                          <p className="berlin-body text-gray-700">Arrival day - Welcome & Chill</p>
                        </div>
                        
                        <div className="berlin-card p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center berlin-mono text-sm font-bold">
                              8
                            </div>
                            <h5 className="berlin-heading text-lg text-black">NOV 8 - SATURDAY</h5>
                          </div>
                          <p className="berlin-body text-gray-700">Sessions and presentations</p>
                        </div>
                        
                        <div className="berlin-card p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center berlin-mono text-sm font-bold">
                              9
                            </div>
                            <h5 className="berlin-heading text-lg text-black">NOV 9 - SUNDAY</h5>
                          </div>
                          <p className="berlin-body text-gray-700">More Sessions and presentations + onboarding locals ;)</p>
                        </div>
                        
                        <div className="berlin-card p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center berlin-mono text-sm font-bold">
                              10
                            </div>
                            <h5 className="berlin-heading text-lg text-black">NOV 10 - MONDAY</h5>
                          </div>
                          <p className="berlin-body text-gray-700">Wrap-up and departure, everyone heading to Berlin for the Summit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Sign-up Section - Featured CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="berlin-title text-4xl md:text-5xl mb-6">
              Ready to Join?
            </h2>
            <p className="berlin-body text-xl md:text-2xl mb-12 leading-relaxed">
              THERE YOU GO<br />
            </p>
            
            <div className="berlin-grid max-w-4xl mx-auto">
              {/* Attendee Sign-up */}
              <div className="berlin-card-dark p-8 lg:p-10 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-white flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="berlin-heading text-2xl mb-4 text-white">ATTEND WORKSHOP</h3>
                </div>
                <p className="berlin-body text-gray-300 mb-6 leading-relaxed">
                  JOIN US AT THE WORKSHOP
                </p>
                <a 
                  href="https://forms.gle/yK48hKvESjas7w5v7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="berlin-button-secondary w-full py-4 text-lg font-semibold inline-block"
                >
                  Sign Up as Attendee
                </a>
              </div>

              {/* Speaker Sign-up */}
              <div className="berlin-card p-8 lg:p-10 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="berlin-heading text-2xl mb-4 text-black">BECOME A SPEAKER</h3>
                </div>
                <p className="berlin-body text-gray-700 mb-6 leading-relaxed">
                  HOST A SESSION
                </p>
                <a 
                  href="https://forms.gle/M1Ci8dZsxQ3WwJN58" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="berlin-button-primary w-full py-4 text-lg font-semibold inline-block"
                >
                  submit a Session
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Objectives */}
        <section className="py-20 bg-white border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="berlin-heading text-4xl md:text-5xl mb-6 text-black">
                Workshop Objectives
              </h2>
              <p className="berlin-body text-xl text-black-100 max-w-3xl mx-auto leading-relaxed">
                What the Wrokshops aims for...
              </p>
            </div>

            {/* Cards in a grid layout */}
            <div className="berlin-grid">
              <div className="berlin-card-dark p-8 lg:p-10">
                <h3 className="berlin-heading text-2xl mb-6 text-white">To Meet & Connect</h3>
                <p className="berlin-body leading-relaxed text-lg text-gray-300">
                  To put faces to names, and to connect with other ambassadors around the globe.
                </p>
              </div>

              <div className="berlin-card p-8 lg:p-10">
                <h3 className="berlin-heading text-2xl mb-6 text-black">To Share Insights & Knowledge</h3>
                <p className="berlin-body leading-relaxed text-lg text-gray-700">
                  To share insights, expertise and knowledge with other ambassadors in the community.
                </p>
              </div>

              <div className="berlin-card-dark p-8 lg:p-10">
                <h3 className="berlin-heading text-2xl mb-6 text-white">To Better Build Together</h3>
                <p className="berlin-body leading-relaxed text-lg text-gray-300">
                  To level up our skills, and to build together for a greater tomorrow of the Cardano ecosystem.
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