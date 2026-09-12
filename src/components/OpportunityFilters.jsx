import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const OpportunityFilters = ({ filters, onFilterChange }) => {
  const [expandedFilter, setExpandedFilter] = useState(null)

  const toggleFilter = (key) => {
    setExpandedFilter(expandedFilter === key ? null : key)
  }

  const filterOptions = {
    category: ['Jobs', 'Internships', 'Scholarships', 'Freelance', 'Training', 'Grants', 'Competitions'],
    location: ['Kigali', 'Musanze', 'Huye', 'Rubavu', 'Nyagatare', 'Remote'],
    type: ['Full-time', 'Part-time', 'Contract', 'Temporary'],
    remote: ['Remote', 'On-site', 'Hybrid'],
  }

  const handleCheckChange = (filterKey, value) => {
    const currentValues = filters[filterKey] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    onFilterChange({ ...filters, [filterKey]: newValues })
  }

  return (
    <div className="space-y-3">
      {Object.entries(filterOptions).map(([key, options]) => (
        <div key={key} className="border border-neutral-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFilter(key)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition"
          >
            <span className="font-600 text-sm capitalize">{key}</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${expandedFilter === key ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedFilter === key && (
            <div className="border-t border-neutral-200 bg-neutral-50 p-3 space-y-2">
              {options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={(filters[key] || []).includes(option)}
                    onChange={() => handleCheckChange(key, option)}
                    className="rounded accent-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default OpportunityFilters
