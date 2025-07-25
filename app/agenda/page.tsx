'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SessionCard from '../components/SessionCard'

type Day = 'day1' | 'day2' | 'day3' | 'day4'

export default function Agenda() {
  const [selectedDay, setSelectedDay] = useState<Day>('day1')

  // Hide scrollbar on this page only
  useEffect(() => {
    document.body.classList.add('no-scrollbar')
    return () => {
      document.body.classList.remove('no-scrollbar')
    }
  }, [])

  const days = [
    { id: 'day1', label: 'Day 1', subtitle: 'Friday - Arrival' },
    { id: 'day2', label: 'Day 2', subtitle: 'Saturday - Workshops' },
    { id: 'day3', label: 'Day 3', subtitle: 'Sunday - Workshops' },
    { id: 'day4', label: 'Day 4', subtitle: 'Monday - Departure' }
  ]

  const renderDay1 = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-stretch">
      <SessionCard 
        time="09:00 - 17:00"
        category="Keynote"
        title="Arrival"
        description="Ambassadors arriving at the venue, cosy & cool"
        speaker="None"
        location="Venue"
      />

      <SessionCard 
        time="17:00 - 19:00"
        category="Networking"
        title="Dinner"
        description="Ambassador Dinner at the venue"
        host="Event Team"
        location="Lobby"
      />
    </div>
  )

  const renderDay2 = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-stretch">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <p className="text-gray-700 mb-3">Getting the ballies filled & coffeein injected to kick off the day</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Venue</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:30 - 12:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #1</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">13:00 - 14:00</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #2</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">14:00 - 15:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Lunch</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">15:00 - 16:00</span>
          <span className="text-sm text-gray-600">Chill & Connect</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Chill & Connect</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: none</p>
          <p>Location: Venue</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">16:00 - 17:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #3</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">18:00 - 19:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Dinner</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Venue</p>
        </div>
      </div>
    </div>
  )

  const renderDay3 = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-stretch">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <p className="text-gray-700 mb-3">Getting the ballies filled & coffeein injected to kick off the day</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Venue</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:30 - 12:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #4</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">13:00 - 14:00</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #5</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">14:00 - 15:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Lunch</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">15:00 - 16:00</span>
          <span className="text-sm text-gray-600">Chill & Connect</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Chill & Connect</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: none</p>
          <p>Location: Venue</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">16:00 - 17:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Workshop #6</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: To be announced</p>
          <p>Location: To be announced</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">18:00 - 19:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Dinner</h3>
        <p className="text-gray-700 mb-3">To be announced</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Venue</p>
        </div>
      </div>
    </div>
  )

  const renderDay4 = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-stretch">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <p className="text-gray-700 mb-3">Getting the ballies filled & coffeein injected to kick off the day</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Venue</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:00 - 12:00</span>
          <span className="text-sm text-gray-600">Wrap Up</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Recap & Wrap up</h3>
        <p className="text-gray-700 mb-3">Wrapping up the workshop and sharing reflections</p>
        <div className="text-sm text-gray-600">
          <p>Host: Everyone</p>
          <p>Location: Room A</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">12:00</span>
          <span className="text-sm text-gray-600">Closure</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Closing & Farewell</h3>
        <p className="text-gray-700 mb-3">Final words, future opportunities, and farewell reception</p>
        <div className="text-sm text-gray-600">
          <p>Host: Event Team</p>
          <p>Location: Lobby</p>
        </div>
      </div>
    </div>
  )

  const renderSelectedDay = () => {
    switch (selectedDay) {
      case 'day1':
        return renderDay1()
      case 'day2':
        return renderDay2()
      case 'day3':
        return renderDay3()
      case 'day4':
        return renderDay4()
      default:
        return renderDay1()
    }
  }

  const getCurrentDayInfo = () => {
    const dayInfo = days.find(day => day.id === selectedDay)
    return dayInfo || days[0]
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Workshop Agenda</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Agenda will be defined by Ambassadors who will be invited to submit their own workshop topics which they want to host as speakers and presenters.
              The exact agenda will be announced in due time.
            </p>
          </div>

          {/* Day Selection Menu */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id as Day)}
                  className={`flex items-center rounded-xl font-medium transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                    selectedDay === day.id
                      ? 'shadow-xl shadow-black/25 ring-2 ring-black/20'
                      : 'shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25'
                  }`}
                  style={{
                    boxShadow: selectedDay === day.id 
                      ? '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 6px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Day Number Section */}
                  <div 
                    className="px-3 py-2 text-white transition-all duration-300 relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.95) 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="text-sm font-bold">{day.label}</div>
                  </div>
                  
                  {/* Title Section */}
                  <div 
                    className={`px-4 py-2 transition-all duration-300 relative ${
                      selectedDay === day.id
                        ? 'text-dark-red border-l border-dark-red/20'
                        : 'text-black border-l border-gray-200'
                    }`}
                    style={{
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.95) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.85) 100%)',
                      boxShadow: selectedDay === day.id 
                        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                        : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="text-sm font-semibold whitespace-nowrap">
                      {day.subtitle.split(' - ')[1]}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Day Content */}
          <section className="mb-16">
            <div className="min-h-[800px] transition-all duration-300 flex items-start">
              <div className="w-full">
                {renderSelectedDay()}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
} 