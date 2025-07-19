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
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="time-badge text-sm px-3 py-1 rounded-full">{time}</span>
        <span className="text-sm text-gray-600">{category}</span>
      </div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="text-sm text-gray-600">
        {speaker && <p>Speaker: {speaker}</p>}
        {host && <p>Host: {host}</p>}
        {location && <p>Location: {location}</p>}
      </div>
    </div>
  )
} 