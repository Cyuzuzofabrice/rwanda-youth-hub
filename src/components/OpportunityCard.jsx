import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Badge } from 'lucide-react'

const OpportunityCard = ({ opportunity }) => {
  return (
    <Link to={`/opportunities/${opportunity.id}`}>
      <div className="card p-4 hover:shadow-lg cursor-pointer">
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-base text-neutral-900 line-clamp-2 flex-1">{opportunity.title}</h3>
            <span className="text-xs font-600 px-2 py-1 bg-neutral-100 text-neutral-700 rounded whitespace-nowrap">
              {opportunity.type}
            </span>
          </div>
          <p className="text-sm text-neutral-600 mb-2">{opportunity.organization}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-3 text-xs text-neutral-600">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(opportunity.deadline).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-sm text-neutral-700 line-clamp-2 mb-3">{opportunity.description}</p>

        <div className="flex gap-2">
          <button className="btn-small-primary flex-1">
            View Opportunity
          </button>
        </div>
      </div>
    </Link>
  )
}

export default OpportunityCard
