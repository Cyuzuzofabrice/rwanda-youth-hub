import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { careerPaths } from '../data/careers'
import { opportunities } from '../data/opportunities'
import { ChevronDown } from 'lucide-react'

const Career = () => {
  const navigate = useNavigate()
  const [selectedCareer, setSelectedCareer] = useState(null)
  const [expandedCareer, setExpandedCareer] = useState(null)

  const career = selectedCareer ? careerPaths.find((c) => c.id === selectedCareer) : null
  const relatedOpportunities = career
    ? opportunities.filter((opp) => career.opportunities.includes(opp.id))
    : []

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Career Paths</h1>
          <p className="text-neutral-600">Explore different career opportunities and build your roadmap</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Career List */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-neutral-900 mb-4">Careers</h2>
            <div className="space-y-2">
              {careerPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => {
                    setSelectedCareer(selectedCareer === path.id ? null : path.id)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                    selectedCareer === path.id
                      ? 'bg-primary text-white border-primary'
                      : 'border-neutral-200 bg-white hover:bg-neutral-50'
                  }`}
                >
                  <p className="font-600">{path.title}</p>
                  <p className={`text-xs ${selectedCareer === path.id ? 'text-primary-light' : 'text-neutral-600'}`}>
                    {path.skills.length} skills
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Career Details */}
          <div className="lg:col-span-2">
            {career ? (
              <div className="space-y-6">
                {/* Overview */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{career.title}</h2>
                  <p className="text-neutral-600 mb-4">{career.description}</p>
                </div>

                {/* Skills */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Skills to Learn</h3>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
                      <span key={skill} className="px-3 py-2 bg-primary bg-opacity-10 text-primary rounded-md text-sm font-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Resources */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Recommended Learning</h3>
                  <ul className="space-y-2">
                    {career.resources.map((resource, idx) => (
                      <li key={idx}>
                        <a
                          href={resource.url}
                          className="text-primary hover:underline font-600 flex items-center gap-2"
                        >
                          {resource.title}
                          <span className="text-xs">→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => navigate('/learn')} className="btn-outline w-full mt-4">
                    Browse All Resources
                  </button>
                </div>

                {/* Related Opportunities */}
                {relatedOpportunities.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Related Opportunities</h3>
                    <div className="space-y-3">
                      {relatedOpportunities.map((opp) => (
                        <div
                          key={opp.id}
                          className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 cursor-pointer transition"
                          onClick={() => navigate(`/opportunities/${opp.id}`)}
                        >
                          <h4 className="font-bold text-neutral-900 mb-1">{opp.title}</h4>
                          <p className="text-sm text-neutral-600">{opp.organization}</p>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate('/opportunities')} className="btn-outline w-full mt-4">
                      View All Opportunities
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="card p-8 text-center">
                <p className="text-neutral-600 mb-4">Select a career path to see details, skills, and opportunities</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Career
