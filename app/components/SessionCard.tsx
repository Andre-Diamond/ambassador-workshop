interface SessionCardProps {
  time: string
  category: string
  title: string
  description: string
  speaker?: string
  location?: string
  host?: string
}

export default function SessionCard({ 
  time, 
  category, 
  title, 
  description, 
  speaker, 
  location, 
  host 
}: SessionCardProps) {
  return (
    <div className="berlin-card p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="time-badge text-sm px-3 py-1">{time}</span>
        <span className="berlin-mono text-sm text-gray-600 uppercase">{category}</span>
      </div>
      <h3 className="berlin-heading text-xl text-black mb-2">{title}</h3>
      <p className="berlin-body text-gray-700 mb-3">{description}</p>
      <div className="berlin-mono text-sm text-gray-600 space-y-1">
        {speaker && <p><span className="text-black font-bold">SPEAKER:</span> {speaker}</p>}
        {host && <p><span className="text-black font-bold">HOST:</span> {host}</p>}
        {location && <p><span className="text-black font-bold">LOCATION:</span> {location}</p>}
      </div>
    </div>
  )
} 